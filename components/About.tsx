import { profile, experience } from "@/lib/data";

export default function About() {
  return (
    <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
      <p className="max-w-md text-lg leading-relaxed text-ink-muted">{profile.bio}</p>

      <div className="space-y-0 border-l border-chassis-line pl-8">
        {experience.map((item) => (
          <div key={item.company} className="relative border-b border-chassis-line py-6 first:pt-0 last:border-none">
            <span
              aria-hidden
              className="absolute -left-[calc(2rem+3px)] top-7 h-1.5 w-1.5 rounded-full bg-signal"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-base font-semibold text-ink">{item.role}</h3>
              <span className="font-mono text-xs text-ink-dim">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-signal-bright">{item.company}</p>
            <p className="mt-2 max-w-md text-sm text-ink-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
