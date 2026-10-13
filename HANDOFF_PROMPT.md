# PROMPT DE CONTINUACIÓN (copiar y pegar en la nueva conversación, con el zip adjunto)

Actúa como un equipo de ingeniería de alto nivel (Software Architect, Senior Full-Stack Developer, UI/UX, Motion Designer y especialista en identidad visual y rendimiento web). Vas a CONTINUAR un proyecto ya empezado: la web de BRORO, empresa de desarrollo de software. No empieces de cero.

## Primero, antes de tocar nada
1. Descomprime el zip adjunto y lee, en este orden: `PROJECT_STATUS.md`, `IMPLEMENTATION_LOG.md`, `docs/FASE_0_PLANIFICACION.md`, `docs/APPS_BRORO.md`, `README.md`.
2. Lee `AGENTS.md` y la documentación en `node_modules/next/dist/docs/` (Next.js 16 tiene cambios; el proyecto usa `cacheComponents`, así que `new Date()` en render exige `"use cache"`).
3. Ejecuta `npm install`, `npm run build`, `npm run lint` y `npx tsc --noEmit` y dime los resultados reales antes de continuar.

## Empresa y datos confirmados
- Nombre: BRORO. Correo: BroroTechnologies@outlook.com. Quien te escribe es el CEO.
- Servicios: desarrollo de software a medida, apps Android, aplicaciones web y más (por definir).
- Dos proyectos reales, apps Android que se lanzarán en Google Play como v1.0: RBIM3D y PortaCloud (detalle en `docs/APPS_BRORO.md`). No tienen conexión entre sí. Mostrarlas como "próximamente en Google Play", sin insignia oficial.
- Idioma de la web y de la comunicación: español.

## Decisiones técnicas ya tomadas
Next.js 16.4.0 (App Router, src/), React 19.3.0, TypeScript 5, Tailwind CSS 4. Librerías instaladas pero aún sin usar: motion, gsap (licencia "no charge" propia: revisar términos), lenis, three, @react-three/fiber, @react-three/drei, lucide-react, zod, react-hook-form. Fuentes autoalojadas con @fontsource-variable (Bricolage Grotesque, Inter, JetBrains Mono). Tokens de color en `src/app/tokens.css`. Contenido editable en `src/content/`.
Identidad: logo "B" de cinta con degradado amarillo-lima a verde bosque; dirección artística "Cinta continua"; fondo oscuro casi negro, acento lima, verde profundo dominante. El SVG del logo es monocromo; el degradado solo existe en el PNG de 500 px.

## Estado
Fases 0 a 3 completadas (incluye página principal con hero 3D). Las páginas interiores son stubs marcados "En construcción · Fase 4". No se ha revisado visualmente en navegador ni en móvil: hazlo o pídeme capturas.

## Siguiente acción: Fase 4 (páginas interiores) — la Fase 3 ya está hecha; el texto siguiente describe su alcance original
Hero con propuesta de valor y escena 3D de la cinta del logo (React Three Fiber, carga diferida, fallback estático en móvil y con prefers-reduced-motion); presentación de la empresa; servicios; proyectos destacados (RBIM3D y PortaCloud); diferenciadores; tecnologías; proceso de trabajo; llamadas a la acción. Después, Fases 4 a 8 según `docs/FASE_0_PLANIFICACION.md`.
Además, mejora lo que veas mejorable del diseño y del código, justificándolo.

## Reglas obligatorias
- No inventes clientes, testimonios, certificaciones, métricas ni funciones. Usa contenido provisional marcado y centralizado. Lo que el CEO marcó como NO confirmado (clima y permisos/colaboración de PortaCloud) no se promete en la web.
- No afirmes haber guardado, ejecutado o verificado algo que no hayas comprobado. Informa resultados reales.
- Trabaja por fases pequeñas y verificables; al terminar cada una actualiza `PROJECT_STATUS.md`, `IMPLEMENTATION_LOG.md` y `README.md`, y entrégame el proyecto en un zip sin `node_modules` ni `.next`.
- Antes de instalar una librería nueva, verifica versión, licencia y mantenimiento (`npm view`). Accesibilidad, rendimiento móvil y `prefers-reduced-motion` son obligatorios.
- Si queda poco contexto, termina una unidad coherente, guarda todo y dame un nuevo prompt de continuación como este.
- Yo uso Windows y VS Code; los cambios los copio encima de mi carpeta y los subo a GitHub con Git, así que avísame de archivos eliminados o renombrados. Documenta también el proyecto para GitHub (README, capturas cuando existan, licencia a decidir).

## Datos pendientes que debes pedirme cuando toquen
Eslogan y propuesta de valor definitivos; servicios definitivos; información profesional del CEO para Nosotros; capturas o enlaces de RBIM3D y PortaCloud; redes sociales; revisión legal de Privacidad y Términos; fecha real de publicación en Google Play.
