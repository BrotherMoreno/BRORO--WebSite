"use client";
import { useRef, useState } from "react";

export function CopyButton({ text, labels }: { text: string; labels: { copy: string; copied: string; fail: string } }) {
  const [state, setState] = useState<"idle" | "ok" | "fail">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function copy() {
    try { await navigator.clipboard.writeText(text); setState("ok"); } catch { setState("fail"); }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  }

  return (
    <button type="button" onClick={copy} aria-live="polite"
      className="shrink-0 whitespace-nowrap rounded bg-surface-3 px-2.5 py-1.5 font-mono text-[11px] text-lime-500 transition-colors hover:bg-lime-500 hover:text-on-lime focus-visible:outline-2 focus-visible:outline-lime-300">
      {state === "ok" ? labels.copied : state === "fail" ? labels.fail : labels.copy}
    </button>
  );
}
