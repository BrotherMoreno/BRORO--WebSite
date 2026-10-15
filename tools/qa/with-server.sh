#!/bin/bash
# Uso: ./with-server.sh "npm run all"   (desde tools/qa). Compila antes con `npm run build` en la raíz.
# Arranca `next start` en :3100, ejecuta el comando y lo cierra. En este entorno el servidor solo vive dentro del mismo comando.
cd "$(dirname "$0")/../.." || exit 1
(nohup npm start -- -p 3100 >/tmp/broro-start.log 2>&1 &)
for i in $(seq 1 40); do c=$(curl -s -o /dev/null -w "%{http_code}" localhost:3100/es); [ "$c" != "000" ] && break; sleep 1; done
(cd tools/qa && bash -c "$1"); rc=$?
pkill -f "[n]ext-server" >/dev/null 2>&1
exit $rc
