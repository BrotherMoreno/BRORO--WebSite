import Link from "next/link";
import { Code, Smartphone, Globe, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Reveal } from "@/components/motion/Reveal";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

const icons = [Code, Smartphone, Globe, Layers];

export function Services({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal><SectionHeading index="01" eyebrow={dict.home.services.eyebrow} title={dict.home.services.title} /></Reveal>
        <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {dict.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <Link href={localePath(lang, "/servicios")} className="block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-lime-300">
                    <SpotlightCard className="h-full p-6">
                      <Icon className="text-lime-400" size={28} aria-hidden />
                      <h3 className="mt-5 text-lg font-semibold sm:text-xl">{s.title}</h3>
                    </SpotlightCard>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
