"use client";
import { useRef } from "react";

export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`group relative overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-forest-800 transition duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-lime-400/50 ${className}`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgb(214 210 51 / 0.13), transparent 70%)" }} />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
