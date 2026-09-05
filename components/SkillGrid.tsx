import { skillGroups } from "@/lib/data";

export default function SkillGrid() {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm text-ink-dim">{group.category}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-chip border border-chassis-line bg-chassis-panel px-2.5 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-signal-line hover:text-signal-bright"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
