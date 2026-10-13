export function Marquee({ items, label }: { items: readonly string[]; label: string }) {
  const row = (hidden: boolean) => items.map((c) => (
    <li key={`${hidden}-${c}`} aria-hidden={hidden || undefined} className="shrink-0 rounded-full border border-[var(--border-soft)] bg-forest-900/60 px-4 py-2 font-mono text-xs sm:px-5 sm:text-sm">{c}</li>
  ));
  return (
    <div className="marquee overflow-hidden border-y border-[var(--border-soft)] py-4 sm:py-5" aria-label={label}>
      <ul className="marquee-track gap-3">{row(false)}{row(true)}</ul>
    </div>
  );
}
