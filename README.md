# BRORO — plataforma web

Sitio web de BRORO, empresa de desarrollo de software (software a medida, apps Android y web). Presenta sus dos apps Android, RBIM3D y PortaCloud. Next.js (App Router) + TypeScript + Tailwind CSS 4.

## Requisitos
- Node.js 22 o superior, npm 10 o superior

## Comandos
```
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # compilación de producción
npm start        # sirve la compilación
npm run lint
```

## Contenido editable
`src/content/site.ts` (nombre, eslogan, correo, servicios). Los valores marcados PROVISIONAL deben confirmarse.

## Marca
Tokens de color en `src/app/tokens.css`; logos en `public/brand/` (SVG monocromo y PNG con degradado).
Fuentes autoalojadas con @fontsource (Bricolage Grotesque, Inter, JetBrains Mono).

## Variables de entorno
`NEXT_PUBLIC_SITE_URL` (opcional): URL pública del sitio para canonical, hreflang y sitemap. En Vercel se detecta sola. El envío real del formulario (pendiente) añadirá más variables.

## Documentación
`docs/FASE_0_PLANIFICACION.md`, `PROJECT_STATUS.md`, `IMPLEMENTATION_LOG.md`.

## Estado y continuidad
Fases 0 a 5 completadas y Fase 6 en curso (idiomas, selector de país, redes y responsive hechos; envío real del formulario pendiente). Ver `PROJECT_STATUS.md`. Para continuar el trabajo con un asistente de IA, usar `HANDOFF_PROMPT.md`.

## Proyectos presentados
Detalle en `docs/APPS_BRORO.md`.

## Contribuir y versionado
Rama principal `main`. Mensajes de commit por fase (por ejemplo "Fase 3: página principal"). No subir `.env` ni claves.

## GitHub
Guía completa en `docs/GITHUB.md`. El repositorio incluye CI (`.github/workflows/ci.yml`), Dependabot y plantillas de PR e Issues.

## Idiomas
Español e inglés (`/es`, `/en`). Guía en `docs/I18N.md`.
