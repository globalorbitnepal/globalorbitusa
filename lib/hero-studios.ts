export type HeroStudioLocation = {
  code: string;
  label: string;
  city: string;
};

export const DEFAULT_HERO_STUDIOS: HeroStudioLocation[] = [
  { code: "np", label: "USA", city: "United States" },
  { code: "in", label: "India", city: "Delhi (NCR)" },
  { code: "us", label: "USA", city: "United States" },
];

export const DEFAULT_GLOBAL_TAGLINE =
  "Work originates in United States, India, and the United States — not a single-city shop pretending to be global.";

export const DEFAULT_STUDIOS_KICKER = "Working across";

export function parseHeroStudios(raw: unknown): HeroStudioLocation[] {
  if (!Array.isArray(raw) || raw.length === 0) {
    return DEFAULT_HERO_STUDIOS;
  }
  const parsed: HeroStudioLocation[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const row = item as Record<string, unknown>;
    const code = typeof row.code === "string" ? row.code.trim().toLowerCase().replace(/[^a-z]/g, "") : "";
    const label = typeof row.label === "string" ? row.label.trim() : "";
    const city = typeof row.city === "string" ? row.city.trim() : "";
    if (!code || !label) continue;
    parsed.push({ code, label, city: city || label });
  }
  return parsed.length >= 1 ? parsed.slice(0, 6) : DEFAULT_HERO_STUDIOS;
}
