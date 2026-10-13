# PROJECT_STATUS
- Empresa: BRORO (el CEO es quien escribe). Proyecto en brorotech/ (Next.js 16.4.0, React 19.3.0, TypeScript 5, Tailwind 4).
- Fase actual: 6 EN CURSO. Hecho: idiomas es/en, selector de país del teléfono, redes sociales en el footer y revisión responsive. Pendiente de la Fase 6: envío real del formulario (necesita decisión del CEO). Luego Fase 7 (pruebas/optimización) y 8 (entrega).
- DECISIÓN DEL CEO: solo 2D, sin 3D. Dependencias: next, react, react-dom, motion 14.1.0, lucide-react 1.55.0, zod 4.6.7, fuentes @fontsource-variable. No hay librería de i18n: diccionarios propios (docs/I18N.md).

## Estructura
- src/app/[lang]/... (todas las páginas), src/proxy.ts (redirección por idioma), src/i18n/ (config, diccionarios es/en, países), src/content/site.ts (datos fijos y redes), src/components/{ui,layout,contact,motion}, src/sections/home.
- Páginas: inicio, servicios, portafolio, portafolio/[slug] (rbim3d, portacloud), nosotros, contacto, legal/privacidad, legal/terminos. Además sitemap.xml y robots.txt.

## Hecho en esta entrega
- i18n con rutas /es y /en, selector ES/EN en header y menú móvil, cookie NEXT_LOCALE, hreflang/canonical, títulos y OG por idioma, 404 reales.
- Selector de país con 245 países (nombres localizados, Perú por defecto), el prefijo cambia y se incluye país y teléfono en el mensaje.
- Footer con contacto (correo y WhatsApp) y redes: Instagram, TikTok y LinkedIn (SIN URL todavía: se muestran apagadas, "próximamente").
- Responsive: tamaños de texto y espacios por breakpoint, menú móvil con idioma y botón, tarjetas y formularios sin desbordes, campos a 16 px en móvil, correo del footer sin partirse.

## Pruebas reales (con Chromium headless, anchos 320/375/768/1024/1440)
- build, tsc y lint OK. Rutas 200; /es/xyz 404 real; / redirige según cookie y Accept-Language.
- 70 combinaciones página × ancho: sin desbordes horizontales ni errores de consola.
- Interacciones: cambio de idioma (URL, cookie, aria-current), menú móvil (abre, Escape, se cierra al navegar), selector de país (+1 al elegir Estados Unidos), validación con 5 mensajes localizados, WhatsApp no abre con datos inválidos y con datos válidos abre wa.me/51929259109 con país, prefijo, servicio, presupuesto y NDA.
- Revisión visual por capturas: inicio (375, 768, 1440), contacto en inglés (1440), ficha de proyecto (768), menú móvil, footer.
- Bugs hallados y corregidos: menú móvil no se cerraba al cambiar idioma; mensaje de error de zod sin traducir en servicio; título ausente en inicio; correo del footer partido; etiqueta de presupuesto cortada.

## Limitaciones y avisos
- El botón Copiar no se pudo probar con éxito en el navegador headless (devuelve "No se pudo copiar" sin permiso de portapapeles); en navegadores normales sobre HTTPS/localhost debería funcionar. Probar a mano.
- Formulario: sigue sin servidor. Dos acciones reales: correo (mailto) y WhatsApp. Envío por servidor = decisión pendiente del CEO.
- Las rutas no se traducen (/en/servicios). Mejora posible.
- Textos en inglés redactados por Claude: revisar. Legales en ambos idiomas son borradores.
- Compromisos escritos por el CEO que debe poder cumplir: respuesta < 24 h, soporte in situ.
- npm audit completo: 5 altas solo en la cadena de desarrollo de ESLint; runtime = 0.
- Vercel: el CEO mencionó errores de despliegue y aún no ha enviado el log. Causas probables: carpeta antigua sin borrar en el repositorio (ver docs/GITHUB.md sección 8) o directorio raíz mal configurado.

## Datos pendientes del CEO
URLs de Instagram, TikTok y LinkedIn y la cuarta red (el mensaje se cortó en "y"); nombre y trayectoria del CEO; eslogan definitivo; capturas de las apps; dominio; lista de tecnologías (tarjeta de stack); revisión legal; decisión de envío del formulario; log de errores de Vercel.

## Cómo repetir las pruebas visuales
Chromium se obtiene con npm: `@sparticuz/chromium` + `puppeteer-core` (no instalados en el proyecto, solo en una carpeta aparte). Guion: abrir /es y /en en varios anchos, comparar scrollWidth con clientWidth y revisar capturas.
