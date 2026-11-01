/**
 * Public route inventory for sitemap generation and SEO audits.
 * Indexable routes only — excludes admin, orbit app shell, API, and noindex pages.
 */
import { SERVICE_CATALOG } from "@/lib/content/services";
import {
  ORBIT_LANDINGS,
  ORBIT_PACKAGES,
  ORBIT_SERVICE_PAGES,
  ORBIT_SOFTWARE,
} from "@/lib/orbit/catalog";
import { listSeoDefaultPaths } from "@/lib/seo-page-defaults";
import { localLandingPaths } from "@/lib/local-landings";

export type RouteRecord = {
  path: string;
  kind: "static" | "service" | "landing" | "package" | "software" | "legacy-services" | "blog" | "career";
};

const STATIC_CORE = [
  "/",
  "/about",
  "/contact",
  "/projects",
  "/services",
  "/orbit-software",
  "/orbit-software/web-apps",
  "/orbit-software/android-apps",
  "/orbit-software/ios-apps",
  "/packages",
  "/blogs",
  "/careers",
  "/studio",
  "/inside-orbit",
  "/privacy-policy",
  "/terms-and-conditions",
] as const;

export function uniqueSoftwareHrefs(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of ORBIT_SOFTWARE) {
    if (seen.has(item.href)) continue;
    seen.add(item.href);
    out.push(item.href);
  }
  return out;
}

/** All paths that should appear in sitemap when indexable (careers/blog slugs added at runtime). */
export function listInventoryPaths(): RouteRecord[] {
  const records: RouteRecord[] = [];
  const add = (path: string, kind: RouteRecord["kind"]) => {
    if (!path.startsWith("/")) return;
    records.push({ path, kind });
  };

  for (const path of STATIC_CORE) add(path, "static");
  for (const path of listSeoDefaultPaths()) {
    if (!records.some((r) => r.path === path)) {
      add(path, "static");
    }
  }
  for (const item of ORBIT_SERVICE_PAGES) add(item.href, "service");
  for (const path of localLandingPaths()) add(path, "landing");
  for (const item of ORBIT_LANDINGS) add(item.href, "landing");
  for (const item of ORBIT_PACKAGES) add(item.href, "package");
  for (const href of uniqueSoftwareHrefs()) add(href, "software");
  for (const svc of SERVICE_CATALOG) add(`/services/${svc.slug}`, "legacy-services");

  const byPath = new Map<string, RouteRecord>();
  for (const r of records) byPath.set(r.path, r);
  return [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path));
}

export function listInventoryPathStrings(): string[] {
  return listInventoryPaths().map((r) => r.path);
}
