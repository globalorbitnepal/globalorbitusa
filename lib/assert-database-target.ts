const EXPECTED_DB = "globalorbitusa_db";
const EXPECTED_USER = "globalorbitusa_app";
const BLOCKED_DB_FRAGMENTS = ["hostingbeyond"];
const BLOCKED_USERS = ["hostingbeyond_user", "hostingbeyond"];

function fail(message: string): never {
  throw new Error(message);
}

/**
 * Ensures DATABASE_URL targets only the GlobalOrbitUSA database/role.
 * Never logs the URL, password, or query string.
 */
export function assertDatabaseTarget(databaseUrl: string | undefined): URL {
  if (!databaseUrl) {
    fail("DATABASE_URL is missing");
  }

  let parsed: URL;
  try {
    parsed = new URL(databaseUrl);
  } catch {
    fail("DATABASE_URL is not a valid URL");
  }

  if (parsed.protocol !== "postgresql:" && parsed.protocol !== "postgres:") {
    fail("DATABASE_URL must use the postgresql protocol");
  }

  const host = parsed.hostname.toLowerCase();
  if (host !== "127.0.0.1" && host !== "localhost") {
    fail("DATABASE_URL host must be 127.0.0.1 or localhost");
  }

  const dbName = decodeURIComponent(parsed.pathname.replace(/^\//, "")).split("/")[0];
  const user = decodeURIComponent(parsed.username);

  if (!dbName) {
    fail("DATABASE_URL must include a database name");
  }

  const dbLower = dbName.toLowerCase();
  const userLower = user.toLowerCase();

  if (BLOCKED_DB_FRAGMENTS.some((fragment) => dbLower.includes(fragment))) {
    fail("DATABASE_URL database name is not allowed for GlobalOrbitUSA");
  }

  if (BLOCKED_USERS.includes(userLower) || userLower.includes("hostingbeyond")) {
    fail("DATABASE_URL role is not allowed for GlobalOrbitUSA");
  }

  if (dbName !== EXPECTED_DB) {
    fail(`DATABASE_URL database must be ${EXPECTED_DB}`);
  }

  if (user !== EXPECTED_USER) {
    fail(`DATABASE_URL role must be ${EXPECTED_USER}`);
  }

  return parsed;
}
