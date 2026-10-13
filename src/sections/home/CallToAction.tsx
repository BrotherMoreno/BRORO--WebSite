import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { homeContent } from "@/content/home";
import { site } from "@/content/site";

export function CallToAction() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-lime-400/30 bg-gradient-to-br from-forest-700 to-forest-900 p-10 text-center sm:p-16">
            <h2 className="text-3xl font-semibold sm:text-5xl">{homeContent.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">{homeContent.cta.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contacto">Ir a contacto</Button>
              <Button href={`mailto:${site.email}`} variant="secondary">{site.email}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
