#!/usr/bin/env bash
# Bring globalorbit.us back if PM2 dropped the process or the port is closed.
# Safe to run from cron: exits immediately when http://127.0.0.1:3035 responds.
set -euo pipefail

APP_DIR="/srv/apps/globalorbitusa"
APP_NAME="globalorbitusa"
PORT="3035"
LOCK="/tmp/globalorbitusa-ensure.lock"

exec 9>"$LOCK"
if ! flock -n 9; then
  exit 0
fi

code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 12 "http://127.0.0.1:${PORT}/" || true)"
if [ -n "$code" ] && [ "$code" != "000" ]; then
  exit 0
fi

cd "$APP_DIR"
echo "$(date -Is) globalorbitusa not answering on ${PORT} (http ${code:-none}); restoring"

if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 restart "$APP_NAME"
else
  pm2 start ecosystem.config.cjs --only "$APP_NAME"
fi
pm2 save
