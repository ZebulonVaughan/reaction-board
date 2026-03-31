"use client";

import { ReactionSelector } from "@/components/ReactionSelector";
import { ReactionSummaryPanel } from "@/components/ReactionSummaryPanel";
import { SendReactionButton } from "@/components/SendReactionButton";
import { WalletButton } from "@/components/WalletButton";
import { useReactionBoard } from "@/hooks/useReactionBoard";

export default function ReactPage() {
  const {
    selectedReaction,
    setSelectedReaction,
    latestRecord,
    latestReactionId,
    isPending,
    isConfirming,
    isSuccess,
    statusText,
    sendReaction,
    txHash
  } = useReactionBoard();

  return (
    <section className="page page-react">
      <div className="react-layout">
        <div className="console-panel control-panel">
          <div className="panel-label">Reaction Console</div>
          <div className="section-heading">
            <h1>Tap a code</h1>
            <WalletButton />
          </div>
          <ReactionSelector value={selectedReaction} onChange={setSelectedReaction} emphasis />
          <SendReactionButton
            selectedReaction={selectedReaction}
            isPending={isPending}
            isConfirming={isConfirming}
            onSend={sendReaction}
          />
          <div className="tx-strip">
            <span className={`status-dot ${isSuccess ? "active" : ""}`} />
            <span>{statusText}</span>
            {txHash ? <span className="mono-text">{`${txHash.slice(0, 10)}...`}</span> : null}
          </div>
        </div>
        <div className="react-side">
          <ReactionSummaryPanel variant="react" latestRecord={latestRecord} latestReactionId={latestReactionId} />
        </div>
      </div>
    </section>
  );
}
