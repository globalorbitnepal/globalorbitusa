/** Bump when replacing files under public/brand or public/icons (cache bust). */
export const BRAND_ASSET_VERSION = "20261113logo2";

export const BRAND_LOGO_PRIMARY = "/brand/logo-hd-gold.png";
export const BRAND_LOGO_ADMIN = "/brand/logo-hd-gold.png";
export const BRAND_LOGO_EMBLEM = "/brand/logo-hd-emblem.png";

export function brandAssetUrl(path: string): string {
  const base = path.split("?")[0]?.trim() || BRAND_LOGO_PRIMARY;
  return `${base}?v=${BRAND_ASSET_VERSION}`;
}
