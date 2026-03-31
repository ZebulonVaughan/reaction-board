import Link from "next/link";
import { ReactionOption } from "@/lib/types";

export function ReactionOptionGrid({
  options,
  compact = false
}: {
  options: ReactionOption[];
  compact?: boolean;
}) {
  return (
    <div className="option-grid">
      {options.map((option) => (
        <Link key={option.id} className="option-tile" href={compact ? "/react" : `/reactions/${option.previewRecordId}`}>
          <div className="option-code">{String(option.id).padStart(2, "0")}</div>
          <div className="option-meta">
            <strong>{option.label}</strong>
            <span className="muted-copy">{compact ? option.shortLabel : option.description}</span>
          </div>
          <div className="option-footer">
            <span className="chip ready">{option.shortLabel}</span>
            <span className="eyebrow">View</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
