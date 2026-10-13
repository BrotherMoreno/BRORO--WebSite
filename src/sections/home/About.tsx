import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import type { Dict } from "@/i18n/types";

export function About({ dict }: { dict: Dict }) {
  const a = dict.home.about;
  return (
    <section className="py-14 sm:py-20">
      <Container><Reveal><SectionHeading eyebrow={a.eyebrow} title={a.title} text={a.text} /></Reveal></Container>
    </section>
  );
}
