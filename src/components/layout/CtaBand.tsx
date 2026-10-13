import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../motion/Reveal";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function CtaBand({ lang, dict, title, text }: { lang: Locale; dict: Dict; title?: string; text?: string }) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="rounded-[1.5rem] border border-lime-400/30 bg-gradient-to-br from-forest-700 to-forest-900 p-7 text-center sm:rounded-[2rem] sm:p-14">
            <h2 className="text-2xl font-semibold sm:text-4xl">{title ?? dict.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">{text ?? dict.cta.text}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href={localePath(lang, "/contacto")} arrow>{dict.common.goContact}</Button>
              <Button href={`mailto:${site.email}`} variant="secondary" className="break-all">{site.email}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
