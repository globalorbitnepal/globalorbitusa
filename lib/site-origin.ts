/**
 * Canonical public site origin.
 *
 * Production: https://globalorbit.us (DNS cutover complete)
 * Legacy staging hostname arnav.theglobalorbit.com → 301 to apex (nginx).
 *
 * Set NEXT_PUBLIC_SITE_URL in the server .env for the environment you are
 * serving. Never hardcode a hostname in page metadata or JSON-LD — use
 * SITE_ORIGIN / absoluteUrl() instead.
 */
const FALLBACK_PUBLIC_ORIGIN = "https://globalorbit.us";
const INTENDED_PRODUCTION_ORIGIN = "https://globalorbit.us";
const LEGACY_STAGING_ORIGIN = "https://arnav.theglobalorbit.com";

function normalizeOrigin(value: string | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim().replace(/\/$/, "");
  if (!/^https?:\/\//i.test(trimmed)) return null;
  return trimmed;
}

export const SITE_ORIGIN =
  normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL) ?? FALLBACK_PUBLIC_ORIGIN;

/** Production apex (same as default fallback after cutover). */
export const INTENDED_PRODUCTION_SITE_ORIGIN = INTENDED_PRODUCTION_ORIGIN;

/** Former staging URL; nginx redirects to apex. */
export const LEGACY_STAGING_SITE_ORIGIN = LEGACY_STAGING_ORIGIN;

/** True when this build is configured for the final apex domain. */
export function isProductionApexOrigin(): boolean {
  return SITE_ORIGIN === INTENDED_PRODUCTION_ORIGIN;
}

/** Default Open Graph / Twitter image (absolute path on site). */
export const DEFAULT_OG_IMAGE_PATH = "/brand/og-default.jpg";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
