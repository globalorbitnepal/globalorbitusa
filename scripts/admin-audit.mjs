#!/usr/bin/env node
/**
 * Deep admin audit: logs in, then round-trips every /admin save endpoint
 * (GET → POST same payload) and reports non-2xx results.
 *
 * Usage: node scripts/admin-audit.mjs [baseUrl]
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

const BASE = (process.argv[2] || "http://127.0.0.1:3035").replace(/\/$/, "");

/** GET path → POST path (null POST = GET only health check). */
const ENDPOINTS = [
  { get: "/api/orbit/hero", post: "/api/orbit/hero" },
  { get: "/api/orbit/need", post: "/api/orbit/need" },
  { get: "/api/orbit/work", post: "/api/orbit/work" },
  { get: "/api/orbit/software", post: "/api/orbit/software" },
  { get: "/api/orbit/about", post: "/api/orbit/about" },
  { get: "/api/orbit/careers", post: "/api/orbit/careers" },
  { get: "/api/orbit/projects", post: "/api/orbit/projects" },
  { get: "/api/orbit/home-surface", post: "/api/orbit/home-surface" },
  { get: "/api/orbit/footer", post: "/api/orbit/footer" },
  { get: "/api/orbit/chrome", post: "/api/orbit/chrome" },
  { get: "/api/orbit/page-seo", post: "/api/orbit/page-seo" },
  { get: "/api/orbit/blogs", post: "/api/orbit/blogs" },
  { get: "/api/orbit/custom-apps?slug=web-apps", post: "/api/orbit/custom-apps?slug=web-apps" },
  { get: "/api/orbit/custom-apps?slug=android-apps", post: "/api/orbit/custom-apps?slug=android-apps" },
  { get: "/api/orbit/custom-apps?slug=ios-apps", post: "/api/orbit/custom-apps?slug=ios-apps" },
  { get: "/api/orbit/website-development", post: "/api/orbit/website-development" },
  { get: "/api/orbit/inquiries", post: null },
  { get: "/api/orbit/appointments", post: null },
  { get: "/api/orbit/media", post: null },
];

const results = [];
function record(name, ok, detail) {
  results.push({ name, ok, detail });
  const tag = ok ? "PASS" : "FAIL";
  console.log(`${tag} ${name}${detail ? ` — ${detail}` : ""}`);
}

/** Pull the single meaningful payload object out of a GET response. */
function extractPayload(data) {
  if (!data || typeof data !== "object") return null;
  if (Array.isArray(data.pages)) return { pages: data.pages };
  const candidates = [
    "config",
    "footer",
    "chrome",
    "need",
    "work",
    "software",
    "about",
    "careers",
    "projects",
    "surface",
    "hero",
  ];
  for (const key of candidates) {
    if (data[key] && typeof data[key] === "object") return data[key];
  }
  // Most /api/orbit/* GET routes return the config object directly.
  if (Array.isArray(data.posts) && data.categories) return data;
  if (Object.keys(data).length > 0) return data;
  return null;
}

async function main() {
  const user = env.ORBIT_EDITOR_USERNAME || "";
  const pass = env.ORBIT_EDITOR_PASSWORD || "";
  if (!pass) {
    console.error("FAIL missing ORBIT_EDITOR_PASSWORD in .env");
    process.exit(1);
  }

  const login = await fetch(`${BASE}/api/orbit/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: pass, remember: true }),
  });
  if (!login.ok) {
    console.error(`FAIL login — ${login.status}`);
    process.exit(1);
  }
  const cookie = (login.headers.getSetCookie?.() ?? []).map((c) => c.split(";")[0]).join("; ");
  console.log(`PASS login\n`);

  for (const endpoint of ENDPOINTS) {
    const label = endpoint.get.replace("/api/orbit/", "");
    const getRes = await fetch(`${BASE}${endpoint.get}`, { headers: { cookie } });
    if (!getRes.ok) {
      record(`GET ${label}`, false, `status ${getRes.status}`);
      continue;
    }
    const data = await getRes.json().catch(() => null);
    record(`GET ${label}`, true);

    if (!endpoint.post) continue;

    const payload = extractPayload(data);
    if (!payload) {
      record(`POST ${label}`, false, "could not extract payload from GET");
      continue;
    }

    const postRes = await fetch(`${BASE}${endpoint.post}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie },
      body: JSON.stringify(payload),
    });
    const text = await postRes.text().catch(() => "");
    record(`POST ${label}`, postRes.ok, postRes.ok ? "" : `${postRes.status} ${text.slice(0, 160)}`);
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  if (failed.length) {
    console.log("\nFailures:");
    for (const f of failed) console.log(` - ${f.name}: ${f.detail}`);
    process.exit(1);
  }
}

await main();
