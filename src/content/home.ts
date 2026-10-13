// Contenido de la página de inicio. Los textos marcados PROVISIONAL deben confirmarse.
export const homeContent = {
  eyebrow: "BRORO · Software, apps y web", // PROVISIONAL
  about: {
    title: "Construimos software con propósito",
    text: "BRORO es una empresa de desarrollo de software. Diseñamos y desarrollamos aplicaciones a medida, apps Android y soluciones web, y ya hemos creado dos aplicaciones propias para obra y construcción.", // PROVISIONAL (basado en datos confirmados)
  },
  differentiators: [
    { icon: "wifi", title: "Funcionan sin internet", text: "Nuestras dos apps trabajan sin conexión y guardan los datos en el propio equipo." },
    { icon: "shield", title: "Evidencia verificable", text: "PortaCloud emite PDF aplanados con huella SHA-256 y hoja de trazabilidad." },
    { icon: "box", title: "Modelos 3D en el móvil", text: "RBIM3D abre modelos IFC por especialidad en celular y tableta." },
    { icon: "file", title: "Trazabilidad completa", text: "Cada acto sobre un registro queda guardado, filtrable y exportable." },
  ],
  capabilities: [
    "Apps Android", "Aplicaciones web", "Software a medida", "Modelos 3D e IFC",
    "PDF, Word, Excel y planos DWG/DXF", "Firma y evidencia digital", "Trabajo sin conexión", "Indicadores y reportes",
  ],
  process: [ // PROVISIONAL: proceso genérico, ajustar al método real de BRORO
    { title: "Entender", text: "Escuchamos el problema y definimos el alcance contigo." },
    { title: "Diseñar", text: "Planteamos la solución, la interfaz y la arquitectura." },
    { title: "Construir", text: "Desarrollamos por entregas pequeñas y verificables." },
    { title: "Lanzar y mejorar", text: "Publicamos, medimos y seguimos evolucionando el producto." },
  ],
  cta: { title: "Hablemos de tu proyecto", text: "Cuéntanos qué necesitas resolver y te respondemos por correo." },
} as const;

export const projectHighlights: Record<string, string[]> = {
  rbim3d: ["Modelos IFC por especialidad", "Detección de choques y simulación 4D", "Control de avance y expediente de obra"],
  portacloud: ["Protocolos PDF editables con firma digital", "Evidencia con huella SHA-256", "Registro maestro de trazabilidad"],
};
