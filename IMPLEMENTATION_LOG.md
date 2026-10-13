# IMPLEMENTATION_LOG
## Fase 0
- Logo analizado, paleta muestreada, Next.js elegido, dirección "Cinta continua".
## Fase 1
- Versiones consultadas con `npm view` (todas con licencia MIT/ISC/Apache salvo GSAP, "no charge" license propia: revisar términos antes de producción).
- create-next-app 16.4.0 con TS, Tailwind, ESLint, App Router, src/.
- Fuentes vía @fontsource-variable en lugar de next/font/google (el sandbox no accede a Google Fonts y además queda autoalojado).
- tokens.css se colocó junto a globals.css porque el loader de Tailwind para Turbopack no resolvía el import desde src/styles.
- Un mkdir con llaves en sh creó una carpeta literal "{components"; eliminada.
- npm audit: ver PROJECT_STATUS.
## Fase 2
- Componentes base en src/components/{ui,layout}; nav con usePathname (cliente) y menú móvil que cierra al navegar por onClick (un useEffect con setState fallaba el lint de React).
- cacheComponents rechazó `new Date()` en el footer: se aisló en Year.tsx con "use cache".
- Marca actualizada a BRORO. RBIM3D y PortaCloud registrados como proyectos reales; no se redactan resultados ni métricas. Textos de clima/colaboración de PortaCloud marcados por el CEO como no confirmados: no se prometen en la web.
- Las dos apps se anuncian como "próximamente en Google Play" (v1.0), sin insignia oficial de Google Play.
## Fase 3
- Cinta del hero: ParametricGeometry (Möbius) con color por vértice simétrico en u para evitar costura; Canvas cargado con next/dynamic (ssr:false) solo si no hay reduced-motion ni pantalla pequeña (useSyncExternalStore con snapshot de servidor true para evitar desajuste de hidratación).
- Lint de React exigió función en línea en useMemo.
- Motion ("motion/react") para titular y Reveal; sin Lenis ni GSAP por ahora: no aportaban valor todavía.
- Diferenciadores y capacidades redactados solo con funciones confirmadas por el CEO; nada de clientes, cifras ni testimonios.
