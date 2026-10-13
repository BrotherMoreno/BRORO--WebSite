import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, localePath, projectSlugs } from "@/i18n/config";
import { pageMetadata, resolveLang } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((lang) => projectSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/portafolio/[slug]">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { slug } = await params;
  const p = getDictionary(lang).projects.find((x) => x.slug === slug);
  return p ? pageMetadata(lang, `/portafolio/${slug}`, p.name, p.summary) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/portafolio/[slug]">) {
  const lang = await resolveLang(params);
  const { slug } = await params;
  const dict = getDictionary(lang);
  const idx = dict.projects.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = dict.projects[idx];
  const next = dict.projects[(idx + 1) % dict.projects.length];
  const t = dict.portfolio;
  const facts = [[t.platform, p.platform], [t.version, `${p.version} · ${p.status}`], [t.offline, p.offline], [t.category, p.category]];
  return (
    <>
      <PageHeader lang={lang} dict={dict} crumbs={[{ label: t.header.crumb, href: localePath(lang, "/portafolio") }, { label: p.name }]} eyebrow={p.category} title={p.name} text={p.summary} />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-10">
          <div className="order-2 space-y-5 sm:space-y-6 lg:order-1">
            {p.modules.map((m, i) => (
              <Reveal key={m.title}>
                <SpotlightCard className="p-5 sm:p-7">
                  <p className="font-mono text-xs text-lime-400">0{i + 1} /</p>
                  <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{m.title}</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {m.items.map((it) => (<li key={it} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-lime-400" aria-hidden />{it}</li>))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <aside className="order-1 space-y-5 lg:order-2 lg:sticky lg:top-24 lg:space-y-6 lg:self-start">
            <div className="rounded-3xl border border-[var(--border-soft)] bg-forest-800 p-5 sm:p-6">
              <h2 className="font-mono text-xs uppercase tracking-widest text-lime-400">{t.sheet}</h2>
              <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-1">
                {facts.map(([k, v]) => (<div key={k}><dt className="text-muted">{k}</dt><dd className="mt-1">{v}</dd></div>))}
              </dl>
            </div>
            <div className="rounded-3xl border border-dashed border-[var(--border-soft)] p-5 text-sm text-muted sm:p-6">{t.shots}</div>
            <Link href={localePath(lang, `/portafolio/${next.slug}`)} className="block rounded-3xl border border-[var(--border-soft)] p-5 transition hover:border-lime-400/50 sm:p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">{t.next}</span>
              <span className="mt-2 block font-display text-2xl font-semibold">{next.name} →</span>
            </Link>
          </aside>
        </Container>
      </section>
      <CtaBand lang={lang} dict={dict} title={t.detailCtaTitle.replace("{name}", p.name)} text={t.detailCtaText} />
    </>
  );
}
