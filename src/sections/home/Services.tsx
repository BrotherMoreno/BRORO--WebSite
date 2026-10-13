import { Code, Smartphone, Globe, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

const icons = [Code, Smartphone, Globe, Layers];

export function Services() {
  return (
    <section className="py-20">
      <Container>
        <Reveal><SectionHeading eyebrow="Servicios" title="Lo que hacemos" /></Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s}>
                <Reveal delay={i * 0.08} className="h-full">
                  <Card className="h-full">
                    <Icon className="text-lime-400" size={28} aria-hidden />
                    <h3 className="mt-5 text-xl font-semibold">{s}</h3>
                  </Card>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
