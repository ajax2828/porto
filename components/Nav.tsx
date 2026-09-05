"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#kerja", label: "Kerja" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-chassis-line/80 bg-chassis/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-bright" />
          </span>
          <span className="font-mono text-xs text-ink-muted">{profile.status}</span>
        </a>
        <nav className="flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          {time ? (
            <span className="border-l border-chassis-line pl-6 font-mono text-xs text-ink-dim">
              {time} WIB
            </span>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
