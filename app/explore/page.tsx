import { ReactionOptionGrid } from "@/components/ReactionOptionGrid";
import { getAllReactions } from "@/lib/reaction-options";

export default function ExplorePage() {
  return (
    <section className="page page-explore">
      <div className="console-panel explore-panel">
        <div className="panel-label">Explore</div>
        <div className="section-heading">
          <div>
            <h1>Reaction atlas</h1>
            <p className="muted-copy">Scan every code and jump into the board with one tap.</p>
          </div>
        </div>
        <ReactionOptionGrid options={getAllReactions()} />
      </div>
    </section>
  );
}
