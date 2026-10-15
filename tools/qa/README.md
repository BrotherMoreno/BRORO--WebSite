# Kit de QA de BRORO

Pruebas reales en Chromium headless: desbordes responsive, accesibilidad (axe-core, WCAG 2.2 AA), Lighthouse e interacciones (menú móvil, país, validación, WhatsApp).

Se instala **aparte** del proyecto (no afecta al build ni a Vercel): `@sparticuz/chromium` es un Chromium para Linux x64, por lo que funciona en el entorno de Claude y en CI Linux, **no en Windows**. En Windows usa Lighthouse desde Chrome DevTools.

```
npm run build                      # en la raíz del proyecto
cd tools/qa && npm install
./with-server.sh "npm run all"     # arranca el sitio, ejecuta todo y lo cierra
./with-server.sh "npm run a11y"    # o una sola prueba
```
Variables: `PAGES=/es,/en/contacto`, `WIDTHS=375,1280`, `LH_PAGES=/es`, `BASE=https://tu-dominio` (para medir el sitio publicado, sin servidor local). Capturas en `tools/qa/out/`.

Los números de Lighthouse son de laboratorio (red 4G lenta y CPU 4× más lenta simuladas) y no equivalen a datos de usuarios reales: mide también con PageSpeed Insights sobre la URL publicada.
