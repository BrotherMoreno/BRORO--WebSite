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
Ninguna por ahora (se documentarán en Fase 6 con el formulario de contacto).

## Documentación
`docs/FASE_0_PLANIFICACION.md`, `PROJECT_STATUS.md`, `IMPLEMENTATION_LOG.md`.

## Estado y continuidad
Fases 0 a 3 completadas; siguiente: Fase 4 (páginas interiores). Ver `PROJECT_STATUS.md`. Para continuar el trabajo con un asistente de IA, usar `HANDOFF_PROMPT.md`.

## Proyectos presentados
Detalle en `docs/APPS_BRORO.md`.

## Contribuir y versionado
Rama principal `main`. Mensajes de commit por fase (por ejemplo "Fase 3: página principal"). No subir `.env` ni claves.
