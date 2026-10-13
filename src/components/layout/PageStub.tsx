import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

// Página provisional hasta la Fase 4. Se identifica claramente como tal.
export function PageStub({ title, text }: { title: string; text: string }) {
  return (
    <Container className="py-24">
      <SectionHeading eyebrow="En construcción · Fase 4" title={title} text={text} />
    </Container>
  );
}
