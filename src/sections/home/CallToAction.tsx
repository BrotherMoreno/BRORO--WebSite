import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function CallToAction({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="rounded-[1.5rem] border border-lime-400/30 bg-gradient-to-br from-forest-700 to-forest-900 p-7 text-center sm:rounded-[2rem] sm:p-16">
            <h2 className="text-2xl font-semibold sm:text-5xl">{dict.home.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">{dict.home.cta.text}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href={localePath(lang, "/contacto")}>{dict.common.goContact}</Button>
              <Button href={`mailto:${site.email}`} variant="secondary" className="break-all">{site.email}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
