"use client";

import { motion } from "framer-motion";

export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-chassis-line px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-baseline justify-between gap-6"
        >
          <h2 className="font-display text-display-2 font-semibold text-ink">{title}</h2>
          <span className="hidden shrink-0 font-mono text-xs text-ink-dim sm:block">{label}</span>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
