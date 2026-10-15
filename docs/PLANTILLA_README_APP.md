# Plantilla de README para los repositorios de las apps (RBIM3D y PortaCloud)

Copiar a `README.md` del repositorio de cada app y completar. El contenido de cada app está en `docs/APPS_BRORO.md`.

```markdown
# <Nombre de la app>
<Una frase: qué hace y para quién.>

![Estado](https://img.shields.io/badge/versi%C3%B3n-1.0-green) ![Plataforma](https://img.shields.io/badge/plataforma-Android-blue)

## Capturas
| | | |
|---|---|---|
| ![](docs/capturas/01.png) | ![](docs/capturas/02.png) | ![](docs/capturas/03.png) |

## Funciones
<Resumen por módulos, solo lo confirmado. Copiar de docs/APPS_BRORO.md.>

## Estado
Versión 1.0 · <próximamente en Google Play / publicada: enlace>

## Funcionamiento sin conexión
<Qué se guarda en el equipo y dónde.>

## Requisitos y compilación
- Android <versión mínima>
- <IDE, JDK, comandos de compilación>

## Estructura del proyecto
<Carpetas principales.>

## Versiones
Ver CHANGELOG.md y la sección Releases (etiquetas `v1.0.0`).

## Licencia
<Privado / propietaria / otra: decidir antes de publicar el código.>

## Contacto
BroroTechnologies@outlook.com
```

Recomendado: no subir keystores ni claves de firma (`*.jks`, `*.keystore`, `local.properties`, `google-services.json` con claves privadas); añadirlos a `.gitignore`. Publicar los APK/AAB solo como Releases si se decide distribuirlos.
