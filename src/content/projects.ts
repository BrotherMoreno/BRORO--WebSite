// Proyectos reales de BRORO. Textos basados en el resumen entregado por el CEO.
// Lo NO confirmado por el CEO (clima y permisos/colaboración de PortaCloud) no se incluye.
export type Module = { title: string; items: string[] };
export type Project = {
  slug: string; name: string; category: string; summary: string; status: string;
  platform: string; version: string; offline: string; modules: Module[];
};

export const projects: Project[] = [
  {
    slug: "rbim3d",
    name: "RBIM3D",
    category: "Construcción · BIM",
    summary: "Visor y coordinación de modelos IFC: inspección 3D, choques, simulación 4D, RFI y control de avance de obra.",
    status: "Próximamente en Google Play",
    platform: "Android (celular y tableta)",
    version: "1.0",
    offline: "Sí: funciona sin internet y guarda los datos en el equipo",
    modules: [
      { title: "Modelos IFC por especialidad", items: [
        "Carga de modelos de Arquitectura, Estructuras, Sanitarias y Eléctricas",
        "Especialidades propias con prefijo de 2 a 6 caracteres",
        "Niveles IFC propios por cada modelo",
        "Huella digital por archivo para detectar duplicados y copias dañadas" ] },
      { title: "Inspección del modelo", items: [
        "Selección individual y múltiple; ocultar, aislar y cortar",
        "Propiedades IFC, corte de sección y restablecer visibilidad",
        "Color por estado o por IFC y transparencia por especialidad" ] },
      { title: "Herramientas 3D", items: [
        "Recorrido en primera o tercera persona",
        "Medición de distancias, ángulos y áreas",
        "Cámara en perspectiva u ortográfica, vistas de planta, frente y lateral",
        "Puntos de vista guardados, modos de visualización y exportar imagen" ] },
      { title: "Coordinación", items: [
        "Detección de choques entre especialidades, con estado, responsable y fecha",
        "Informe de choques en PDF",
        "Simulación 4D desde los IFC o desde un cronograma CSV",
        "RFI con exportación a Excel y PDF" ] },
      { title: "Avance de obra", items: [
        "Estados por elemento en colores sobre el modelo",
        "Registros de estados con fecha",
        "Registro de obra con fotos y PDF con espacio de firmas" ] },
      { title: "Expediente y planos", items: [
        "Documentos por proyecto, también desde un .zip",
        "Visores de PDF, Word, Excel, DWG y DXF",
        "Observaciones ancladas con autor, fecha y estado",
        "Expediente de transferencia" ] },
    ],
  },
  {
    slug: "portacloud",
    name: "PortaCloud",
    category: "Calidad · Protocolos",
    summary: "Protocolos PDF editables, emisión por lote, firma digital y evidencia verificable con trazabilidad.",
    status: "Próximamente en Google Play",
    platform: "Android",
    version: "1.0",
    offline: "Sí: funciona sin internet y guarda los datos en el equipo",
    modules: [
      { title: "Plantillas de protocolo", items: [
        "Importa PDF editables (hasta 20 MB) y lee sus campos",
        "Orden por carpetas, con tipo y versión",
        "Archivar y restaurar sin perder los formularios ya emitidos" ] },
      { title: "Emisión por lote", items: [
        "Lotes como uno, lista (1,3,7) o rango (1-15) dentro de una manzana",
        "Cada emisión queda a nombre de quien la crea, con responsable opcional",
        "Cada registro nace en estado Abierto" ] },
      { title: "Gestión de formularios", items: [
        "Estados Abierto, En proceso y Cerrado, con filtros y búsqueda",
        "Reapertura con motivo obligatorio",
        "Eliminación con motivo guardado en el registro maestro" ] },
      { title: "Llenado y firmas", items: [
        "Llenado directamente sobre el PDF",
        "Firma con el dedo, con nombre, fecha y hora",
        "Roles de Ingeniero de Producción, Inspector de Calidad e Ingeniero Residente" ] },
      { title: "Evidencia", items: [
        "PDF nuevo aplanado para que no se pueda editar",
        "Huella SHA-256 para verificar que no fue alterado",
        "Hoja de trazabilidad con el estado \"Cerrado — liberado\"" ] },
      { title: "Indicadores y trazabilidad", items: [
        "Tarjetas y gráficos de avance, con exportación a Excel y PDF",
        "Registro maestro de creaciones, cambios, reaperturas y eliminaciones" ] },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
