"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard tidak tersedia — biarkan pengguna menyalin manual
    }
  }

  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
      <div>
        <p className="max-w-md text-lg text-ink-muted">
          Ada proyek yang ingin dikerjakan bersama, atau sekadar mau ngobrol soal sistem yang
          rumit? Kabari saya.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-pad border border-chassis-line bg-chassis-panel px-4 py-3">
          <span className="font-mono text-sm text-signal-bright">$</span>
          <span className="flex-1 font-mono text-sm text-ink">{profile.email}</span>
          <button
            onClick={handleCopy}
            className="shrink-0 rounded-chip border border-chassis-line px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-ink-dim hover:text-ink"
          >
            {copied ? "Tersalin" : "Salin"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-chassis-line py-3 text-ink-muted transition-colors hover:text-ink"
          >
            <span>{social.label}</span>
            <span className="font-mono text-xs text-ink-dim group-hover:text-signal-bright">
              buka
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
