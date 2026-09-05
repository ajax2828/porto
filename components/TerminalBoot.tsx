"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Line = {
  prompt: boolean;
  text: string;
};

const SCRIPT: Line[] = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Ihsanzaki, software engineer" },
  { prompt: true, text: "status" },
  { prompt: false, text: "online, menerima proyek baru" },
  { prompt: true, text: "location" },
  { prompt: false, text: "jakarta, indonesia" },
];

const CHAR_DELAY = 22;
const LINE_PAUSE = 260;

export default function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;
    const lines: string[] = [];

    function typeNext() {
      if (cancelled) return;
      if (lineIndex >= SCRIPT.length) {
        setDone(true);
        return;
      }
      const current = SCRIPT[lineIndex];
      const prefix = current.prompt ? "$ " : "";
      charIndex++;
      const shown = current.text.slice(0, charIndex);
      lines[lineIndex] = prefix + shown;
      setVisibleLines([...lines]);

      if (shown.length >= current.text.length) {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, LINE_PAUSE);
      } else {
        setTimeout(typeNext, CHAR_DELAY);
      }
    }

    const startTimer = setTimeout(typeNext, 350);
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full rounded-pad border border-chassis-line bg-chassis-panel/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
    >
      <div className="flex items-center gap-1.5 border-b border-chassis-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-alert/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-dim/60" />
        <span className="ml-3 font-mono text-xs text-ink-dim">sesi.local</span>
      </div>
      <div className="min-h-[188px] px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {visibleLines.map((line, i) => {
          const isPrompt = line.startsWith("$ ");
          return (
            <div key={i} className={isPrompt ? "text-signal-bright" : "text-ink-muted"}>
              {line}
            </div>
          );
        })}
        <span
          aria-hidden
          className={`inline-block h-4 w-[7px] translate-y-[2px] bg-ink-muted ${
            done ? "animate-blink" : "opacity-100"
          }`}
        />
      </div>
    </motion.div>
  );
}
