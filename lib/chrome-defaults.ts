/**
 * Default site-wide identity values, safe for client components
 * (no node:fs / server-only imports).
 */
import type { SiteChrome } from "@/lib/chrome-types";
import { USA_PHONE_DISPLAY, USA_SALES_EMAIL, USA_SUPPORT_EMAIL, phoneToTel, phoneToWhatsApp } from "@/lib/contact-info";
import { FALLBACK_SITE } from "@/lib/site";

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
  logoWidth: 240,
  whatsappHref: phoneToWhatsApp(USA_PHONE_DISPLAY),
};

/** Derived `tel:` target for the configured phone. */
export function chromePhoneHref(chrome: SiteChrome) {
  return phoneToTel(chrome.phone);
}
