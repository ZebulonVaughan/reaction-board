import Link from "next/link";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: {
    href: string;
    label: string;
  };
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="panel-label">Ready</div>
      <h2>{title}</h2>
      <p className="muted-copy">{description}</p>
      {action ? (
        <Link className="button primary" href={action.href}>
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
