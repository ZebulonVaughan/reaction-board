"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Reaction Hub" },
  { href: "/react", label: "React" },
  { href: "/my", label: "My Reaction" },
  { href: "/explore", label: "Explore" }
];

export function TopTabs() {
  const pathname = usePathname();

  return (
    <nav className="top-tabs" aria-label="Primary">
      <div className="top-tabs-row">
        {tabs.map((tab) => {
          const active = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
          return (
            <Link key={tab.href} href={tab.href} className={`top-tab ${active ? "active" : ""}`}>
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
