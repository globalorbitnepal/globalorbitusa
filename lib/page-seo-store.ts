import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { contentFile } from "@/lib/content-dir";
import { getPageSeoDefaults, listSeoDefaultPaths } from "@/lib/seo-page-defaults";

export type PageSeo = {
  path: string;
  label: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  tags: string;
  focusKeyword: string;
  canonical: string;
  robotsIndex: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
};

export function normalizePageSeo(page: PageSeo, incoming?: Partial<PageSeo>): PageSeo {
  return {
    ...page,
    seoTitle: String(incoming?.seoTitle ?? page.seoTitle ?? "").trim(),
    seoDescription: String(incoming?.seoDescription ?? page.seoDescription ?? "").trim(),
    keywords: String(incoming?.keywords ?? page.keywords ?? "").trim(),
    tags: String(incoming?.tags ?? page.tags ?? "").trim(),
    focusKeyword: String(incoming?.focusKeyword ?? page.focusKeyword ?? "").trim(),
    canonical: String(incoming?.canonical ?? page.canonical ?? "").trim(),
    robotsIndex: incoming?.robotsIndex ?? page.robotsIndex ?? true,
    ogTitle: String(incoming?.ogTitle ?? page.ogTitle ?? "").trim(),
    ogDescription: String(incoming?.ogDescription ?? page.ogDescription ?? "").trim(),
    ogImage: String(incoming?.ogImage ?? page.ogImage ?? "").trim(),
  };
}

function labelForPath(pathname: string): string {
  if (pathname === "/") return "Home";
  const d = getPageSeoDefaults(pathname);
  if (d?.title) {
    const short = d.title.split("·")[0]?.trim();
    if (short) return short.slice(0, 48);
  }
  return pathname.replace(/^\//, "").replace(/\//g, " · ") || "Page";
}

function buildDefaultPageSeo(pathname: string): PageSeo {
  const d = getPageSeoDefaults(pathname);
  const robotsIndex = pathname === "/demo" ? false : true;
  return {
    path: pathname,
    label: labelForPath(pathname),
    seoTitle: d?.title ?? "",
    seoDescription: d?.description ?? "",
    keywords: d?.keywords.join(", ") ?? "",
    tags: "",
    focusKeyword: d?.focusKeyword ?? "",
    canonical: "",
    robotsIndex,
    ogTitle: d?.title ?? "",
    ogDescription: d?.description ?? "",
    ogImage: "",
  };
}

export const DEFAULT_PAGE_SEO: PageSeo[] = listSeoDefaultPaths().map((pathname) =>
  normalizePageSeo(buildDefaultPageSeo(pathname)),
);

function seoPath() {
  return contentFile("page-seo.json");
}

export async function getPageSeoList(): Promise<PageSeo[]> {
  try {
    const raw = await readFile(seoPath(), "utf8");
    const data = JSON.parse(raw) as { pages?: PageSeo[] };
    if (Array.isArray(data.pages) && data.pages.length) {
      const map = new Map(data.pages.map((page) => [page.path, page]));
      return DEFAULT_PAGE_SEO.map((page) => normalizePageSeo(page, map.get(page.path)));
    }
  } catch {
    /* defaults */
  }
  return DEFAULT_PAGE_SEO;
}

export async function getPageSeo(pathname: string): Promise<PageSeo | null> {
  const list = await getPageSeoList();
  const found = list.find((page) => page.path === pathname);
  if (found) return found;
  const d = getPageSeoDefaults(pathname);
  if (!d) return null;
  return normalizePageSeo(buildDefaultPageSeo(pathname));
}

/**
 * Admin overrides only (page-seo.json). Returns null when the file is absent or
 * the path has no stored row — so page-level generateMetadata fallbacks and
 * seo-page-defaults can apply without synthetic defaults masking them.
 */
export async function getPersistedPageSeo(pathname: string): Promise<Partial<PageSeo> | null> {
  try {
    const raw = await readFile(seoPath(), "utf8");
    const data = JSON.parse(raw) as { pages?: PageSeo[] };
    if (!Array.isArray(data.pages) || !data.pages.length) return null;
    const found = data.pages.find((page) => page.path === pathname);
    return found ?? null;
  } catch {
    return null;
  }
}

export async function savePageSeoList(pages: PageSeo[]) {
  const file = seoPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify({ pages }, null, 2)}\n`, "utf8");
}
