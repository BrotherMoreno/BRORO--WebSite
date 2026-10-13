// Proyectos reales de BRORO. Textos basados en el resumen entregado por el CEO.
export type Project = { slug: string; name: string; summary: string; status: string };

export const projects: Project[] = [
  {
    slug: "rbim3d",
    name: "RBIM3D",
    summary: "Visor y coordinación de modelos IFC: inspección 3D, choques, simulación 4D, RFI y control de avance de obra.",
    status: "Android · v1.0 próximamente en Google Play",
  },
  {
    slug: "portacloud",
    name: "PortaCloud",
    summary: "Protocolos PDF editables, emisión por lote, firma digital y evidencia verificable con trazabilidad.",
    status: "Android · v1.0 próximamente en Google Play",
  },
];
