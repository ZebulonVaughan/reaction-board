import Link from "next/link";

const railLinks = [
  { href: "/", label: "Hub" },
  { href: "/react", label: "React" },
  { href: "/my", label: "My" },
  { href: "/explore", label: "Explore" }
];

export function SideRail() {
  return (
    <aside className="side-rail">
      <div className="rail-card primary">
        <div className="rail-stack">
          <div className="rail-badge">20</div>
          <div className="rail-stat">
            <span className="rail-stat-label">Reaction codes</span>
            <span className="rail-stat-value">Live set</span>
          </div>
        </div>
      </div>
      <div className="rail-card">
        <div className="rail-stack">
          {railLinks.map((item) => (
            <Link key={item.href} href={item.href} className="eyebrow">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="rail-card">
        <div className="rail-stack">
          <span className="rail-stat-label">Mode</span>
          <span className="rail-stat-value">Synced</span>
        </div>
      </div>
    </aside>
  );
}
