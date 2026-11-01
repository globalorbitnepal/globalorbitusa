import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { contentFile } from "@/lib/content-dir";
import { USA_PHONE_DISPLAY, USA_SALES_EMAIL, USA_SUPPORT_EMAIL, phoneToTel, phoneToWhatsApp } from "@/lib/contact-info";
import { FALLBACK_SITE } from "@/lib/site";

export type SiteChrome = {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  /** WhatsApp display label; falls back to the primary phone. */
  whatsapp?: string;
  salesEmail?: string;
  address: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  footerTagline: string;
  /** Optional header/footer logo override (uploaded via admin). */
  headerLogoSrc?: string;
  /** Optional WhatsApp floating button override; empty string hides it. */
  whatsappHref?: string;
};

export const DEFAULT_SITE_CHROME: SiteChrome = {
  companyName: FALLBACK_SITE.companyName,
  tagline: FALLBACK_SITE.tagline,
  email: USA_SUPPORT_EMAIL,
  phone: USA_PHONE_DISPLAY,
  whatsapp: USA_PHONE_DISPLAY,
  salesEmail: USA_SALES_EMAIL,
  address: FALLBACK_SITE.address,
  defaultSeoTitle: FALLBACK_SITE.defaultSeoTitle,
  defaultSeoDescription: FALLBACK_SITE.defaultSeoDescription,
  footerTagline: "Studios in the United States, India, and Nepal",
  whatsappHref: phoneToWhatsApp(USA_PHONE_DISPLAY),
};

/** Normalise a stored record so old files (missing new keys) stay usable. */
export function normalizeSiteChrome(input: Partial<SiteChrome> | null | undefined): SiteChrome {
  const merged = { ...DEFAULT_SITE_CHROME, ...(input ?? {}) } as SiteChrome;
  const phone = merged.phone?.trim() || DEFAULT_SITE_CHROME.phone;
  return {
    ...merged,
    phone,
    email: merged.email?.trim() || DEFAULT_SITE_CHROME.email,
    whatsapp: merged.whatsapp?.trim() || phone,
    salesEmail: merged.salesEmail?.trim() || DEFAULT_SITE_CHROME.salesEmail,
    whatsappHref:
      typeof merged.whatsappHref === "string" && merged.whatsappHref.trim()
        ? merged.whatsappHref.trim()
        : phoneToWhatsApp(merged.whatsapp || phone),
  };
}

/** Derived `tel:` target for the configured phone. */
export function chromePhoneHref(chrome: SiteChrome) {
  return phoneToTel(chrome.phone);
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
