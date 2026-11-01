/** Bump when replacing files under public/brand or public/icons (cache bust). */
export const BRAND_ASSET_VERSION = "20261101v4";

export const BRAND_LOGO_PRIMARY = "/brand/logo-official-gold.png";
export const BRAND_LOGO_ADMIN = "/brand/logo-admin-gold.png";

export function brandAssetUrl(path: string): string {
  const base = path.split("?")[0]?.trim() || BRAND_LOGO_PRIMARY;
  return `${base}?v=${BRAND_ASSET_VERSION}`;
}
