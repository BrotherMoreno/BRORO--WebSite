# PROJECT_STATUS
- Empresa: BRORO (CEO: fundador). Sitio en brorotech/ (Next.js 16.4.0, React 19.3.0, TS 5, Tailwind 4).
- Fase actual: 2 completada (sistema de diseño). Siguiente: Fase 3 (página principal).
- Hecho en Fase 2: Container, Button (primario/secundario/ghost), Card, SectionHeading; Header sticky, menú móvil accesible (aria-expanded, Escape), Footer, Logo, enlace "Saltar al contenido"; rutas /servicios /portafolio /nosotros /contacto /legal/privacidad /legal/terminos como páginas provisionales (PageStub, marcadas "En construcción · Fase 4"); /design-system (noindex) para verificar tokens y componentes.
- Contenido editable: src/content/site.ts (nombre BRORO, correo, servicios, navegación) y src/content/projects.ts (RBIM3D y PortaCloud, textos basados en lo que entregó el CEO).
- Pruebas Fase 2: build OK (9 rutas estáticas), tsc sin errores, lint sin errores, todas las rutas 200 y /no-existe 404, enlaces del header/footer apuntan a rutas existentes, mailto correcto, lang="es", skip link presente.
- NO verificado: revisión visual en navegador/móvil (no hay navegador en mi entorno), contraste, teclado real, menú móvil en dispositivo. Hacerlo en VS Code con `npm run dev`.
- Avisos: npm audit = 5 altas solo en cadena dev de ESLint (0 en runtime). GSAP: licencia "no charge" propia, revisar. next.config activa cacheComponents: `new Date()` en render requiere "use cache" (ver Year.tsx).
- Pendiente de confirmar: eslogan y propuesta de valor, servicios definitivos ("y más"), capturas/enlaces de RBIM3D y PortaCloud, información profesional del CEO para Nosotros, redes, textos legales revisados por un profesional, fecha real de publicación en Google Play (se muestra "próximamente").
- Siguiente tarea: Fase 3: hero con escena de cinta (R3F con fallback), servicios, proyectos destacados, proceso, CTA.
