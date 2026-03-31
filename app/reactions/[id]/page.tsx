"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { CopyReactionButton } from "@/components/CopyReactionButton";
import { EmptyState } from "@/components/EmptyState";
import { ReactionCard } from "@/components/ReactionCard";
import { ReactionStatusChip } from "@/components/ReactionStatusChip";
import { useReactionRecord } from "@/hooks/useReactionRecord";

export default function ReactionDetailPage() {
  const params = useParams<{ id: string }>();
  const { record, option } = useReactionRecord(params.id);

  if (!record || !option) {
    return (
      <section className="page page-detail">
        <EmptyState
          title="Signal not found"
          description="This reaction record is not available in the local activity log yet."
          action={{ href: "/react", label: "Send a New Reaction" }}
        />
      </section>
    );
  }

  return (
    <section className="page page-detail">
      <div className="detail-stage">
        <div className="detail-hero console-panel">
          <div className="panel-label">Reaction Detail</div>
          <ReactionCard option={option} record={record} mode="detail" />
          <div className="detail-meta">
            <ReactionStatusChip status={record.status} />
            <CopyReactionButton value={record.txHash || record.id} label="Copy signal id" />
          </div>
        </div>
        <aside className="detail-aside console-panel">
          <div className="panel-label">Signal Notes</div>
          <dl className="meta-list">
            <div>
              <dt>Owner</dt>
              <dd>{record.address}</dd>
            </div>
            <div>
              <dt>Reaction code</dt>
              <dd>{option.id}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{record.status}</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>{record.timestampLabel}</dd>
            </div>
          </dl>
          <div className="mini-links">
            <Link href="/my">Open my panel</Link>
            <Link href="/react">Send another signal</Link>
            <Link href="/explore">Browse all reactions</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
