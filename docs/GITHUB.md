# Guía de GitHub para el proyecto BRORO

## 1. Primera vez
1. Crea un repositorio vacío en github.com (sin README ni .gitignore). Recomendado: privado y dentro de una organización "BRORO".
2. En la carpeta del proyecto (la que tiene `package.json`):
```
git init
git add .
git commit -m "Fases 0 a 5: base, diseño, inicio, páginas y animaciones"
git branch -M main
git remote add origin https://github.com/TU-USUARIO-U-ORG/broro-web.git
git push -u origin main
```
3. En la pestaña **Actions** del repositorio verás correr el flujo "CI" (lint, build y tipos). Debe terminar en verde.

## 2. Cada vez que llegue una entrega nueva (método seguro)
Las entregas pueden eliminar o renombrar archivos; copiar encima no los borra y puede dejar restos que rompan el build. Por eso:
1. Cierra el servidor (`Ctrl + C`).
2. En tu carpeta del proyecto borra `src`, `public` y `docs`. NO borres `.git` ni `node_modules`.
3. Copia todo el contenido del zip nuevo en tu carpeta, reemplazando lo existente (incluye archivos ocultos como `.github`).
4. Ejecuta `npm install` (limpia dependencias eliminadas) y `npm run build` para comprobar.
5. En VS Code abre Control de código fuente (`Ctrl+Shift+G`): revisa la lista de archivos nuevos, modificados y eliminados.
6. Confirma con un mensaje claro y sincroniza:
```
git add .
git commit -m "Fase N: descripción breve"
git push
```
7. Mira la pestaña Actions: debe quedar en verde.

## 3. Qué automatiza el repositorio
- `.github/workflows/ci.yml`: en cada push a `main` y en cada Pull Request ejecuta `npm ci`, lint, build y comprobación de tipos.
- `.github/dependabot.yml`: propone actualizaciones semanales de dependencias (agrupadas) y mensuales de las acciones de GitHub.
- Plantillas de Pull Request y de Issues (error, mejora).
- `.gitattributes`: evita problemas de saltos de línea entre Windows y GitHub.

## 4. Ajustes recomendados del repositorio (Settings)
- Descripción corta y topics: `nextjs`, `typescript`, `tailwindcss`, `portafolio`.
- Social preview: sube el logo de BRORO.
- Si tu plan lo permite: protege la rama `main` y exige que el CI pase antes de fusionar.
- Nunca subas archivos `.env`: ya están ignorados. Las claves de la Fase 6 irán como Secrets del repositorio y en el servicio de despliegue.
- Licencia: decide antes de hacerlo público. Un repositorio público sin licencia queda con todos los derechos reservados; privado no necesita licencia.

## 5. Las apps
RBIM3D y PortaCloud van en repositorios propios. Cada uno debería tener README, capturas, CHANGELOG y las versiones publicadas como Releases (etiquetas `v1.0.0`).

## 6. Versiones (opcional)
Cuando una fase esté estable: `git tag v0.5.0` y `git push --tags`; en GitHub, Releases > Draft a new release.

## 7. Variables en Vercel
No es obligatorio configurar nada. Opcional: `NEXT_PUBLIC_SITE_URL` con el dominio final (por ejemplo `https://www.tudominio.com`) cuando lo tengas.

## 8. Cambios grandes de estructura
La Fase 6 movió todas las páginas a `src/app/[lang]/` y eliminó `src/app/page.tsx`, `layout.tsx`, `servicios`, `portafolio`, `nosotros`, `contacto`, `legal` y `design-system`, además de `src/content/home.ts`, `pages.ts`, `contact.ts` y `projects.ts`. Si copias el zip sin borrar antes `src`, el build falla con rutas duplicadas: usa siempre el método de la sección 2.
