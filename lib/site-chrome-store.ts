import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { contentFile } from "@/lib/content-dir";
import { DEFAULT_SITE_CHROME } from "@/lib/chrome-defaults";
import { phoneToWhatsApp } from "@/lib/contact-info";
import { clampLogoWidth } from "@/lib/logo-size";
import type { SiteChrome } from "@/lib/chrome-types";

export type { SiteChrome } from "@/lib/chrome-types";
export { DEFAULT_SITE_CHROME } from "@/lib/chrome-defaults";
export { LOGO_WIDTH_DEFAULT, LOGO_WIDTH_MAX, LOGO_WIDTH_MIN, clampLogoWidth } from "@/lib/logo-size";
export { chromePhoneHref } from "@/lib/chrome-defaults";


export function normalizeSiteChrome(input: Partial<SiteChrome> | null | undefined): SiteChrome {
  const merged = { ...DEFAULT_SITE_CHROME, ...(input ?? {}) } as SiteChrome;
  const phone = merged.phone?.trim() || DEFAULT_SITE_CHROME.phone;
  return {
    ...merged,
    phone,
    logoWidth: clampLogoWidth(merged.logoWidth),
    email: merged.email?.trim() || DEFAULT_SITE_CHROME.email,
    whatsapp: merged.whatsapp?.trim() || phone,
    salesEmail: merged.salesEmail?.trim() || DEFAULT_SITE_CHROME.salesEmail,
    whatsappHref:
      typeof merged.whatsappHref === "string" && merged.whatsappHref.trim()
        ? merged.whatsappHref.trim()
        : phoneToWhatsApp(merged.whatsapp || phone),
  };
}


function chromePath() {
  return contentFile("site-chrome.json");
}

export async function getSiteChrome(): Promise<SiteChrome | null> {
  try {
    const raw = await readFile(chromePath(), "utf8");
    const data = JSON.parse(raw) as Partial<SiteChrome>;
    return normalizeSiteChrome(data);
  } catch {
    return null;
  }
}

export async function saveSiteChrome(next: SiteChrome) {
  const file = chromePath();
  await mkdir(path.dirname(file), { recursive: true });
  const safe = normalizeSiteChrome(next);
  await writeFile(file, `${JSON.stringify(safe, null, 2)}\n`, "utf8");
  return safe;
}
