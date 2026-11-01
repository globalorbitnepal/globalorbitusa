/**
 * Live SEO crawl against sitemap (or BASE_URL).
 * Usage: BASE_URL=https://globalorbit.us node scripts/audit-seo-live.mjs
 * Writes reports/seo-live-crawl.json and prints a severity summary.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BASE = (process.env.BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://globalorbit.us").replace(
  /\/$/,
  "",
);
const INTENDED_APEX = "https://globalorbit.us";

function abs(href, base = BASE) {
  try {
    return new URL(href, base).href;
  } catch {
    return null;
  }
}

function textBetween(html, startRe, endRe) {
  const m = html.match(startRe);
  if (!m) return null;
  const from = m.index + m[0].length;
  const rest = html.slice(from);
  const end = rest.search(endRe);
  return (end >= 0 ? rest.slice(0, end) : rest).replace(/\s+/g, " ").trim();
}

function attr(html, name) {
  const re = new RegExp(
    `(?:name|property|rel)=["']${name}["'][^>]*content=["']([^"']*)["']|content=["']([^"']*)["'][^>]*(?:name|property|rel)=["']${name}["']`,
    "i",
  );
  const m = html.match(re);
  return m ? m[1] || m[2] || null : null;
}

function canonical(html) {
  const m = html.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  return m ? m[1] || m[2] : null;
}

function h1Count(html) {
  const matches = html.match(/<h1\b[^>]*>/gi);
  return matches ? matches.length : 0;
}

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "manual",
    headers: { "user-agent": "GlobalOrbit-SEO-Audit/1.0" },
  });
  const status = res.status;
  const location = res.headers.get("location");
  let body = "";
  if (status >= 200 && status < 400 && !location) {
    body = await res.text();
  } else if (status >= 200 && status < 300) {
    body = await res.text();
  }
  return { status, location, body, headers: Object.fromEntries(res.headers.entries()) };
}

async function follow(url, max = 5) {
  let current = url;
  const chain = [];
  for (let i = 0; i < max; i++) {
    const r = await fetchText(current);
    chain.push({ url: current, status: r.status, location: r.location });
    if (r.status >= 300 && r.status < 400 && r.location) {
      current = abs(r.location, current);
      continue;
    }
    return { ...r, finalUrl: current, chain };
  }
  return { status: 0, location: null, body: "", headers: {}, finalUrl: current, chain };
}

function parseSitemapLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const issues = [];
  const pages = [];
  const titleSeen = new Map();
  const descSeen = new Map();

  const robots = await follow(`${BASE}/robots.txt`);
  if (robots.status !== 200) {
    issues.push({ severity: "Critical", code: "robots_http", detail: `robots.txt HTTP ${robots.status}` });
  } else {
    if (/Disallow:\s*\/\s*$/m.test(robots.body) && !/Allow:\s*\//.test(robots.body)) {
      issues.push({ severity: "Critical", code: "robots_block_all", detail: "robots.txt appears to disallow all" });
    }
    if (!robots.body.includes("Sitemap:")) {
      issues.push({ severity: "High", code: "robots_no_sitemap", detail: "robots.txt missing Sitemap directive" });
    }
    if (robots.body.includes(INTENDED_APEX) && BASE.includes("arnav.")) {
      issues.push({
        severity: "High",
        code: "robots_apex_premature",
        detail: "Staging host robots references apex domain before cutover",
      });
    }
  }

  const sm = await follow(`${BASE}/sitemap.xml`);
  if (sm.status !== 200) {
    issues.push({ severity: "Critical", code: "sitemap_http", detail: `sitemap.xml HTTP ${sm.status}` });
    writeReport({ BASE, issues, pages, robotsOk: robots.status === 200 });
    process.exit(1);
  }

  const locs = parseSitemapLocs(sm.body);
  if (!locs.length) {
    issues.push({ severity: "Critical", code: "sitemap_empty", detail: "No <loc> entries in sitemap" });
  }

  for (const loc of locs) {
    if (!loc.startsWith(BASE)) {
      issues.push({
        severity: "High",
        code: "sitemap_host_mismatch",
        detail: `Sitemap loc host mismatch: ${loc}`,
        url: loc,
      });
    }
    const page = await follow(loc);
    const html = page.body || "";
    const title = textBetween(html, /<title[^>]*>/i, /<\/title>/i);
    const description = attr(html, "description");
    const robotsMeta = attr(html, "robots");
    const canon = canonical(html);
    const ogTitle = attr(html, "og:title");
    const ogUrl = attr(html, "og:url");
    const ogImage = attr(html, "og:image");
    const h1s = h1Count(html);
    const row = {
      url: loc,
      finalUrl: page.finalUrl,
      status: page.status,
      title,
      description,
      canonical: canon,
      robots: robotsMeta,
      ogTitle,
      ogUrl,
      ogImage,
      h1Count: h1s,
      chain: page.chain,
    };
    pages.push(row);

    if (page.status !== 200) {
      issues.push({ severity: "Critical", code: "page_status", detail: `HTTP ${page.status}`, url: loc });
      continue;
    }
    if (!title) issues.push({ severity: "High", code: "missing_title", detail: "Missing <title>", url: loc });
    if (!description) issues.push({ severity: "High", code: "missing_description", detail: "Missing meta description", url: loc });
    if (!canon) issues.push({ severity: "High", code: "missing_canonical", detail: "Missing canonical", url: loc });
    if (canon && !canon.startsWith(BASE) && !canon.startsWith(INTENDED_APEX)) {
      issues.push({ severity: "High", code: "canonical_host", detail: `Unexpected canonical host: ${canon}`, url: loc });
    }
    if (robotsMeta && /noindex/i.test(robotsMeta)) {
      issues.push({ severity: "High", code: "noindex_in_sitemap", detail: `noindex but in sitemap: ${robotsMeta}`, url: loc });
    }
    if (h1s === 0) issues.push({ severity: "Medium", code: "missing_h1", detail: "No H1 found", url: loc });
    if (h1s > 1) issues.push({ severity: "Low", code: "multiple_h1", detail: `${h1s} H1 elements`, url: loc });
    if (!ogTitle) issues.push({ severity: "Medium", code: "missing_og_title", detail: "Missing og:title", url: loc });
    if (!ogImage) issues.push({ severity: "Medium", code: "missing_og_image", detail: "Missing og:image", url: loc });
    if (title) {
      const list = titleSeen.get(title) || [];
      list.push(loc);
      titleSeen.set(title, list);
    }
    if (description) {
      const list = descSeen.get(description) || [];
      list.push(loc);
      descSeen.set(description, list);
    }
  }

  for (const [title, urls] of titleSeen) {
    if (urls.length > 1) {
      issues.push({
        severity: "High",
        code: "duplicate_title",
        detail: `Duplicate title on ${urls.length} URLs: ${title}`,
        url: urls.join(" | "),
      });
    }
  }
  for (const [descriptionText, urls] of descSeen) {
    if (urls.length > 1) {
      issues.push({
        severity: "Medium",
        code: "duplicate_description",
        detail: `Duplicate description on ${urls.length} URLs (${descriptionText.slice(0, 80)}…)`,
        url: urls.join(" | "),
      });
    }
  }

  const report = writeReport({
    BASE,
    intendedApex: INTENDED_APEX,
    crawledAt: new Date().toISOString(),
    sitemapCount: locs.length,
    robotsOk: robots.status === 200,
    robotsSnippet: (robots.body || "").slice(0, 500),
    issues,
    pages,
  });

  const bySev = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  for (const i of issues) bySev[i.severity] = (bySev[i.severity] || 0) + 1;
  console.log(`Audited ${pages.length} sitemap URLs against ${BASE}`);
  console.log(`Issues: Critical=${bySev.Critical||0} High=${bySev.High||0} Medium=${bySev.Medium||0} Low=${bySev.Low||0}`);
  console.log(`Report: ${report}`);
  if ((bySev.Critical || 0) > 0) process.exit(1);
}

function writeReport(payload) {
  const dir = path.join(root, "reports");
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "seo-live-crawl.json");
  writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`);
  return file;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
