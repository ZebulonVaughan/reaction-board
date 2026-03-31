import Link from "next/link";

export function ConsoleHeader() {
  return (
    <header className="console-header">
      <div className="header-bar">
        <div className="brand-lockup">
          <div className="brand-mark" />
          <div>
            <div className="eyebrow">Base Mini App</div>
            <div className="brand-title">reaction-board</div>
            <p className="brand-subtitle">A live social response console on Base</p>
          </div>
        </div>
        <Link className="button ghost" href="/react">
          Open Console
        </Link>
      </div>
    </header>
  );
}
