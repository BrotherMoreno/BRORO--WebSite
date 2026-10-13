import { WifiOff, ShieldCheck, Box, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import type { Dict } from "@/i18n/types";

const icons: Record<string, typeof WifiOff> = { wifi: WifiOff, shield: ShieldCheck, box: Box, file: FileText };

export function Differentiators({ dict }: { dict: Dict }) {
  const d = dict.home.diff;
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal><SectionHeading index="03" eyebrow={d.eyebrow} title={d.title} /></Reveal>
        <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {d.items.map((it, i) => {
            const Icon = icons[it.icon];
            return (
              <li key={it.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <Card className="flex h-full gap-4">
                    <Icon className="mt-1 shrink-0 text-lime-400" size={26} aria-hidden />
                    <div><h3 className="text-lg font-semibold sm:text-xl">{it.title}</h3><p className="mt-2 text-sm text-muted">{it.text}</p></div>
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
