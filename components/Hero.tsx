"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import TerminalBoot from "./TerminalBoot";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-chassis-line pcb-grid bg-grid-fade">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-signal-bright"
          >
            {profile.role}, {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 text-balance font-display text-display-1 font-semibold text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-md text-balance text-lg text-ink-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#kerja"
              className="rounded-chip bg-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-signal-bright"
            >
              Lihat proyek
            </a>
            <a
              href="#kontak"
              className="rounded-chip border border-chassis-line px-5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-dim hover:text-ink"
            >
              Hubungi saya
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-chassis-line pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink-dim">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <TerminalBoot />
      </div>
    </section>
  );
}
