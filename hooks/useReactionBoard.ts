"use client";

import { useEffect, useMemo, useState } from "react";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { trackTransaction } from "@/utils/track";
import { reactionBoardAbi, reactionBoardAddress } from "@/lib/contracts";
import { buildReactionRecord, getFallbackAddress, toStatusText } from "@/lib/reaction-records";
import { useLocalReactionStore } from "./useLocalReactionStore";

export function useReactionBoard() {
  const [selectedReaction, setSelectedReaction] = useState(1);
  const [pendingReaction, setPendingReaction] = useState<number | null>(null);
  const { address, isConnected } = useAccount();
  const { records, save } = useLocalReactionStore();
  const { data: latestReactionData } = useReadContract({
    address: reactionBoardAddress,
    abi: reactionBoardAbi,
    functionName: "lastReaction",
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address)
    }
  });
  const { data: txHash, isPending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash });

  const latestRecord = useMemo(() => {
    const normalized = address?.toLowerCase();
    return records.find((record) => record.address.toLowerCase() === normalized) ?? null;
  }, [address, records]);

  const latestReactionId = latestReactionData ? Number(latestReactionData) : null;

  useEffect(() => {
    if (!isSuccess || !txHash || !pendingReaction) return;

    const nextRecord = buildReactionRecord({
      address: address ?? getFallbackAddress(),
      reactionId: pendingReaction,
      txHash,
      status: "synced"
    });

    const nextRecords = [nextRecord, ...records.filter((record) => record.id !== nextRecord.id)].slice(0, 20);
    save(nextRecords);
    trackTransaction("app-023", "reaction-board", address, txHash);
    setPendingReaction(null);
  }, [address, isSuccess, pendingReaction, records, save, txHash]);

  function sendReaction() {
    if (!isConnected) return;
    setPendingReaction(selectedReaction);
    writeContract({
      address: reactionBoardAddress,
      abi: reactionBoardAbi,
      functionName: "react",
      args: [BigInt(selectedReaction)]
    });
  }

  return {
    selectedReaction,
    setSelectedReaction,
    latestRecord,
    latestReactionId,
    isPending,
    isConfirming,
    isSuccess,
    txHash,
    statusText: toStatusText({ isConnected, isPending, isConfirming, isSuccess, latestRecord }),
    sendReaction
  };
}
