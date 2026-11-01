/**
 * Logo width bounds shared by the admin UI (client) and the server store.
 * Kept dependency-free so client components never pull in node:fs.
 */
export const LOGO_WIDTH_MIN = 100;
export const LOGO_WIDTH_MAX = 480;
export const LOGO_WIDTH_DEFAULT = 240;

/** Wordmark aspect ratio: 1024 × 341 source asset. */
export const LOGO_ASPECT = 341 / 1024;

export function clampLogoWidth(value: unknown): number {
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num)) return LOGO_WIDTH_DEFAULT;
  return Math.min(LOGO_WIDTH_MAX, Math.max(LOGO_WIDTH_MIN, Math.round(num)));
}

export function logoHeightFor(width: number): number {
  return Math.round(width * LOGO_ASPECT);
}
