"use client";

import { EmptyState } from "@/components/EmptyState";
import { ReactionCard } from "@/components/ReactionCard";
import { ReactionSummaryPanel } from "@/components/ReactionSummaryPanel";
import { WalletButton } from "@/components/WalletButton";
import { useReactionBoard } from "@/hooks/useReactionBoard";
import { getReactionOption } from "@/lib/reaction-options";

export default function MyReactionPage() {
  const { latestRecord, latestReactionId } = useReactionBoard();
  const option = getReactionOption(latestRecord?.reactionId ?? latestReactionId ?? 0);

  return (
    <section className="page page-my">
      <div className="my-layout">
        <div className="console-panel personal-panel">
          <div className="section-heading">
            <div>
              <div className="panel-label">My Reaction</div>
              <h1>Personal signal</h1>
            </div>
            <WalletButton />
          </div>
          {latestRecord && option ? (
            <ReactionCard option={option} record={latestRecord} mode="personal" />
          ) : (
            <EmptyState
              title="No latest reaction"
              description="Connect a wallet and send a reaction to unlock your personal signal panel."
              action={{ href: "/react", label: "Open Reaction Console" }}
            />
          )}
        </div>
        <div className="my-side">
          <ReactionSummaryPanel variant="my" latestRecord={latestRecord} latestReactionId={latestReactionId} />
        </div>
      </div>
    </section>
  );
}
