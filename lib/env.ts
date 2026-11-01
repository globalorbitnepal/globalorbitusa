import { assertDatabaseTarget } from "@/lib/assert-database-target";

const DEFAULT_PORT = "3001";
const DEFAULT_HOSTNAME = "127.0.0.1";
const DEFAULT_UPLOAD_DIR = "/data/globalorbitusa/uploads";

export type AppEnv = {
  nodeEnv: string;
  port: string;
  hostname: string;
  uploadDir: string;
};

/**
 * Non-secret runtime settings. Never returns DATABASE_URL.
 */
export function getAppEnv(): AppEnv {
  return {
    nodeEnv: process.env.NODE_ENV ?? "development",
    port: process.env.PORT ?? DEFAULT_PORT,
    hostname: process.env.HOSTNAME ?? DEFAULT_HOSTNAME,
    uploadDir: process.env.UPLOAD_DIR ?? DEFAULT_UPLOAD_DIR,
  };
}

/**
 * Validates DATABASE_URL against GlobalOrbitUSA only. Does not log the value.
 */
export function requireDatabaseUrl(): string {
  const parsed = assertDatabaseTarget(process.env.DATABASE_URL);
  return parsed.toString();
}
