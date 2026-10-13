// Textos en español. Los marcados PROVISIONAL deben confirmarse con el CEO.
export const es = {
  meta: {
    tagline: "Software que cambia cómo se resuelven los problemas", // PROVISIONAL
    description: "BRORO desarrolla software a medida, apps Android y aplicaciones web.", // PROVISIONAL
    notFoundTitle: "Página no encontrada",
  },
  common: {
    skip: "Saltar al contenido", home: "Inicio", breadcrumb: "Ruta de navegación", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
    mainNav: "Principal", mobileNav: "Móvil", language: "Idioma", logoLabel: "BRORO, inicio",
    viewProject: "Ver proyecto", viewProjects: "Ver proyectos", viewPortfolio: "Ver portafolio", talk: "Hablemos", goContact: "Ir a contacto",
    newTab: "(se abre en una pestaña nueva)", back: "Volver al inicio",
  },
  nav: [
    { path: "/servicios", label: "Servicios" }, { path: "/portafolio", label: "Portafolio" },
    { path: "/nosotros", label: "Nosotros" }, { path: "/contacto", label: "Contacto" },
  ],
  legalNav: [{ path: "/legal/privacidad", label: "Privacidad" }, { path: "/legal/terminos", label: "Términos" }],
  footer: { site: "Sitio", legal: "Legal", follow: "Síguenos", contact: "Contacto", rights: "Todos los derechos reservados.", soon: "próximamente" },
  home: {
    eyebrow: "BRORO · Software, apps y web", // PROVISIONAL
    facts: [["2", "apps Android propias"], ["v1.0", "rumbo a Google Play"], ["Offline", "funcionan sin internet"]],
    capabilities: ["Apps Android", "Aplicaciones web", "Software a medida", "Modelos 3D e IFC", "PDF, Word, Excel y planos DWG/DXF", "Firma y evidencia digital", "Trabajo sin conexión", "Indicadores y reportes"],
    capabilitiesLabel: "Capacidades",
    about: { eyebrow: "Quiénes somos", title: "Construimos software con propósito", text: "BRORO es una empresa de desarrollo de software. Diseñamos y desarrollamos aplicaciones a medida, apps Android y soluciones web, y ya hemos creado dos aplicaciones propias para obra y construcción." }, // PROVISIONAL
    services: { eyebrow: "Servicios", title: "Lo que hacemos" },
    featured: { eyebrow: "Portafolio", title: "Proyectos destacados", text: "Dos aplicaciones Android propias, listas para su versión 1.0." },
    diff: {
      eyebrow: "Por qué BRORO", title: "Lo que ya hemos construido",
      items: [
        { icon: "wifi", title: "Funcionan sin internet", text: "Nuestras dos apps trabajan sin conexión y guardan los datos en el propio equipo." },
        { icon: "shield", title: "Evidencia verificable", text: "PortaCloud emite PDF aplanados con huella SHA-256 y hoja de trazabilidad." },
        { icon: "box", title: "Modelos 3D en el móvil", text: "RBIM3D abre modelos IFC por especialidad en celular y tableta." },
        { icon: "file", title: "Trazabilidad completa", text: "Cada acto sobre un registro queda guardado, filtrable y exportable." },
      ],
    },
    process: {
      eyebrow: "Proceso", title: "Cómo trabajamos", // PROVISIONAL: proceso genérico
      steps: [
        { title: "Entender", text: "Escuchamos el problema y definimos el alcance contigo." },
        { title: "Diseñar", text: "Planteamos la solución, la interfaz y la arquitectura." },
        { title: "Construir", text: "Desarrollamos por entregas pequeñas y verificables." },
        { title: "Lanzar y mejorar", text: "Publicamos, medimos y seguimos evolucionando el producto." },
      ],
    },
    cta: { title: "Hablemos de tu proyecto", text: "Cuéntanos qué necesitas resolver y te respondemos por correo." },
    highlights: {
      rbim3d: ["Modelos IFC por especialidad", "Detección de choques y simulación 4D", "Control de avance y expediente de obra"],
      portacloud: ["Protocolos PDF editables con firma digital", "Evidencia con huella SHA-256", "Registro maestro de trazabilidad"],
    } as Record<string, string[]>,
  },
  services: {
    meta: { title: "Servicios", description: "Software a medida, aplicaciones Android y aplicaciones web." },
    header: { eyebrow: "Servicios", title: "Software, apps y web hechos a la medida", text: "Desarrollamos soluciones para Android y la web, con la experiencia de haber creado dos productos propios." },
    items: [
      { title: "Desarrollo de software a medida", text: "Sistemas pensados para el flujo de trabajo de cada organización.", bullets: ["Análisis del problema y del alcance", "Diseño de la solución y la interfaz", "Desarrollo por entregas verificables"] },
      { title: "Aplicaciones Android", text: "Apps para Android como RBIM3D y PortaCloud, preparadas para Google Play.", bullets: ["Funcionamiento sin internet", "Manejo de archivos, PDF y fotos", "Publicación en Google Play"] },
      { title: "Aplicaciones web", text: "Sitios y aplicaciones web adaptados a celular, tableta y computadora.", bullets: ["Diseño responsive y accesible", "Rendimiento y SEO técnico", "Paneles y formularios"] },
      { title: "Y más", text: "Otros servicios tecnológicos que se definirán con la empresa.", bullets: ["Por confirmar"] }, // PROVISIONAL
    ],
    start: {
      eyebrow: "Cómo empezamos", title: "De la idea a la propuesta", // PROVISIONAL
      steps: [
        { title: "Cuéntanos tu idea", text: "Escríbenos con lo que necesitas resolver." },
        { title: "Conversamos", text: "Aclaramos el alcance, los plazos y las prioridades." },
        { title: "Propuesta", text: "Te enviamos una propuesta con alcance y siguientes pasos." },
      ],
    },
  },
  portfolio: {
    meta: { title: "Portafolio", description: "RBIM3D y PortaCloud, las aplicaciones Android de BRORO." },
    header: { crumb: "Portafolio", eyebrow: "Portafolio · {n} proyectos", title: "Productos que ya construimos", text: "Dos aplicaciones Android propias para obra y construcción, en camino a Google Play." },
    section: "Apps y productos", platform: "Plataforma", version: "Versión",
    ctaTitle: "¿Quieres algo así para tu equipo?",
    sheet: "Ficha", offline: "Sin internet", category: "Categoría",
    shots: "Capturas de pantalla: pendientes de añadir cuando estén disponibles.", next: "Siguiente proyecto",
    detailCtaTitle: "¿Te interesa {name}?", detailCtaText: "Escríbenos y te contamos más.",
  },
  projects: [
    {
      slug: "rbim3d", name: "RBIM3D", category: "Construcción · BIM",
      summary: "Visor y coordinación de modelos IFC: inspección 3D, choques, simulación 4D, RFI y control de avance de obra.",
      status: "Próximamente en Google Play", platform: "Android (celular y tableta)", version: "1.0",
      offline: "Sí: funciona sin internet y guarda los datos en el equipo",
      modules: [
        { title: "Modelos IFC por especialidad", items: ["Carga de modelos de Arquitectura, Estructuras, Sanitarias y Eléctricas", "Especialidades propias con prefijo de 2 a 6 caracteres", "Niveles IFC propios por cada modelo", "Huella digital por archivo para detectar duplicados y copias dañadas"] },
        { title: "Inspección del modelo", items: ["Selección individual y múltiple; ocultar, aislar y cortar", "Propiedades IFC, corte de sección y restablecer visibilidad", "Color por estado o por IFC y transparencia por especialidad"] },
        { title: "Herramientas 3D", items: ["Recorrido en primera o tercera persona", "Medición de distancias, ángulos y áreas", "Cámara en perspectiva u ortográfica, vistas de planta, frente y lateral", "Puntos de vista guardados, modos de visualización y exportar imagen"] },
        { title: "Coordinación", items: ["Detección de choques entre especialidades, con estado, responsable y fecha", "Informe de choques en PDF", "Simulación 4D desde los IFC o desde un cronograma CSV", "RFI con exportación a Excel y PDF"] },
        { title: "Avance de obra", items: ["Estados por elemento en colores sobre el modelo", "Registros de estados con fecha", "Registro de obra con fotos y PDF con espacio de firmas"] },
        { title: "Expediente y planos", items: ["Documentos por proyecto, también desde un .zip", "Visores de PDF, Word, Excel, DWG y DXF", "Observaciones ancladas con autor, fecha y estado", "Expediente de transferencia"] },
      ],
    },
    {
      slug: "portacloud", name: "PortaCloud", category: "Calidad · Protocolos",
      summary: "Protocolos PDF editables, emisión por lote, firma digital y evidencia verificable con trazabilidad.",
      status: "Próximamente en Google Play", platform: "Android", version: "1.0",
      offline: "Sí: funciona sin internet y guarda los datos en el equipo",
      modules: [
        { title: "Plantillas de protocolo", items: ["Importa PDF editables (hasta 20 MB) y lee sus campos", "Orden por carpetas, con tipo y versión", "Archivar y restaurar sin perder los formularios ya emitidos"] },
        { title: "Emisión por lote", items: ["Lotes como uno, lista (1,3,7) o rango (1-15) dentro de una manzana", "Cada emisión queda a nombre de quien la crea, con responsable opcional", "Cada registro nace en estado Abierto"] },
        { title: "Gestión de formularios", items: ["Estados Abierto, En proceso y Cerrado, con filtros y búsqueda", "Reapertura con motivo obligatorio", "Eliminación con motivo guardado en el registro maestro"] },
        { title: "Llenado y firmas", items: ["Llenado directamente sobre el PDF", "Firma con el dedo, con nombre, fecha y hora", "Roles de Ingeniero de Producción, Inspector de Calidad e Ingeniero Residente"] },
        { title: "Evidencia", items: ["PDF nuevo aplanado para que no se pueda editar", "Huella SHA-256 para verificar que no fue alterado", "Hoja de trazabilidad con el estado \"Cerrado — liberado\""] },
        { title: "Indicadores y trazabilidad", items: ["Tarjetas y gráficos de avance, con exportación a Excel y PDF", "Registro maestro de creaciones, cambios, reaperturas y eliminaciones"] },
      ],
    },
  ],
  about: {
    meta: { title: "Nosotros", description: "BRORO, empresa de desarrollo de software." },
    header: { crumb: "Nosotros", eyebrow: "Nosotros", title: "Una empresa de software que construye sus propios productos", text: "BRORO es una empresa de desarrollo de software. Creamos aplicaciones a medida, apps Android y soluciones web, y hemos desarrollado dos productos propios para obra y construcción: RBIM3D y PortaCloud." }, // PROVISIONAL
    ceo: { role: "CEO de BRORO", name: "Nombre por confirmar", text: "Dirige BRORO, la empresa que creó RBIM3D y PortaCloud. Formación y trayectoria profesional: pendientes de confirmar." }, // PROVISIONAL
  },
  cta: { title: "¿Tienes un proyecto en mente?", text: "Cuéntanos qué necesitas resolver y te respondemos por correo." },
  contact: {
    meta: { title: "Contacto", description: "Cuéntanos tu proyecto y recibe una evaluación técnica de BRORO." },
    pill: ["MODALIDAD: ONLINE 100% REMOTO", "RESPUESTA < 24 H"], // el CEO debe confirmar que puede cumplirlo
    title: "Convertimos tus ideas en", highlight: "software real, potente y escalable",
    subtitle: "Desarrollo a medida, plataformas web modernas con React y apps móviles de alto rendimiento. Trabajamos online para todo el mundo y con despliegue técnico donde lo necesites.",
    modality: { label: "Modalidad de trabajo", title: "Trabajo 100% online", text: "Atendemos de manera remota para todo el mundo con coordinación ágil por videollamada.", chips: ["Sincronización remota", "Reuniones 1 a 1", "Soporte in situ"] },
    channels: { label: "Canales directos", email: "Correo", whatsapp: "WhatsApp directo", chat: "Chatear", copy: "Copiar", copied: "¡Copiado!", copyFail: "No se pudo copiar" },
    form: {
      kicker: "// FORMULARIO DE CONTACTO", title: "Iniciar proyecto / cotizar",
      text: "Completa los detalles de tu iniciativa para recibir una evaluación técnica y propuesta de desarrollo en menos de 24 horas.",
      name: "Tu nombre", namePh: "Ingresa tu nombre", email: "Correo electrónico", emailPh: "ejemplo@empresa.com",
      phone: "Teléfono", country: "País", phonePh: "999 999 999",
      service: "Tipo de servicio", servicePh: "Seleccione un servicio", budget: "Rango presupuestario",
      message: "Breve descripción del proyecto", messagePh: "Cuéntanos los detalles de tu proyecto o idea...",
      ndaBefore: "Requiero firmar un", ndaStrong: "Acuerdo de Confidencialidad (NDA)", ndaAfter: "antes de compartir documentación técnica detallada.",
      sendEmail: "Enviar por correo", sendWhatsapp: "Enviar por WhatsApp",
      note: "El mensaje se prepara en tu aplicación de correo o en WhatsApp y se envía cuando tú lo confirmas. Este sitio no guarda lo que escribes.",
      okEmail: "Se preparó tu correo: revisa tu aplicación de correo y pulsa enviar.", okWhatsapp: "Se abrió WhatsApp con tu mensaje: pulsa enviar allí.",
      errors: { name: "Escribe tu nombre.", email: "Escribe un correo válido.", phone: "Escribe solo números (de 6 a 12 dígitos).", service: "Elige un tipo de servicio.", message: "Cuéntanos un poco más (mínimo 10 caracteres)." },
      services: [
        { value: "moviles", label: "Desarrollo de aplicaciones móviles" }, { value: "web", label: "Desarrollo web" },
        { value: "software-medida", label: "Software a medida y backend" }, { value: "consultoria-cloud", label: "Consultoría técnica y cloud" },
      ],
      budgets: [
        { value: "mvp", label: "Menos de $2,500 USD (MVP / módulo)" }, { value: "standard", label: "$2,500 – $7,000 USD (proyecto integral)" },
        { value: "enterprise", label: "Más de $7,000 USD (escala corporativa)" }, { value: "definir", label: "Por definir con diagnóstico" },
      ],
      mail: { subject: "Requerimiento web", name: "Nombre", email: "Correo", phone: "Teléfono", country: "País", service: "Servicio", budget: "Presupuesto", budgetDefault: "Por definir", nda: "Requiere NDA", yes: "Sí", no: "No" },
    },
  },
  legal: {
    crumb: "Legal", draft: "Borrador provisional: debe ser revisado por un profesional legal antes de publicar el sitio.",
    privacy: { title: "Política de privacidad", paragraphs: [
      "Este sitio presenta a BRORO y sus proyectos. Actualmente no usa cookies de seguimiento ni herramientas de analítica. Solo guarda en tu navegador una cookie con tu idioma preferido.",
      "El formulario de contacto no guarda datos en el sitio: prepara un correo o un mensaje de WhatsApp y los datos que escribas solo se envían si pulsas enviar.",
      "Si nos escribes, usaremos tu mensaje únicamente para responderte. Para consultas sobre tus datos, escribe a BroroTechnologies@outlook.com.",
      "Si en el futuro se añaden analítica, cookies o un servicio de envío de formularios, esta política se actualizará.",
    ] },
    terms: { title: "Términos de uso", paragraphs: [
      "El contenido de este sitio es informativo. Las funciones de RBIM3D y PortaCloud descritas corresponden a la versión 1.0 en preparación y pueden cambiar antes de su publicación en Google Play.",
      "Los logotipos, textos y diseños pertenecen a BRORO. No se permite su reproducción sin autorización. Las marcas de redes sociales pertenecen a sus titulares.",
      "BRORO puede actualizar el sitio y estos términos en cualquier momento. Para consultas: BroroTechnologies@outlook.com.",
    ] },
  },
  notFound: { title: "Página no encontrada", text: "La página que buscas no existe o fue movida." },
};
