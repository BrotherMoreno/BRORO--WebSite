# GitHub: procedimiento para subir y actualizar el sitio

## A. Primera vez (repositorio nuevo)
1. En github.com: New repository, nombre `broro-web`, **privado**, sin README ni .gitignore (el proyecto ya los trae). Si usas una organización "BRORO", créala antes.
2. Instala Git (git-scm.com) y, en la carpeta del proyecto (la que tiene `package.json`), en PowerShell:
```
git init
git add -A
git commit -m "Sitio BRORO: fases 0 a 6, idiomas, contacto completo y QA"
git branch -M main
git remote add origin https://github.com/TU-USUARIO-U-ORG/broro-web.git
git push -u origin main
```
3. Abre la pestaña **Actions**: el flujo "CI" debe quedar en verde.

## B. Cada entrega nueva (repositorio existente)
Las entregas pueden mover, borrar o renombrar archivos. Copiar encima no borra lo viejo y rompe el build; por eso se borra antes lo que el zip reemplaza.
```powershell
cd C:\RUTA\A\TU\brorotech
git status                                    # si hay cambios tuyos sin guardar, haz commit antes
Remove-Item -Recurse -Force src, public, docs, tools, .github, .next -ErrorAction SilentlyContinue
Expand-Archive -Path "$HOME\Downloads\brorotech-fase6.zip" -DestinationPath "$env:TEMP\broro-zip" -Force
robocopy "$env:TEMP\broro-zip\brorotech" . /E            # códigos 0 a 7 son normales
Test-Path -LiteralPath "src\app\[lang]"                   # debe ser True
npm install
npm run check                                             # lint + tipos + build
git add -A
git status                                                # revisa: new file / modified / deleted
git commit -m "Descripción breve de la entrega"
git push
```
Git Bash, Mac o Linux:
```bash
rm -rf src public docs tools .github .next
unzip -o ~/Downloads/<zip> -d /tmp/broro-zip && cp -a /tmp/broro-zip/brorotech/. .
npm install && npm run check && git add -A && git commit -m "..." && git push
```
`git add -A` (no `git add .`) registra también los archivos eliminados. No borres `.git`, `node_modules` ni `.env*` locales.

## C. Comprobar que salió bien
- Pestaña **Actions**: CI en verde (instalación limpia, lint, build, tipos).
- Vercel (si está conectado al repositorio) despliega solo al hacer push a `main`. Si falla: Settings > General > **Root Directory** debe apuntar a la carpeta con `package.json`; pega el log del error.
- `npm audit --omit=dev` debe dar 0.

## D. Problemas frecuentes
| Síntoma | Causa | Solución |
|---|---|---|
| "duplicate route" / "You cannot have two parallel pages" | Quedaron carpetas antiguas | Repite el paso B borrando `src` antes de copiar |
| `Cannot find module 'three'` (u otra librería) | Archivo viejo que ya no existe en la entrega | Borra `src` y copia de nuevo |
| `npm ci` falla por `package-lock.json` | Lock desincronizado | `npm install` y haz commit del lock |
| `git push` rechazado | El remoto tiene cambios que no tienes | `git pull --rebase` y vuelve a `git push` |
| Avisos LF/CRLF | Windows | Normal: `.gitattributes` los gestiona |
| Vercel: build falla pero local no | Distinta versión de Node | En Vercel usa Node 22 (Settings > General) |

## E. Ajustes recomendados del repositorio
- About: descripción corta y topics (`nextjs`, `typescript`, `tailwindcss`, `portafolio`).
- Settings > General > Social preview: sube `public/og.png` (1200×630).
- Si tu plan lo permite: proteger `main` y exigir que CI pase antes de fusionar.
- Secrets (para la Fase 6 del formulario): Settings > Secrets and variables > Actions, y también en Vercel. Nunca en el código.
- Dependabot ya está configurado (`.github/dependabot.yml`): revisa los Pull Requests que abra.
- Licencia: decídela antes de hacer público el repositorio; privado no la necesita.

## F. Versiones
Cuando una entrega esté estable: `git tag v0.6.0 && git push --tags`; en GitHub: Releases > Draft a new release.

## G. Repositorios de las apps
RBIM3D y PortaCloud van en repositorios propios. Plantilla: `docs/PLANTILLA_README_APP.md`.
