"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollTrace() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-50 hidden h-full w-[3px] bg-chassis-line/60 md:block"
    >
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="h-full w-full origin-top bg-trace-gradient"
      />
    </div>
  );
}
