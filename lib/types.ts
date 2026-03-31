export type ReactionOption = {
  id: number;
  label: string;
  shortLabel: string;
  description: string;
  previewRecordId: string;
};

export type ReactionRecord = {
  id: string;
  address: string;
  reactionId: number;
  txHash?: `0x${string}`;
  timestamp: string;
  timestampLabel: string;
  status: "ready" | "pending" | "synced" | "copied";
};
