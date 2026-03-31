import { ReactionRecord } from "./types";

export function getFallbackAddress() {
  return "0x0000000000000000000000000000000000000000";
}

export function buildReactionRecord({
  address,
  reactionId,
  txHash,
  status
}: {
  address: string;
  reactionId: number;
  txHash?: `0x${string}`;
  status: ReactionRecord["status"];
}): ReactionRecord {
  const now = new Date();
  const stamp = now.toISOString();
  return {
    id: txHash ?? `local-${reactionId}-${now.getTime()}`,
    address,
    reactionId,
    txHash,
    timestamp: stamp,
    timestampLabel: now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    }),
    status
  };
}

export function getMockRecords(): ReactionRecord[] {
  return [1, 2, 3, 4].map((reactionId) =>
    buildReactionRecord({
      address: `0x7b${reactionId}4a6c8d92b31bbaab45d7890e7f2a3c${reactionId}${reactionId}`,
      reactionId,
      status: "synced"
    })
  );
}

export function toStatusText({
  isConnected,
  isPending,
  isConfirming,
  isSuccess,
  latestRecord
}: {
  isConnected: boolean;
  isPending: boolean;
  isConfirming: boolean;
  isSuccess: boolean;
  latestRecord: ReactionRecord | null;
}) {
  if (!isConnected) return "Connect wallet to send a reaction.";
  if (isPending) return "Wallet confirmation requested.";
  if (isConfirming) return "Transaction is syncing on Base.";
  if (isSuccess) return "Reaction synced and activity log refreshed.";
  if (latestRecord) return "Latest reaction is ready to review.";
  return "Ready to send a fresh signal.";
}
