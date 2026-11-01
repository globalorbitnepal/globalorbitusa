#!/usr/bin/env node
/**
 * Parses DATABASE_URL (from the environment or a local .env) and confirms it
 * targets only GlobalOrbitUSA. Never prints the URL, password, or .env body.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const EXPECTED_DB = "globalorbitusa_db";
const EXPECTED_USER = "globalorbitusa_app";

function loadDatabaseUrl() {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  const envPath = resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) {
    console.error("DATABASE_TARGET_SKIP: no DATABASE_URL and no local .env (expected until VPS .env is created)");
    process.exit(0);
  }

  const text = readFileSync(envPath, "utf8");
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const match = line.match(/^DATABASE_URL\s*=\s*(.*)$/);
    if (!match) continue;
    let value = match[1].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    return value;
  }

  console.error("DATABASE_TARGET_FAIL: .env exists but DATABASE_URL is missing");
  process.exit(1);
}

const databaseUrl = loadDatabaseUrl();
if (!databaseUrl) {
  process.exit(0);
}

let parsed;
try {
  parsed = new URL(databaseUrl);
} catch {
  console.error("DATABASE_TARGET_FAIL: DATABASE_URL is not a valid URL");
  process.exit(1);
}

const dbName = decodeURIComponent(parsed.pathname.replace(/^\//, "")).split("/")[0];
const user = decodeURIComponent(parsed.username);
const host = parsed.hostname.toLowerCase();

if (parsed.protocol !== "postgresql:" && parsed.protocol !== "postgres:") {
  console.error("DATABASE_TARGET_FAIL: protocol must be postgresql");
  process.exit(1);
}

if (host !== "127.0.0.1" && host !== "localhost") {
  console.error("DATABASE_TARGET_FAIL: host must be 127.0.0.1 or localhost");
  process.exit(1);
}

if (/hostingbeyond/i.test(dbName) || /hostingbeyond/i.test(user)) {
  console.error("DATABASE_TARGET_FAIL: HostingBeyond database or role is not allowed");
  process.exit(1);
}

if (dbName !== EXPECTED_DB) {
  console.error(`DATABASE_TARGET_FAIL: database must be ${EXPECTED_DB}`);
  process.exit(1);
}

if (user !== EXPECTED_USER) {
  console.error(`DATABASE_TARGET_FAIL: role must be ${EXPECTED_USER}`);
  process.exit(1);
}

console.log(`DATABASE_TARGET_OK: role=${EXPECTED_USER} database=${EXPECTED_DB} host=${host}`);
