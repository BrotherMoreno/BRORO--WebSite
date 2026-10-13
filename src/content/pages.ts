// Contenido de páginas interiores. PROVISIONAL = pendiente de confirmar con el CEO.
export const servicesDetail = [
  { title: "Desarrollo de software a medida", text: "Sistemas pensados para el flujo de trabajo de cada organización.", bullets: ["Análisis del problema y del alcance", "Diseño de la solución y la interfaz", "Desarrollo por entregas verificables"] },
  { title: "Aplicaciones Android", text: "Apps para Android como RBIM3D y PortaCloud, preparadas para Google Play.", bullets: ["Funcionamiento sin internet", "Manejo de archivos, PDF y fotos", "Publicación en Google Play"] },
  { title: "Aplicaciones web", text: "Sitios y aplicaciones web adaptados a celular, tableta y computadora.", bullets: ["Diseño responsive y accesible", "Rendimiento y SEO técnico", "Paneles y formularios"] },
  { title: "Y más", text: "Otros servicios tecnológicos que se definirán con la empresa.", bullets: ["Por confirmar"] }, // PROVISIONAL
] as const;

export const startSteps = [ // PROVISIONAL: método de contacto genérico
  { title: "Cuéntanos tu idea", text: "Escríbenos por correo con lo que necesitas resolver." },
  { title: "Conversamos", text: "Aclaramos el alcance, los plazos y las prioridades." },
  { title: "Propuesta", text: "Te enviamos una propuesta con alcance y siguientes pasos." },
] as const;

export const about = {
  intro: "BRORO es una empresa de desarrollo de software. Creamos aplicaciones a medida, apps Android y soluciones web, y hemos desarrollado dos productos propios para obra y construcción: RBIM3D y PortaCloud.", // PROVISIONAL
  ceo: { role: "CEO de BRORO", name: "Nombre por confirmar", text: "Dirige BRORO, la empresa que creó RBIM3D y PortaCloud. Formación y trayectoria profesional: pendientes de confirmar." }, // PROVISIONAL
} as const;
