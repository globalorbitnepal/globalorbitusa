#!/usr/bin/env node
/**
 * One-off rebrand: Nepal market copy/slugs → USA for globalorbitusa only.
 * Run from repo root: node scripts/rebrand-usa-content.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["lib", "app", "components", "public", "e2e"];
const FILES = ["middleware.ts", "next.config.ts", "public/manifest.webmanifest"];

const SKIP_DIR = new Set(["node_modules", ".next", "deploy", "reports", "docs"]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIR.has(name)) continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (/\.(tsx?|jsx?|mjs|json|webmanifest|css|md)$/.test(name)) out.push(full);
  }
  return out;
}

const files = [...FILES.map((f) => path.join(ROOT, f))];
for (const d of DIRS) walk(path.join(ROOT, d), files);

function transform(text) {
  let s = text;
  // Slugs and URL segments first
  s = s.replace(/-nepal\b/g, "-usa");
  s = s.replace(/-nepali\b/g, "-us");
  // Keywords / identifiers
  s = s.replace(/\bNEPAL_AGENCY_KEYWORDS\b/g, "USA_AGENCY_KEYWORDS");
  s = s.replace(/\bnepali\b/gi, (m) => (m === "Nepali" ? "U.S." : "u.s."));
  s = s.replace(/\bNepal\b/g, "USA");
  s = s.replace(/\bnepal\b/g, "usa");
  s = s.replace(/\bKathmandu\b/g, "United States");
  s = s.replace(/\bkathmandu\b/g, "united states");
  s = s.replace(/\ben_NP\b/g, "en_US");
  s = s.replace(/\ben-NP\b/g, "en-US");
  s = s.replace(/addressCountry: "NP"/g, 'addressCountry: "US"');
  s = s.replace(/"NP"/g, (match, offset, str) => {
    const slice = str.slice(Math.max(0, offset - 40), offset + 10);
    if (/addressCountry|Country/.test(slice)) return '"US"';
    return match;
  });
  // Fix doubled USA from "Global Orbit USA" already ok
  s = s.replace(/USA, India, and the United States/g, "USA, India, and global clients");
  s = s.replace(/United States · India · United States/g, "United States · India · Nepal");
  s = s.replace(/Global Orbit USA Pvt Ltd/g, "Global Orbit Pvt Ltd");
  return s;
}

let changed = 0;
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, "utf8");
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
  }
}
console.log(`rebrand-usa-content: updated ${changed} files`);
