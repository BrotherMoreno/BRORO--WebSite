# FASE 0 — Análisis, identidad visual, stack y plan

## 1. Análisis del logo
- Monograma "B" de dos lazos tipo cinta (banda de Möbius) con un triángulo "play" negativo en el centro de la panza superior.
- Degradados de amarillo-lima a verde bosque casi negro: volumen, profundidad, sensación de material continuo.
- Lectura de marca: continuidad (la cinta no se corta), avance (el triángulo/play), transformación (el pliegue). Encaja con "cambiar cómo se resuelven los problemas con software".
- Fondo transparente, 500x500 px (raster). Para producción conviene pedir una versión vectorial (SVG) y una variante monocroma.
- El logo no se modifica; solo se escala, se coloca sobre fondos oscuros/claros con zona de respeto.

## 2. Paleta (HEX muestreados del PNG; los marcados * son estimados)
| Token | HEX | Uso |
|---|---|---|
| `--lime-400` | #D6D233 | Acento primario (CTA, resaltados) |
| `--lime-300*` | #E8E94A | Hover/brillo del acento |
| `--leaf-500` | #4C8439 | Secundario, estados activos |
| `--forest-700` | #164427 | Superficies elevadas, bordes marcados |
| `--forest-800` | #0B301E | Superficies/tarjetas |
| `--forest-900` | #0C2306 | Fondos de sección profundos |
| `--ink-950*` | #050F09 | Fondo base (modo oscuro por defecto) |
| `--paper-50*` | #F4F6EF | Fondo claro / texto sobre oscuro |
| `--text-primary*` | #EEF2E6 | Texto principal sobre oscuro |
| `--text-muted*` | #9DB09A | Texto secundario |
| `--border*` | rgba(214,210,51,.14) | Bordes finos |
Regla: el amarillo-lima se usa con moderación (≈10% de la superficie); el verde profundo domina. Contraste del texto sobre `ink-950` y sobre lime con texto `ink-950` a verificar ≥ 4.5:1 en Fase 2.

## 3. Tipografía
- Titulares: **Bricolage Grotesque** (carácter, ejes variables, afín a las curvas del logo).
- Cuerpo/UI: **Inter** (legibilidad).
- Datos/etiquetas técnicas: **JetBrains Mono**.
- Escala fluida con `clamp()`; titulares muy grandes, tracking ajustado, peso contrastado.
(Fuentes con licencia OFL; se autoalojarán con `next/font`.)

## 4. Dirección artística: "Cinta continua"
- Concepto: la cinta del logo como hilo conductor: líneas/curvas que fluyen entre secciones y reaccionan al scroll.
- Fondo oscuro verde casi negro, rejilla técnica muy sutil, destellos lima como luz puntual.
- Hero: escena 3D ligera de una cinta/lazo con degradado verde-lima que responde al cursor (fallback estático en móvil o con reduced-motion).
- Botones: píldora lima sólida (primario) y contorno fino (secundario); radio 999px; hover con desplazamiento de brillo.
- Tarjetas: superficie `forest-800`, borde fino, radio 20-24px, sombra suave con tinte verde; hover con elevación y borde lima.
- Iconos: Lucide, trazo 1.5px.
- Movimiento: easing suave (cubic-bezier .22,1,.36,1), duraciones 300-700ms, texto del hero revelado por líneas, parallax leve, sin bloquear contenido. `prefers-reduced-motion` desactiva 3D, parallax y smooth scroll.

## 5. Público y propuesta de valor (provisional)
- Público: empresas y equipos que necesitan software a medida, IA, automatización y sistemas empresariales.
- Propuesta provisional: "Software que cambia cómo se resuelven los problemas". Todo el texto será provisional y editable desde un solo archivo.

## 6. Stack elegido: Next.js (App Router) + TypeScript + Tailwind CSS
Motivos: SEO técnico (metadata, sitemap, SSG), rutas dinámicas para el detalle de proyectos, ecosistema directo para React Three Fiber y shadcn/ui, y camino natural hacia API/formularios con Route Handlers sin otro servidor. Despliegue sencillo (Vercel o Node/Docker).
Alternativas: Astro es más ligero pero las islas React complican el 3D y las transiciones; Vite+React exige montar SEO y rutas aparte.
Costes: mayor peso base de JS; se mitiga con carga diferida del 3D y componentes de servidor.
Librerías previstas (a verificar en sus repos oficiales, licencia y versión estable antes de instalar, en Fase 1): Motion, GSAP (+ScrollTrigger), Lenis, React Three Fiber + drei, Lucide, shadcn/ui (base accesible), Zod + React Hook Form. Lottie, Aceternity UI y Magic UI quedan como opción solo si aportan algo concreto. No he consultado aún ningún repositorio: la evaluación real es tarea de Fase 1.

## 7. Arquitectura de información
Inicio · Servicios · Portafolio · Proyecto/[slug] · Nosotros · Contacto · Legales (Privacidad, Términos, Cookies).

## 8. Estructura de carpetas prevista
```
src/
  app/            (rutas, layouts, metadata)
  components/ui/  (botones, tarjetas, inputs)
  components/layout/ (header, footer, nav)
  components/motion/ (wrappers de animación)
  sections/       (home/, services/, about/ ...)
  content/        (site.ts, services.ts, projects.ts: contenido editable)
  lib/            (utilidades, validaciones Zod)
  styles/         (tokens.css, globals.css)
  types/
public/ (logo, fuentes, og)
docs/
```

## 9. Roadmap
Fase 1 inicialización → 2 sistema de diseño → 3 inicio → 4 páginas interiores → 5 animaciones → 6 funcionalidad/backend (formulario real solo con backend conectado) → 7 pruebas → 8 entrega.

## 10. Información que falta (contenido provisional hasta tenerla)
1. Nombre oficial de la empresa (¿BRORO?) y eslogan.
2. Servicios que ofrece realmente.
3. Proyectos reales para el portafolio (o confirmar maquetas marcadas como ejemplo).
4. Correo/teléfono/redes y destino del formulario de contacto.
5. Logo en SVG.
