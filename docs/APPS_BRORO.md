# Proyectos reales de BRORO (fuente: resumen entregado por el CEO)
Ambas apps son Android, se lanzarán en Google Play como v1.0, funcionan sin internet y guardan datos en el equipo. No hay conexión entre ellas.

## RBIM3D (RBim 3D)
- Proyectos y modelos: proyectos con tipología; modelos IFC por especialidad (Arquitectura, Estructuras, Sanitarias, Eléctricas) asignados por prefijo del nombre o manualmente; especialidades propias (prefijo de 2 a 6 caracteres); niveles IFC propios por modelo; huella digital para detectar duplicados y archivos dañados; carga con avance y recuperación al abrir.
- Inspección: selección individual y múltiple; ocultar, aislar, cortar, propiedades IFC, registros y estados; restablecer visibilidad; corte de sección; color por estado o IFC y transparencia por especialidad.
- Herramientas 3D (nuevas en PT50): recorrido en primera/tercera persona con joystick (gravedad, colisión, salto, correr, agacharse, atravesar paredes o volar); medición (punto a punto, polilínea, ángulo, área, imán a vértices); cámara (perspectiva/ortográfica, alinear a planta/frente/lateral, nivelar horizonte, encuadrar); puntos de vista guardados; modos de visualización (completa, sombreada, aristas, línea oculta, alambre); iluminación escena/linterna; exportar imagen.
- Coordinación (nuevo en PT50): detección de choques entre especialidades o en todo el modelo (choque duro con tolerancia y holgura), con estado, responsable, comentario y fecha, e informe PDF; simulación 4D desde IFC o CSV (construir, demoler, temporal); RFI con prioridad, referencia, asunto, pregunta, propuesta, impacto en costo y plazo, respuesta, firmas, exportación a Excel y PDF.
- Control de avance: estados por elemento (sin iniciar, en proceso, terminado) en colores; filtros combinables; registros de estados con fecha; registro de obra con comentario, fotos y captura, historial y PDF con diseño técnico de RBim 3D y espacio de firmas.
- Expediente y planos: documentos por proyecto (también .zip); visores PDF, Word, Excel, DWG y DXF; PDF con zoom, búsqueda, OCR, capas y medición; edición de celdas de Excel; observaciones ancladas con autor, fecha y estado (no se cierran sin evidencia); salidas: plano marcado en PDF, registro de observaciones y expediente de transferencia; DWG/DXF con capas, medición, búsqueda, dibujos propios y exportación.
- Transversal: sin internet, adaptada a celular y tableta, guardado y compartir archivos y PDFs en Android.
- Nota del CEO: "detección de choque duro con tolerancia y holgura" se dedujo del código, no de una prueba.

## PortaCloud
- Plantillas de protocolo: importa PDF editables (hasta 20 MB) y lee sus campos; se pueden reemplazar, archivar y restaurar; carpetas, tipo y versión; notas al pie y opción de información meteorológica; modo de colaboración y permisos por rol o persona.
- Emisión por lote: protocolos marcados se emiten por lotes (uno, lista 1,3,7 o rango 1-15, dentro de una manzana); cada emisión a nombre de quien la crea (obligatorio) y con responsable opcional; nace en estado Abierto.
- Gestión: lista con estados Abierto, En proceso y Cerrado, filtros y búsqueda; detalle con trazabilidad; reapertura con motivo obligatorio (la evidencia anterior queda superada); descartar (vuelve a Abierto) y eliminar (exige motivo guardado en el registro maestro).
- Llenado y firmas: llenado sobre el PDF con avance al campo siguiente; firma con el dedo con nombre, fecha y hora; roles Ingeniero de Producción, Inspector de Calidad e Ingeniero Residente.
- Evidencia: PDF nuevo aplanado con huella SHA-256 y hoja de trazabilidad "Cerrado — liberado"; archivada y descargable.
- Indicadores: tarjetas y gráficos (estado de cartera, cierres por semana, creados vs cerrados, firmas pendientes por rol, avance por manzana, antigüedad); filtros y exportación a Excel y PDF.
- Registro maestro: cada acto (creación, estados, evidencia, reaperturas, eliminaciones), filtrable y exportable a Excel y PDF.
- Transversal: sin internet; archivos en Descargas/PortaCloud y compartibles; avisos por fallos de almacenamiento, límite de registros o exceso de operaciones.
- NO CONFIRMADO (no prometer en la web): la opción de clima puede ser solo un ajuste guardado; el modo secuencial y los permisos existen como configuración, sin sincronización entre usuarios confirmada.
