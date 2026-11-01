/**
 * PM2 configuration for GlobalOrbitUSA only.
 * Do not start or restart HostingBeyond from this file.
 * Bind to 127.0.0.1. Nginx for globalorbit.us proxies here.
 *
 * Process name: globalorbitusa
 * Port: 3035
 */
module.exports = {
  apps: [
    {
      name: "globalorbitusa",
      cwd: "/srv/apps/globalorbitusa",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3035 -H 127.0.0.1",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3035",
        HOSTNAME: "127.0.0.1",
        UPLOAD_DIR: "/data/globalorbitusa/uploads",
      },
    },
  ],
};
