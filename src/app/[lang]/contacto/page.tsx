import type { Metadata } from "next";
import { Globe, Compass, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyButton } from "@/components/contact/CopyButton";
import { StackCard, WhyChoose, Faq, ClosingCta } from "@/components/contact/ContactSections";
import { getDictionary } from "@/i18n/get-dictionary";
import { getCountryOptions } from "@/i18n/country-options";
import { site } from "@/content/site";
import { pageMetadata, resolveLang } from "@/lib/seo";

const card = "flex flex-col gap-4 rounded-xl border border-glass bg-surface-1 p-5 shadow-md sm:p-6";

export async function generateMetadata({ params }: PageProps<"/[lang]/contacto">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const c = getDictionary(lang).contact;
  return pageMetadata(lang, "/contacto", c.meta.title, c.meta.description);
}

export default async function Page({ params }: PageProps<"/[lang]/contacto">) {
  const lang = await resolveLang(params);
  const dict = getDictionary(lang);
  const c = dict.contact;
  const countries = getCountryOptions(lang);
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-16 left-1/4 size-72 rounded-full bg-lime-500/10 blur-[110px] sm:size-96" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 size-64 rounded-full bg-jade-400/10 blur-[100px] sm:right-10 sm:size-80" />
      <Container className="relative">
        <section className="flex flex-col items-center pb-10 pt-10 text-center sm:pb-14 sm:pt-16">
          <div className="enter">
            <h1 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {c.title}{" "}
              <span className="bg-gradient-to-r from-lime-200 via-jade-400 to-mint-200 bg-clip-text text-transparent">{c.highlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-on-surface-variant sm:text-lg">{c.subtitle}</p>
            <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl bg-surface-1 px-4 py-2 font-mono text-[11px] text-on-surface-variant sm:rounded-full sm:text-xs">
              <Globe size={16} className="text-lime-500" aria-hidden />
              <span>{c.pill[0]}</span><span aria-hidden className="text-line">•</span><span className="text-jade-400">{c.pill[1]}</span>
            </p>
          </div>
        </section>

        <section className="grid items-start gap-6 pb-16 sm:gap-8 sm:pb-24 lg:grid-cols-12">
          <div id="project-form" className="scroll-mt-24 lg:col-span-7"><Reveal><ContactForm dict={c.form} countries={countries} /></Reveal></div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className={card}>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-surface-3 text-lime-500"><Compass size={22} aria-hidden /></span>
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-jade-400">{c.modality.label}</p>
                    <h2 className="text-lg font-bold">{c.modality.title}</h2>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant">{c.modality.text}</p>
                <ul className="flex flex-wrap gap-2">
                  {c.modality.chips.map((chip) => <li key={chip} className="rounded bg-surface-2 px-2.5 py-1 font-mono text-xs text-on-surface">{chip}</li>)}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className={card}>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-jade-400">{c.channels.label}</p>
                <div className="flex items-center justify-between gap-3 rounded-lg bg-surface-2 p-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <Mail size={20} className="shrink-0 text-lime-500" aria-hidden />
                    <div className="min-w-0"><p className="font-mono text-[10px] uppercase text-on-surface-variant">{c.channels.email}</p><a translate="no" href={`mailto:${site.email}`} className="block truncate font-mono text-sm hover:text-lime-300">{site.email}</a></div>
                  </div>
                  <CopyButton text={site.email} labels={{ copy: c.channels.copy, copied: c.channels.copied, fail: c.channels.copyFail }} />
                </div>
                <div className="flex items-center justify-between gap-3 rounded-lg bg-surface-2 p-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <MessageCircle size={20} className="shrink-0 text-jade-400" aria-hidden />
                    <div><p className="font-mono text-[10px] uppercase text-on-surface-variant">{c.channels.whatsapp}</p><p translate="no" className="font-mono text-sm">{site.whatsapp.display}</p></div>
                  </div>
                  <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded bg-jade-400/15 px-2.5 py-1.5 font-mono text-[11px] font-semibold text-jade-400 transition-colors hover:bg-jade-400 hover:text-ink-950 focus-visible:outline-2 focus-visible:outline-jade-400">
                    {c.channels.chat} <ArrowUpRight size={14} aria-hidden /><span className="sr-only">{dict.common.newTab}</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}><StackCard dict={dict} /></Reveal>
          </div>
        </section>
        <WhyChoose dict={dict} />
        <Faq dict={dict} />
        <ClosingCta dict={dict} />
      </Container>
    </div>
  );
}
