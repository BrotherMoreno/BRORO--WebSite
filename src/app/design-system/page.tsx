import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Sistema de diseño", robots: { index: false } };

const swatches = [
  ["lime-400", "#d6d233"], ["lime-300", "#e8e94a"], ["leaf-500", "#4c8439"],
  ["forest-700", "#164427"], ["forest-800", "#0b301e"], ["forest-900", "#0c2306"], ["ink-950", "#050f09"],
];

export default function DesignSystem() {
  return (
    <Container className="space-y-14 py-16">
      <SectionHeading eyebrow="Interno" title="Sistema de diseño" text="Vista de verificación de tokens y componentes. No indexada." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map(([n, h]) => (
          <div key={n} className="rounded-2xl border border-[var(--border-soft)] p-3">
            <div className="h-14 rounded-xl" style={{ background: h }} />
            <p className="mt-2 font-mono text-xs">{n}</p><p className="font-mono text-xs text-muted">{h}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button href="/contacto">Primario</Button>
        <Button href="/contacto" variant="secondary">Secundario</Button>
        <Button href="/contacto" variant="ghost">Ghost</Button>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug}>
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-muted">{p.summary}</p>
            <p className="mt-4 font-mono text-xs text-lime-400">{p.status}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
