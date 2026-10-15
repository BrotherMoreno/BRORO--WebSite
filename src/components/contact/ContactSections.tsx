import { Zap, Users, Search, BadgeCheck, Clock, Wrench, ChevronDown, Headset, CalendarDays, ArrowUp } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site, stack } from "@/content/site";
import type { Dict } from "@/i18n/types";

const icons: Record<string, typeof Zap> = { zap: Zap, users: Users, search: Search, badge: BadgeCheck, clock: Clock, wrench: Wrench };

export function StackCard({ dict }: { dict: Dict }) {
  const s = dict.contact.stack;
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-glass bg-surface-1 p-5 shadow-md sm:p-6">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-jade-400">{s.label}</p>
      <p className="text-sm text-on-surface-variant">{s.text}</p>
      <ul className="flex flex-wrap gap-2 pt-1">
        {stack.map((t) => (
          <li key={t.name} translate="no" className="flex items-center gap-1.5 rounded-full border border-line/30 bg-surface-2 px-3 py-1 font-mono text-xs">
            <span aria-hidden className="size-2 rounded-full" style={{ background: t.color }} />{t.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhyChoose({ dict }: { dict: Dict }) {
  const w = dict.contact.why;
  return (
    <section className="flex flex-col gap-10 pb-16 sm:pb-24" aria-labelledby="why-title">
      <Reveal className="flex flex-col items-center text-center">
        <h2 id="why-title" className="text-2xl font-bold leading-tight sm:text-4xl">{w.before}<span translate="no" className="text-lime-500">{site.name}</span>{w.after}</h2>
        <p className="mt-4 max-w-xl text-on-surface-variant">{w.text}</p>
      </Reveal>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {w.items.map((it, i) => {
          const Icon = icons[it.icon];
          return (
            <li key={it.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <div className="group flex h-full flex-col items-center gap-4 rounded-xl border border-line/30 bg-surface-1 p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-lime-500/40 hover:bg-surface-2 sm:p-8">
                  <span className="grid size-14 place-items-center rounded-2xl border border-lime-500/30 bg-lime-500/10 text-lime-500 shadow-[0_0_20px_rgb(163_230_53/0.25)] transition-transform group-hover:scale-110"><Icon size={26} aria-hidden /></span>
                  <h3 className="text-lg font-bold">{it.title}</h3>
                  <p className="max-w-xs text-sm text-on-surface-variant">{it.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function Faq({ dict }: { dict: Dict }) {
  const f = dict.contact.faq;
  return (
    <section className="pb-16 sm:pb-24" aria-labelledby="faq-title">
      <Reveal className="mx-auto mb-8 max-w-2xl text-center">
        <h2 id="faq-title" className="text-2xl font-bold sm:text-4xl">{f.title}</h2>
        <p className="mt-4 text-on-surface-variant">{f.text}</p>
      </Reveal>
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {f.items.map((it, i) => (
          <Reveal key={it.q}>
            <details open={i === 0} className="group rounded-xl border border-line/30 bg-surface-1 transition-colors open:border-lime-500/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-4 font-semibold marker:content-none focus-visible:outline-2 focus-visible:outline-lime-300 sm:p-5 [&::-webkit-details-marker]:hidden">
                <span>{it.q}</span>
                <ChevronDown size={20} aria-hidden className="shrink-0 text-lime-500 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-4 pb-5 text-sm text-on-surface-variant sm:px-5">
                <p>{it.a}</p>
                {it.extra.length > 0 && (
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {it.extra.map((e) => <li key={e} className="rounded-lg bg-surface-2 px-3 py-2 font-mono text-xs text-on-surface">{e}</li>)}
                  </ul>
                )}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ClosingCta({ dict }: { dict: Dict }) {
  const c = dict.contact.closing;
  return (
    <section className="pb-16 sm:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-lime-500/30 bg-gradient-to-br from-surface-3 to-surface-1 p-7 text-center sm:p-14">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-lime-500/10 blur-3xl" />
          <span className="relative mx-auto grid size-14 place-items-center rounded-2xl border border-lime-500/30 bg-lime-500/10 text-lime-500"><Headset size={26} aria-hidden /></span>
          <h2 className="relative mx-auto mt-5 max-w-2xl text-2xl font-bold sm:text-3xl">{c.title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-on-surface-variant">{c.text}</p>
          <div className="relative mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${site.email}?subject=${encodeURIComponent(c.subject)}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-500 px-6 py-3 text-sm font-semibold text-on-lime transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200">
              <CalendarDays size={18} aria-hidden /> {c.primary}
            </a>
            <a href="#project-form" className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3 text-sm font-semibold transition hover:border-lime-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">
              <ArrowUp size={18} aria-hidden /> {c.secondary}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
