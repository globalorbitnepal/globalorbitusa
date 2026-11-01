/** High-intent USA + digital agency keywords (titles, meta, on-page copy). */
export const USA_AGENCY_KEYWORDS = [
  "web developer usa",
  "website development usa",
  "web development company united states",
  "website design usa",
  "seo services usa",
  "seo company usa",
  "digital marketing usa",
  "social media marketing usa",
  "facebook ads usa",
  "google ads usa",
  "web application development usa",
  "mobile app development usa",
  "ecommerce website usa",
  "custom software development usa",
  "erp software usa",
  "google ranking usa",
  "local seo usa",
  "hire web developer usa",
  "professional website united states",
  "Global Orbit USA",
] as const;

export function keywordsCsv(extra: string[] = []): string[] {
  const set = new Set<string>([...USA_AGENCY_KEYWORDS, ...extra]);
  return [...set];
}

export function keywordsString(extra: string[] = []): string {
  return keywordsCsv(extra).join(", ");
}
