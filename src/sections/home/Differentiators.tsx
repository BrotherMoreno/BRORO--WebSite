import { WifiOff, ShieldCheck, Box, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { homeContent } from "@/content/home";

const icons = { wifi: WifiOff, shield: ShieldCheck, box: Box, file: FileText } as const;

export function Differentiators() {
  return (
    <section className="py-20">
      <Container>
        <Reveal><SectionHeading eyebrow="Por qué BRORO" title="Lo que ya hemos construido" /></Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {homeContent.differentiators.map((d, i) => {
            const Icon = icons[d.icon];
            return (
              <li key={d.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <Card className="flex h-full gap-4">
                    <Icon className="mt-1 shrink-0 text-lime-400" size={26} aria-hidden />
                    <div><h3 className="text-xl font-semibold">{d.title}</h3><p className="mt-2 text-sm text-muted">{d.text}</p></div>
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
