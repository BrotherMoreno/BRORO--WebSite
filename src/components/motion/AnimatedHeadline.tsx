"use client";
import { motion } from "motion/react";

export function AnimatedHeadline({ text }: { text: string }) {
  return (
    <h1 aria-label={text} className="text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
