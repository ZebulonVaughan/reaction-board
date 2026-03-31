type ReactionStatus = "ready" | "pending" | "synced" | "copied";

export function ReactionStatusChip({ status }: { status: ReactionStatus | string }) {
  const normalized = (["ready", "pending", "synced", "copied"].includes(status) ? status : "ready") as ReactionStatus;
  return <span className={`chip ${normalized}`}>{normalized}</span>;
}
