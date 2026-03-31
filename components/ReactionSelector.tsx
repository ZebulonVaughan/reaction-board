import { getAllReactions } from "@/lib/reaction-options";

type ReactionSelectorProps = {
  value: number;
  onChange: (value: number) => void;
  emphasis?: boolean;
};

export function ReactionSelector({ value, onChange, emphasis = false }: ReactionSelectorProps) {
  const options = getAllReactions();

  return (
    <div className={`selector-grid ${emphasis ? "emphasis" : ""}`}>
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            className={`selector-tile ${active ? "active" : ""}`}
            onClick={() => onChange(option.id)}
          >
            <div className="selector-code">{String(option.id).padStart(2, "0")}</div>
            <div className="selector-meta">
              <strong>{option.label}</strong>
              <span className="muted-copy">{option.description}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
