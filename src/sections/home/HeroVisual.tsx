"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

const chips = [
  { t: "Android", cls: "left-[2%] top-[16%]", d: 0 },
  { t: "Web", cls: "right-[6%] top-[8%]", d: 0.8 },
  { t: "IFC", cls: "right-[0%] bottom-[24%]", d: 1.6 },
  { t: "PDF", cls: "left-[6%] bottom-[14%]", d: 2.4 },
];

export function HeroVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 }), sy = useSpring(my, { stiffness: 70, damping: 18 });
  const logoX = useTransform(sx, [-1, 1], [-16, 16]), logoY = useTransform(sy, [-1, 1], [-16, 16]);
  const ringX = useTransform(sx, [-1, 1], [10, -10]), ringY = useTransform(sy, [-1, 1], [10, -10]);

  return (
    <div
      aria-hidden
      className="relative mx-auto grid aspect-square w-full max-w-md place-items-center"
      onPointerMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onPointerLeave={() => { mx.set(0); my.set(0); }}
    >
      <div className="absolute inset-6 rounded-full bg-lime-400/10 blur-3xl" />
      <motion.svg viewBox="0 0 400 400" className="absolute inset-0 size-full" style={{ x: ringX, y: ringY }}>
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} style={{ originX: "200px", originY: "200px" }}>
          <circle cx="200" cy="200" r="190" fill="none" stroke="#d6d233" strokeOpacity=".25" strokeDasharray="2 10" strokeLinecap="round" />
          <circle cx="390" cy="200" r="5" fill="#d6d233" />
        </motion.g>
        <motion.g animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} style={{ originX: "200px", originY: "200px" }}>
          <circle cx="200" cy="200" r="150" fill="none" stroke="#4c8439" strokeOpacity=".5" />
          <circle cx="200" cy="50" r="4" fill="#4c8439" />
        </motion.g>
        <circle cx="200" cy="200" r="110" fill="none" stroke="#164427" strokeWidth="2" />
      </motion.svg>
      <motion.div style={{ x: logoX, y: logoY }} className="relative">
        <Image src="/brand/logo-gradient.png" alt="" width={300} height={300} priority className="w-44 sm:w-56" />
      </motion.div>
      {chips.map((c) => (
        <motion.span key={c.t} className={`absolute rounded-full border border-lime-400/30 bg-ink-950/80 px-3 py-1 font-mono text-xs text-lime-300 backdrop-blur ${c.cls}`}
          animate={{ y: [0, -8, 0] }} transition={{ duration: 5, delay: c.d, repeat: Infinity, ease: "easeInOut" }}>
          {c.t}
        </motion.span>
      ))}
    </div>
  );
}
