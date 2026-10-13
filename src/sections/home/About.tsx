import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { homeContent } from "@/content/home";

export function About() {
  return (
    <section className="py-20">
      <Container>
        <Reveal><SectionHeading eyebrow="Quiénes somos" title={homeContent.about.title} text={homeContent.about.text} /></Reveal>
      </Container>
    </section>
  );
}
