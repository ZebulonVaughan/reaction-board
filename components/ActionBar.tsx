import Link from "next/link";

type Action = {
  href: string;
  label: string;
  tone: "primary" | "secondary" | "ghost";
};

export function ActionBar({ actions }: { actions: Action[] }) {
  return (
    <div className="action-bar">
      {actions.map((action) => (
        <Link key={action.href} href={action.href} className={`button ${action.tone}`}>
          {action.label}
        </Link>
      ))}
    </div>
  );
}
