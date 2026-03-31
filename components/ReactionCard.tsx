import Link from "next/link";
import { ReactionOption, ReactionRecord } from "@/lib/types";
import { ReactionStatusChip } from "./ReactionStatusChip";

type ReactionCardProps = {
  option: ReactionOption;
  record: ReactionRecord;
  mode?: "default" | "detail" | "personal";
};

export function ReactionCard({ option, record, mode = "default" }: ReactionCardProps) {
  return (
    <article className={`reaction-card ${mode}`}>
      <div className="card-banner">
        <div>
          <div className="panel-label">Latest signal</div>
          <h2>{option.label}</h2>
        </div>
        <ReactionStatusChip status={record.status} />
      </div>
      <div className="big-code">{String(option.id).padStart(2, "0")}</div>
      <p className="muted-copy">{option.description}</p>
      <div className="signal-grid">
        <div className="signal-cell">
          <span className="chip-label">Owner</span>
          <strong>{`${record.address.slice(0, 6)}...${record.address.slice(-4)}`}</strong>
        </div>
        <div className="signal-cell">
          <span className="chip-label">Time</span>
          <strong>{record.timestampLabel}</strong>
        </div>
        <div className="signal-cell">
          <span className="chip-label">Signal</span>
          <strong>{record.txHash ? "Onchain" : "Mock"}</strong>
        </div>
      </div>
      <Link className="button ghost" href={`/reactions/${record.id}`}>
        Open Detail
      </Link>
    </article>
  );
}
