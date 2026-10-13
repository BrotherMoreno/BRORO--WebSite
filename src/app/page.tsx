import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

// Inicio provisional de Fase 2; la página principal real se construye en la Fase 3.
export default function Home() {
  return (
    <Container className="flex flex-col items-start gap-6 py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-lime-400">Fase 2 · sistema de diseño</p>
      <h1 className="max-w-3xl text-5xl font-semibold sm:text-7xl">{site.tagline}</h1>
      <div className="flex gap-3">
        <Button href="/portafolio">Ver proyectos</Button>
        <Button href="/design-system" variant="secondary">Sistema de diseño</Button>
      </div>
    </Container>
  );
}
