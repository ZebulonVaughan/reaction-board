import Link from "next/link";
import { ActionBar } from "@/components/ActionBar";
import { ReactionOptionGrid } from "@/components/ReactionOptionGrid";
import { ReactionSummaryPanel } from "@/components/ReactionSummaryPanel";
import { WalletButton } from "@/components/WalletButton";
import { getFeaturedReactions } from "@/lib/reaction-options";

export default function HomePage() {
  return (
    <section className="page page-hub">
      <div className="hub-grid">
        <div className="hub-main console-panel">
          <div className="panel-label">Reaction Hub</div>
          <div className="hub-title-row">
            <div>
              <h1>Ready to react</h1>
              <p className="muted-copy">
                Pick a code, send a signal, and keep your latest response within reach.
              </p>
            </div>
            <WalletButton />
          </div>
          <ActionBar
            actions={[
              { href: "/react", label: "Send Reaction", tone: "primary" },
              { href: "/my", label: "View My Reaction", tone: "secondary" },
              { href: "/explore", label: "Browse Options", tone: "ghost" }
            ]}
          />
          <ReactionSummaryPanel variant="hub" />
        </div>
        <aside className="hub-side">
          <div className="console-panel stack-panel">
            <div className="panel-label">Reaction Options</div>
            <ReactionOptionGrid options={getFeaturedReactions()} compact />
          </div>
          <div className="console-panel note-panel">
            <div className="panel-label">Fast Routes</div>
            <div className="mini-links">
              <Link href="/react">Open control panel</Link>
              <Link href="/my">Check latest signal</Link>
              <Link href="/explore">Open reaction atlas</Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
