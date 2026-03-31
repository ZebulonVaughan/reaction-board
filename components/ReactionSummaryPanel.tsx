"use client";

import { useMemo } from "react";
import { useAccount } from "wagmi";
import { EmptyState } from "@/components/EmptyState";
import { ReactionStatusChip } from "@/components/ReactionStatusChip";
import { useReactionBoard } from "@/hooks/useReactionBoard";
import { getReactionOption } from "@/lib/reaction-options";
import { ReactionRecord } from "@/lib/types";

type Props = {
  variant: "hub" | "react" | "my";
  latestRecord?: ReactionRecord | null;
  latestReactionId?: number | null;
};

export function ReactionSummaryPanel({ variant, latestRecord, latestReactionId }: Props) {
  const { isConnected } = useAccount();
  const board = useReactionBoard();
  const record = latestRecord ?? board.latestRecord;
  const chainReactionId = latestReactionId ?? board.latestReactionId;

  const option = useMemo(() => {
    if (record?.reactionId) return getReactionOption(record.reactionId);
    if (chainReactionId) return getReactionOption(chainReactionId);
    return null;
  }, [chainReactionId, record?.reactionId]);

  if (!isConnected && !record && !option) {
    return (
      <div className="summary-panel">
        <EmptyState
          title="Wallet not connected"
          description="Connect a wallet to sync your latest reaction and send a new signal."
          action={{ href: "/react", label: "Open Console" }}
        />
      </div>
    );
  }

  if (!option) {
    return (
      <div className="summary-panel">
        <EmptyState
          title="No active signal"
          description="Choose a reaction code to start your latest response feed."
          action={{ href: "/react", label: "Send a Reaction" }}
        />
      </div>
    );
  }

  return (
    <div className="summary-panel">
      <div className="summary-top">
        <div>
          <div className="panel-label">{variant === "hub" ? "Latest Board State" : "Current Status"}</div>
          <h2>{option.label}</h2>
        </div>
        <ReactionStatusChip status={record?.status ?? "ready"} />
      </div>
      <div className="summary-number">{String(option.id).padStart(2, "0")}</div>
      <div className="summary-tag">{option.shortLabel}</div>
      <div className="signal-grid">
        <div className="signal-cell">
          <span className="chip-label">Mode</span>
          <strong>{record?.txHash ? "Synced" : "Preview"}</strong>
        </div>
        <div className="signal-cell">
          <span className="chip-label">Status</span>
          <strong>{record?.status ?? "ready"}</strong>
        </div>
        <div className="signal-cell">
          <span className="chip-label">Last seen</span>
          <strong>{record?.timestampLabel ?? "On request"}</strong>
        </div>
      </div>
    </div>
  );
}
