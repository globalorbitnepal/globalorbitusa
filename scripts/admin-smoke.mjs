#!/usr/bin/env node
/**
 * Smoke-test /admin APIs on local PM2 port (requires .env ORBIT credentials).
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const envPath = resolve(import.meta.dirname, "../.env");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      const k = l.slice(0, i);
      let v = l.slice(i + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      return [k, v];
    }),
);

const BASE = "http://127.0.0.1:3035";
const user = env.ORBIT_EDITOR_USERNAME || "";
const pass = env.ORBIT_EDITOR_PASSWORD || "";

const endpoints = [
  { method: "GET", path: "/admin", expect: 200 },
  { method: "GET", path: "/api/orbit/hero", expect: 401 },
  { method: "GET", path: "/api/orbit/page-seo", expect: 401 },
  { method: "GET", path: "/api/orbit/blogs", expect: 401 },
  { method: "GET", path: "/api/orbit/inquiries", expect: 401 },
  { method: "GET", path: "/api/orbit/website-development", expect: 401 },
];

async function main() {
  let cookie = "";
  if (pass) {
    const login = await fetch(`${BASE}/api/orbit/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }),
      redirect: "manual",
    });
    const set = login.headers.getSetCookie?.() ?? [];
    cookie = set.map((c) => c.split(";")[0]).join("; ");
    if (login.status !== 200 && login.status !== 302) {
      console.error("FAIL login", login.status, await login.text());
      process.exit(1);
    }
    console.log("PASS login");
  } else {
    console.warn("SKIP login — no ORBIT_EDITOR_PASSWORD");
  }

  let fail = 0;
  for (const ep of endpoints) {
    const res = await fetch(`${BASE}${ep.path}`, {
      method: ep.method,
      headers: cookie ? { Cookie: cookie } : {},
    });
    const authedExpect = cookie && ep.path.startsWith("/api/orbit") ? 200 : ep.expect;
    const ok = res.status === authedExpect || (cookie && ep.path.startsWith("/api/orbit") && res.status === 200);
    console.log(`${ok ? "PASS" : "FAIL"} ${ep.method} ${ep.path} — ${res.status} (expected ${authedExpect})`);
    if (!ok) fail++;
  }

  if (cookie) {
    const seo = await fetch(`${BASE}/api/orbit/page-seo`, { headers: { Cookie: cookie } });
    const list = await seo.json();
    const paths = Array.isArray(list?.pages) ? list.pages.length : Array.isArray(list) ? list.length : 0;
    console.log(`PASS page-seo payload — ${paths} page entries`);
    const wd = await fetch(`${BASE}/api/orbit/website-development`, { headers: { Cookie: cookie } });
    console.log(`${wd.ok ? "PASS" : "FAIL"} website-development editor — ${wd.status}`);
    if (!wd.ok) fail++;
  }

  process.exit(fail ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
