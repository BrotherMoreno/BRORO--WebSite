export function Marquee({ items }: { items: readonly string[] }) {
  const row = (hidden: boolean) => items.map((c) => (
    <li key={`${hidden}-${c}`} aria-hidden={hidden || undefined} className="shrink-0 rounded-full border border-[var(--border-soft)] bg-forest-900/60 px-5 py-2 font-mono text-sm">{c}</li>
  ));
  return (
    <div className="marquee overflow-hidden border-y border-[var(--border-soft)] py-5" aria-label="Capacidades">
      <ul className="marquee-track gap-3">{row(false)}{row(true)}</ul>
    </div>
  );
}
