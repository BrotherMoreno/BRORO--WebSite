# PROJECT_STATUS
Última actualización: 2026-10-14. Empresa: BRORO. Proyecto: Next.js 16.4.0 · React 19.3.0 · TypeScript 5 · Tailwind 4 · motion 14.1.0 · lucide-react · zod 4. Sin 3D y sin selector de idioma propio (decisiones del CEO).

## Estado
Fases 0–5 completadas. Fase 6 casi completa: idiomas nativos es/en, selector de país, redes, responsive, contacto completo y mejora continua de calidad. **Pendiente de la Fase 6: envío real del formulario** (decisión del CEO). Luego Fase 7 (pruebas en dispositivos reales, optimización) y Fase 8 (despliegue/entrega).

## Esta entrega
- Redes: TikTok y LinkedIn con enlace limpio (sin parámetros de rastreo); Instagram pendiente (icono apagado).
- Idiomas: se quitó el botón ES/EN (el CEO quiere la traducción automática del navegador, como en su captura de Chrome). Se mantienen /es y /en nativos con redirección por Accept-Language; marcas con translate="no"; sin cookies.
- Contacto completo según code.html del CEO: tarjeta de stack, "¿Por qué elegir a BRORO?" (6 tarjetas), FAQ (5, con details/summary nativo), banner final con diagnóstico técnico y ancla al formulario. Afirmaciones comerciales a confirmar: docs/PENDIENTES_Y_AFIRMACIONES.md ("sin errores" suavizado; "usted"→"tú").
- Calidad (docs/QUALITY_RULES.md, con fuentes): cabeceras de seguridad OWASP, JSON-LD Organization, iconos de marca (el favicon era el genérico de Next), imagen Open Graph, pantalla de error, next/font/local (3 tipografías latinas precargadas, antes CSS), animaciones de entrada solo con CSS en lo que se ve al abrir, fetchPriority en la imagen principal, script `npm run check`.
- Kit QA reutilizable: tools/qa (Chromium headless, axe-core, Lighthouse). Documentación nueva: QUALITY_RULES, PENDIENTES_Y_AFIRMACIONES, PLANTILLA_README_APP; GITHUB.md e I18N.md reescritos; HANDOFF_PROMPT.md mejorado.
- Dependencias eliminadas: @fontsource-variable/* (3). Archivos eliminados respecto a la entrega anterior: src/components/layout/LanguageSwitcher.tsx.

## Pruebas reales (Chromium headless, laboratorio local)
- npm run check OK. Clean install desde el zip OK.
- axe-core 4.14 (WCAG 2.0–2.2 AA + buenas prácticas): 0 violaciones en 14 páginas × 2 anchos (se comprobó que axe detecta fallos en una página defectuosa a propósito).
- Desbordes: 0 en 14 páginas × 5 anchos (320–1440) y sin errores de consola.
- Interacciones (16): menú móvil, país (245; +1 al elegir EE. UU.), 5 errores localizados, WhatsApp con datos correctos, FAQ.
- Lighthouse: accesibilidad 100, buenas prácticas 100, SEO 100 en todas las páginas medidas; rendimiento desktop 98–100, móvil 88–95; CLS 0; FCP móvil ≈ 0,9 s; **LCP móvil de laboratorio 2,9–3,8 s (objetivo ≤ 2,5 s: NO cumplido en laboratorio)**.
- Revisión visual por capturas: inicio (375, 768, 1440), contacto (390, 1440), ficha de proyecto (768), menú móvil, footer, imagen OG.

## NO verificado
Dispositivos reales (iOS/Android), lector de pantalla, datos de usuarios reales (Core Web Vitals de campo), botón Copiar con éxito (el navegador headless no concede portapapeles), enlaces de TikTok/LinkedIn (no pude abrirlos), envío de correo (mailto) en clientes reales, despliegue en Vercel (error reportado sin log), CI en GitHub Actions (probado solo en local).

## Limitaciones conocidas
- Formulario sin servidor: correo (mailto) o WhatsApp.
- Rutas sin traducir (/en/servicios). CSP parcial. Textos EN y legales son borradores.
- npm audit completo: 5 altas solo en la cadena de desarrollo de ESLint (runtime = 0).

## Pendiente del CEO
URL de Instagram; nombre y trayectoria; eslogan; capturas de apps; dominio; revisión legal; confirmar docs/PENDIENTES_Y_AFIRMACIONES.md; cómo recibir los mensajes del formulario; log de error de Vercel.

## Siguiente
Fase 6 final: envío real del formulario. Backlog completo en HANDOFF_PROMPT.md §8.
