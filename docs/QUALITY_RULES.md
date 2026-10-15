# Reglas de calidad del sitio (criterios de entrega)

Una entrega no está terminada si incumple alguna regla marcada como **obligatoria**. Las cifras objetivo salen de fuentes públicas; el estado medido es de este proyecto (13-oct-2026, laboratorio local con Chromium headless).

## 1. Rendimiento (Core Web Vitals)
Objetivos en el percentil 75 de usuarios reales: **LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1** (fuente: web.dev, "How the Core Web Vitals metrics thresholds were defined").
Reglas: lo que se ve al abrir la página no puede depender de JavaScript (animaciones de entrada solo con CSS); imágenes con ancho y alto; imagen principal con `fetchPriority="high"` (en Next 16 `priority` está obsoleto); tipografías con `next/font` y solo el subconjunto necesario; sin 3D ni librerías pesadas sin justificación; JS inicial de la portada ≈ 230 KB gzip como referencia.
**Estado medido:** desktop 98–100, móvil 88–95; CLS 0 en todas; FCP móvil ≈ 0,9 s; **LCP móvil de laboratorio 2,9–3,8 s (por encima del objetivo)**. El laboratorio simula 4G lenta y CPU 4× más lenta: confirmar con datos reales (PageSpeed Insights sobre la URL publicada o Vercel Speed Insights).

## 2. Accesibilidad (WCAG 2.2 nivel AA) — obligatoria
Reglas: etiquetas asociadas a cada campo; errores con `role="alert"`; foco visible y no tapado por cabeceras fijas (2.4.11); **objetivos táctiles ≥ 24×24 px** (2.5.8; ideal 44); navegación completa con teclado; enlace "Saltar al contenido"; `prefers-reduced-motion` respetado; contraste suficiente; `lang` correcto en `<html>`; enlaces que abren pestaña nueva lo anuncian; sin información solo por color.
Fuente: resumen de los criterios nuevos de WCAG 2.2 (Deque University) y norma W3C WCAG 2.2.
**Estado medido:** axe-core 4.14 (WCAG 2.0 a 2.2 AA + buenas prácticas): 0 violaciones en 14 páginas × 2 anchos; Lighthouse accesibilidad 100. La automatización detecta solo una parte de los problemas: falta una revisión manual con lector de pantalla.

## 3. SEO técnico
Título y descripción únicos por página; `canonical` y `hreflang` por idioma; `sitemap.xml` y `robots.txt`; datos estructurados `Organization` (JSON-LD) con sus redes; imagen Open Graph (1200×630); iconos propios; un solo `<h1>` por página; enlaces rastreables (`<a href>`); HTTPS.
Nota: no pude abrir la documentación oficial de Google desde la búsqueda; estas reglas son prácticas estándar y conviene contrastarlas con Search Central.
**Estado medido:** Lighthouse SEO 100.

## 4. Seguridad
Cabeceras (OWASP HTTP Headers Cheat Sheet): `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security` (sin `preload` hasta confirmar dominio), `Permissions-Policy` restrictiva, y CSP parcial (`object-src 'none'; base-uri 'self'; frame-ancestors 'none'`; `frame-ancestors` sustituye a `X-Frame-Options`). Sin `X-Powered-By`. Nunca subir `.env`; las claves van en Secrets de GitHub/Vercel. Dependabot activo.
**Pendiente:** CSP completa con nonces (exige renderizado dinámico), validación y antispam del formulario cuando tenga servidor.
**Estado medido:** Lighthouse buenas prácticas 100; `npm audit --omit=dev` = 0.

## 5. Contenido y confianza
No inventar clientes, testimonios, cifras ni certificaciones. Toda promesa comercial (plazos, respuesta en 24 h, SLA, garantías) la confirma el CEO: lista en `docs/PENDIENTES_Y_AFIRMACIONES.md`. Evitar absolutos ("sin errores"). Tono consistente (tú). Un solo mensaje principal por página y una acción clara. Lo no disponible se marca "próximamente".

## 6. Privacidad
El sitio no usa cookies ni analítica. Si se añade analítica, cookies o envío de formularios: actualizar la política, valorar aviso de consentimiento y revisar con un profesional legal.

## 7. Idiomas
Español e inglés nativos (`/es`, `/en`) con `hreflang`. Otros idiomas: traducción automática del navegador; marcas y datos técnicos con `translate="no"`. No usar `<meta name="google" content="notranslate">`.

## 8. Proceso de entrega
Cada entrega: `npm run check` (lint, build y tipos, en ese orden: los tipos `PageProps`/`LayoutProps` los genera `next build`) en verde; `tools/qa` (a11y, interacciones, desbordes, Lighthouse) ejecutado o declarado no ejecutado; documentos de continuidad actualizados; zip sin `node_modules` ni `.next`; sección "En GitHub" con los pasos y los archivos eliminados.
