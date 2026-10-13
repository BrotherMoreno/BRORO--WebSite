import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../motion/Reveal";
import { site } from "@/content/site";

export function CtaBand({ title = "¿Tienes un proyecto en mente?", text = "Cuéntanos qué necesitas resolver y te respondemos por correo." }: { title?: string; text?: string }) {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-lime-400/30 bg-gradient-to-br from-forest-700 to-forest-900 p-10 text-center sm:p-14">
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contacto" arrow>Ir a contacto</Button>
              <Button href={`mailto:${site.email}`} variant="secondary">{site.email}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
