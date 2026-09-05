"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectList() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <ul className="divide-y divide-chassis-line border-y border-chassis-line">
      {projects.map((project) => {
        const active = activeId === project.id;
        return (
          <li key={project.id}>
            <a
              href={project.href ?? "#"}
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(project.id)}
              onBlur={() => setActiveId(null)}
              className="group relative flex flex-col gap-4 py-7 pl-5 pr-2 transition-colors sm:flex-row sm:items-start sm:gap-8"
            >
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-full w-[2px] transition-colors duration-300 ${
                  active ? "bg-signal" : "bg-transparent"
                }`}
              />

              <div className="flex items-center gap-3 sm:w-20 sm:shrink-0 sm:pt-1">
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    active ? "bg-alert shadow-[0_0_8px_2px_rgba(226,55,68,0.55)]" : "bg-ink-dim"
                  }`}
                />
                <span className="font-mono text-xs text-ink-dim">{project.index}</span>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3
                    className={`font-display text-xl font-semibold transition-colors duration-300 sm:text-2xl ${
                      active ? "text-signal-bright" : "text-ink"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-dim">{project.year}</span>
                </div>

                <p className="mt-3 max-w-2xl text-ink-muted">{project.summary}</p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-ink-dim">{project.role}</span>
                  <span aria-hidden className="h-3 w-px bg-chassis-line" />
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-chip border border-chassis-line px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
