# PROJECT_STATUS
- Empresa: BRORO (CEO: fundador). Sitio en brorotech/ (Next.js 16.4.0, React 19.3.0, TS 5, Tailwind 4).
- Fase actual: 3 completada (página principal). Siguiente: Fase 4 (páginas interiores).
- Hecho en Fase 2: Container, Button (primario/secundario/ghost), Card, SectionHeading; Header sticky, menú móvil accesible (aria-expanded, Escape), Footer, Logo, enlace "Saltar al contenido"; rutas /servicios /portafolio /nosotros /contacto /legal/privacidad /legal/terminos como páginas provisionales (PageStub, marcadas "En construcción · Fase 4"); /design-system (noindex) para verificar tokens y componentes.
- Contenido editable: src/content/site.ts (nombre BRORO, correo, servicios, navegación) y src/content/projects.ts (RBIM3D y PortaCloud, textos basados en lo que entregó el CEO).
- Pruebas Fase 2: build OK (9 rutas estáticas), tsc sin errores, lint sin errores, todas las rutas 200 y /no-existe 404, enlaces del header/footer apuntan a rutas existentes, mailto correcto, lang="es", skip link presente.
- NO verificado: revisión visual en navegador/móvil (no hay navegador en mi entorno), contraste, teclado real, menú móvil en dispositivo. Hacerlo en VS Code con `npm run dev`.
- Avisos: npm audit = 5 altas solo en cadena dev de ESLint (0 en runtime). GSAP: licencia "no charge" propia, revisar. next.config activa cacheComponents: `new Date()` en render requiere "use cache" (ver Year.tsx).
- Pendiente de confirmar: eslogan y propuesta de valor, servicios definitivos ("y más"), capturas/enlaces de RBIM3D y PortaCloud, información profesional del CEO para Nosotros, redes, textos legales revisados por un profesional, fecha real de publicación en Google Play (se muestra "próximamente").
- Siguiente tarea: Fase 3: hero con escena de cinta (R3F con fallback), servicios, proyectos destacados, proceso, CTA.

## Fase 3 (página principal)
- Hecho: Hero con titular animado (Motion) y cinta 3D (banda de Möbius con degradado de marca, R3F, carga diferida y reacción al cursor); secciones Quiénes somos, Servicios, Proyectos destacados (RBIM3D y PortaCloud), Por qué BRORO, Capacidades, Proceso y CTA con correo. Revelado al hacer scroll con Motion; MotionConfig reducedMotion="user".
- 3D estático (logo PNG) en pantallas menores a 768 px y con prefers-reduced-motion. El primer render siempre es estático y el 3D se activa en cliente.
- Contenido: src/content/home.ts (diferenciadores y capacidades salen solo de funciones que el CEO describió; proceso y textos de presentación PROVISIONALES).
- Pruebas Fase 3: build OK, tsc OK, lint OK, rutas 200 y 404 correcto, todas las secciones presentes en el HTML, sin <canvas> ni Three.js en la carga inicial (chunk de ≈900 KB diferido), geometría de la cinta sin NaN.
- NO verificado: aspecto visual real, rendimiento (Lighthouse), fluidez del 3D en móviles de gama baja, comportamiento sin WebGL (no hay fallback si WebGL falla), contraste. Lenis y GSAP siguen sin usarse.
- Pendiente de decisión del CEO: eslogan, textos de Quiénes somos y Proceso, capturas de las apps.
- Siguiente tarea: Fase 4 (Servicios, Portafolio, detalle /portafolio/[slug], Nosotros, Contacto, legales).
