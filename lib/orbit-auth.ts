import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { contentFile } from "@/lib/content-dir";

const COOKIE = "orbit_editor";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const MIN_PASSWORD_LENGTH = 10;

type AuthRecord = {
  salt?: string;
  hash?: string;
  /** Incremented on every password change; invalidates older session tokens. */
  sessionEpoch?: number;
  updatedAt?: string;
};

function authFile() {
  return contentFile("orbit-auth.json");
}

async function readAuthRecord(): Promise<AuthRecord | null> {
  try {
    const raw = await readFile(authFile(), "utf8");
    const data = JSON.parse(raw) as AuthRecord;
    return data && typeof data === "object" ? data : null;
  } catch {
    return null;
  }
}

async function writeAuthRecord(record: AuthRecord) {
  const file = authFile();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(record)}\n`, { encoding: "utf8", mode: 0o600 });
}

function envPassword(): string | null {
  const value = process.env.ORBIT_EDITOR_PASSWORD?.trim();
  if (!value || value.length < 4) return null;
  return value;
}

function envUsername(): string | null {
  return process.env.ORBIT_EDITOR_USERNAME?.trim() || null;
}

/**
 * HMAC signing secret.
 *
 * The edge middleware verifies the same signature, and edge runtimes cannot read
 * the content store, so the environment key must be the single source of truth.
 * Token invalidation on password change therefore uses `sessionEpoch` instead of
 * rotating this key.
 */
function sessionSecret(): string | null {
  const fromEnv = process.env.ORBIT_EDITOR_KEY?.trim();
  if (fromEnv && fromEnv.length >= 16) return fromEnv;
  if (process.env.NODE_ENV === "production") return null;
  return "globalorbit-usa-dev-editor-key";
}

function safeStringEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

function hashPassword(password: string, salt: string) {
  return scryptSync(password, salt, 32).toString("hex");
}

export async function hasOrbitPassword() {
  if (envPassword()) return true;
  const record = await readAuthRecord();
  return Boolean(record?.hash && record?.salt);
}

export function passwordPolicyError(password: string): string | null {
  // The bootstrap env password is trusted even if it predates this policy.
  if (envPassword() && safeStringEqual(password, envPassword() as string)) return null;
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  const classes = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((rule) => rule.test(password)).length;
  if (classes < 3) {
    return "Mix upper case, lower case, numbers, or a symbol.";
  }
  if (/^(password|admin|globalorbit|qwerty|letmein)/i.test(password)) {
    return "Choose a password that is not a common word or product name.";
  }
  return null;
}

export async function setOrbitPassword(password: string) {
  const policyError = passwordPolicyError(password);
  if (policyError) throw new Error(policyError);
  const salt = randomBytes(16).toString("hex");
  const hash = hashPassword(password, salt);
  const existing = await readAuthRecord();
  await writeAuthRecord({
    salt,
    hash,
    // Bumping the epoch invalidates every previously issued admin session.
    sessionEpoch: (existing?.sessionEpoch ?? 0) + 1,
    updatedAt: new Date().toISOString(),
  });
}

export async function verifyOrbitPassword(password: string) {
  const record = await readAuthRecord();
  if (record?.salt && record?.hash) {
    // A password set from the console wins over the bootstrap env value.
    const next = scryptSync(password, record.salt, 32);
    const prev = Buffer.from(record.hash, "hex");
    return next.length === prev.length && timingSafeEqual(next, prev);
  }
  const fromEnv = envPassword();
  if (fromEnv) return safeStringEqual(password, fromEnv);
  return false;
}

export async function verifyOrbitLogin(username: string, password: string) {
  const requiredUser = envUsername();
  if (requiredUser && !safeStringEqual(username.trim(), requiredUser)) {
    return false;
  }
  return verifyOrbitPassword(password);
}

/** Change the password after proving the current one. Rotates session epoch. */
export async function changeOrbitPassword(currentPassword: string, nextPassword: string) {
  const verified = await verifyOrbitPassword(currentPassword);
  if (!verified) return { ok: false as const, error: "Current password is incorrect." };
  const policyError = passwordPolicyError(nextPassword);
  if (policyError) return { ok: false as const, error: policyError };
  if (safeStringEqual(currentPassword, nextPassword)) {
    return { ok: false as const, error: "New password must be different from the current one." };
  }
  await setOrbitPassword(nextPassword);
  return { ok: true as const };
}

function hmacMatches(value: string, mac: string, secret: string) {
  const expected = sign(value, secret);
  const left = Buffer.from(expected);
  const right = Buffer.from(mac);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

function parseToken(token: string): { issuedAt: number; epoch: number } | null {
  const [value] = token.split(".");
  if (!value?.startsWith("ok:")) return null;
  const [, issuedAtRaw, epochRaw] = value.split(":");
  const issuedAt = Number(issuedAtRaw);
  const epoch = Number(epochRaw ?? 0);
  if (!Number.isFinite(issuedAt) || !Number.isFinite(epoch)) return null;
  return { issuedAt, epoch };
}

export async function isOrbitAuthed() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return false;
  const [value, mac] = token.split(".");
  if (!value || !mac) return false;
  const secret = sessionSecret();
  if (!secret) return false;
  if (!hmacMatches(value, mac, secret)) return false;

  const parsed = parseToken(token);
  if (!parsed) return false;
  const age = Date.now() - parsed.issuedAt;
  if (age < 0 || age > SESSION_TTL_MS) return false;

  const record = await readAuthRecord();
  const currentEpoch = record?.sessionEpoch ?? 0;
  if (parsed.epoch !== currentEpoch) return false;
  return true;
}

export async function setOrbitSession(options?: { remember?: boolean }) {
  const secret = sessionSecret();
  if (!secret) throw new Error("Admin session secret is not configured");
  const record = await readAuthRecord();
  const epoch = record?.sessionEpoch ?? 0;
  const jar = await cookies();
  const value = `ok:${Date.now()}:${epoch}`;
  const remember = options?.remember !== false;
  jar.set(COOKIE, `${value}.${sign(value, secret)}`, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    ...(remember ? { maxAge: SESSION_TTL_MS / 1000 } : {}),
  });
}

export async function clearOrbitSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}
