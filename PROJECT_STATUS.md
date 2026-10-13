# PROJECT_STATUS
- Empresa: BRORO (CEO: fundador). Proyecto en brorotech/ (Next.js 16.4.0, React 19.3.0, TypeScript 5, Tailwind 4).
- Fase actual: 5 completada. Siguiente: Fase 6 (funcionalidad real/backend), luego 7 (pruebas/optimización) y 8 (entrega).
- DECISIÓN DEL CEO: sin 3D, solo 2D. Se eliminaron three, @react-three/*, gsap, lenis y react-hook-form. No reintroducir 3D.
- Dependencias: next, react, react-dom, motion 14.1.0, lucide-react 1.55.0, zod 4.6.7, fuentes @fontsource-variable (Bricolage Grotesque, Inter, JetBrains Mono).

## Hecho
- Fase 2: sistema de diseño (Container, Button con flecha, Card, SectionHeading con índice 01 /, Header, menú móvil, Footer, skip link).
- Fase 3: inicio con hero 2D (logo con parallax al cursor, anillos SVG que giran, chips flotantes), datos reales (2 apps, v1.0, offline), marquee de capacidades, servicios, proyectos destacados, diferenciadores, proceso y CTA.
- Fase 4: /servicios, /portafolio, /portafolio/[slug] (RBIM3D y PortaCloud con módulos, ficha y siguiente proyecto), /nosotros, /contacto (formulario validado con Zod que abre el correo con mailto), /legal/privacidad y /legal/terminos (borradores marcados para revisión legal), /design-system (noindex).
- Fase 5: titular animado, Reveal al hacer scroll, tarjetas con brillo que sigue al cursor, barra de progreso de scroll, marquee, flotación de chips, microinteracción de flecha en botones. Todo respeta prefers-reduced-motion (MotionConfig reducedMotion="user", marquee estático y sin barra de progreso).
- Inspiración usada (patrones, no contenido): siznex.com/portfolio y icoderzsolutions.com/our-project.shtml: secciones numeradas, tarjetas de proyecto con ficha, detalle por caso, CTA con pasos. NO se copiaron cifras, clientes ni textos.

## Pruebas reales (Fase 4-5)
build OK (13 rutas), tsc OK, lint OK, rutas 200 y /xyz 404, todos los enlaces internos de las páginas devuelven 200, sin canvas ni Three.js en los bundles, validación Zod probada con 5 casos, npm audit --omit=dev = 0 vulnerabilidades, JS inicial de la home ≈ 227 KB gzip.

## Limitaciones y avisos conocidos
- /portafolio/<slug inexistente> muestra la página "no encontrada" con noindex pero responde HTTP 200 (limitación de cacheComponents; dynamicParams no es compatible).
- El formulario de contacto NO envía por servidor: abre el correo del usuario (mailto). Envío real = Fase 6, requiere decidir servicio (p. ej. Resend, Formspree o API propia) y variables de entorno.
- NO verificado: aspecto visual y animaciones en navegador/móvil (no hay navegador en mi entorno), contraste, uso con teclado real, Lighthouse.
- npm audit completo: 5 altas solo en cadena de desarrollo de ESLint (no afecta al sitio).
- next.config activa cacheComponents: `new Date()` en render requiere "use cache" (ver Year.tsx).

## Datos pendientes del CEO
Nombre y trayectoria profesional (página Nosotros), eslogan definitivo, servicios definitivos ("y más"), capturas o enlaces de RBIM3D y PortaCloud, redes sociales, dominio, revisión legal de Privacidad y Términos, fecha de publicación en Google Play.

## Siguiente tarea: Fase 6
Decidir con el CEO cómo recibir los mensajes del formulario; implementar Route Handler con validación Zod, estados de carga, error y éxito, protección anti-spam y variables de entorno documentadas. No simular envíos.
