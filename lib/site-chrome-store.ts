import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getAppEnv } from "@/lib/env";
import { FALLBACK_SITE } from "@/lib/site";

export type SiteChrome = {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  footerTagline: string;
  /** Optional header/footer logo override (uploaded via admin). */
  headerLogoSrc?: string;
};

export const DEFAULT_SITE_CHROME: SiteChrome = {
  companyName: FALLBACK_SITE.companyName,
  tagline: FALLBACK_SITE.tagline,
  email: FALLBACK_SITE.email,
  phone: FALLBACK_SITE.phone,
  address: FALLBACK_SITE.address,
  defaultSeoTitle: FALLBACK_SITE.defaultSeoTitle,
  defaultSeoDescription: FALLBACK_SITE.defaultSeoDescription,
  footerTagline: "Studios in the United States, India, and Nepal",
};

function chromePath() {
  return path.join(path.dirname(getAppEnv().uploadDir), "site-chrome.json");
}

export async function getSiteChrome(): Promise<SiteChrome | null> {
  try {
    const raw = await readFile(chromePath(), "utf8");
    const data = JSON.parse(raw) as Partial<SiteChrome>;
    return { ...DEFAULT_SITE_CHROME, ...data };
  } catch {
    return null;
  }
}

export async function saveSiteChrome(next: SiteChrome) {
  const file = chromePath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(next, null, 2)}\n`, "utf8");
}
