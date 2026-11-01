export type ProjectShowcase = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  chromeUrl: string;
  imageSrc: string;
};

export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectsConfig = {
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroTitleAfter: string;
  heroLede: string;
  zoomEyebrow: string;
  zoomTitle: string;
  zoomTitleAccent: string;
  zoomLede: string;
  showcases: ProjectShowcase[];
  stats: ProjectStat[];
  scopeEyebrow: string;
  scopeTitle: string;
  scopeParagraphs: string[];
  scopeBullets: string[];
  ctaTitle: string;
  ctaLede: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export const DEFAULT_PROJECT_SHOWCASES: ProjectShowcase[] = [
  {
    slug: "first-choice-interior",
    title: "First Choice Interior",
    subtitle: "Modular kitchen & interior brand site with consultation-led conversion.",
    category: "Interior · USA",
    chromeUrl: "firstchoiceinterior.com",
    imageSrc: "/brand/projects/demo-first-choice-interior.webp",
  },
  {
    slug: "aakash-bhairab-travels",
    title: "Aakash Bhairab Travels",
    subtitle: "Luxury Himalaya tours with destination search and trust-led hero.",
    category: "Travel & OTA · USA",
    chromeUrl: "aakashbhairab.com",
    imageSrc: "/brand/projects/demo-aakash-bhairab-travels.webp",
  },
  {
    slug: "kaya-healing-spa",
    title: "Kaya Healing Spa",
    subtitle: "Wellness spa experience with service pillars and appointment flow.",
    category: "Hospitality · Spa",
    chromeUrl: "kayaspakathmandu.com",
    imageSrc: "/brand/projects/demo-kaya-spa.webp",
  },
  {
    slug: "marlo-hotels",
    title: "Marlo Hotels",
    subtitle: "Boutique hotel brand with availability bar and premium lobby visuals.",
    category: "Hotel · Hospitality",
    chromeUrl: "marlohotels.com",
    imageSrc: "/brand/projects/demo-marlo-hotels.webp",
  },
  {
    slug: "thamel-spa-wellness",
    title: "Hotel Thamel Park Spa",
    subtitle: "Luxury wellness landing with gold-accent booking paths.",
    category: "Spa · United States",
    chromeUrl: "hotelthamelparkspa.com",
    imageSrc: "/brand/projects/demo-thamel-spa.webp",
  },
  {
    slug: "zen-spa-healing",
    title: "Zen Spa & Healing Center",
    subtitle: "Calm spa brand with dual CTA hero and treatment discovery.",
    category: "Wellness · USA",
    chromeUrl: "zenspahealing.com",
    imageSrc: "/brand/projects/demo-zen-spa.webp",
  },
  {
    slug: "thamel-park-hotel",
    title: "Hotel Thamel Park",
    subtitle: "Full hotel site with integrated booking widget and forest-green UI.",
    category: "Hotel · Thamel",
    chromeUrl: "hotelthamelpark.com",
    imageSrc: "/brand/projects/demo-thamel-park-hotel.webp",
  },
  {
    slug: "ambition-holidays",
    title: "Ambition Holidays",
    subtitle: "Himalaya travel experts with adventure search and review social proof.",
    category: "Trek & Tour · USA",
    chromeUrl: "ambitionholidays.com",
    imageSrc: "/brand/projects/demo-ambition-holidays.webp",
  },
  {
    slug: "summit-seek-himalaya",
    title: "Summit Seek Himalaya",
    subtitle: "Premium expedition brand with journey planner and ethical travel story.",
    category: "Expedition · USA",
    chromeUrl: "summitseekhimalaya.com",
    imageSrc: "/brand/projects/demo-summit-seek.webp",
  },
];

export const DEFAULT_PROJECTS: ProjectsConfig = {
  heroEyebrow: "Portfolio · Global Orbit",
  heroTitleBefore: "Websites & products",
  heroTitleAccent: "built to ship",
  heroTitleAfter: "and scale in production",
  heroLede:
    "Hospitality, travel, spa, interior, and SaaS — nine production launches with Next.js, Node, and SEO baked in. Browse the mosaic, then scroll each case study with live zoom on the preview.",
  zoomEyebrow: "Featured launches",
  zoomTitle: "Case studies",
  zoomTitleAccent: "with scroll zoom",
  zoomLede:
    "Tap a thumbnail to jump, or scroll the list — each browser frame scales and the screenshot zooms as it reaches center screen.",
  showcases: DEFAULT_PROJECT_SHOWCASES,
  stats: [
    { value: "250+", label: "Sites & apps delivered" },
    { value: "15+", label: "Countries served" },
    { value: "9", label: "Featured demos below" },
    { value: "100%", label: "Next.js · Node stack" },
  ],
  scopeEyebrow: "What we deliver",
  scopeTitle: "Beyond the hero screenshot",
  scopeParagraphs: [
    "Every engagement includes technical SEO, analytics, accessible UI, and documentation — not just a pretty homepage. We ship on Next.js and Node so your stack stays modern and hireable.",
    "From hotel booking bars to OTA search, spa appointment flows, and interior consultation funnels, we match category conventions while keeping your brand distinct.",
  ],
  scopeBullets: [
    "Marketing sites, ecommerce, and multi-language hospitality brands",
    "Custom admin, ERP modules, billing, and partner portals",
    "Core Web Vitals, structured data, and local SEO where it matters",
    "Studios in USA, India, and global clients — one engineering bar",
  ],
  ctaTitle: "Planning your next launch?",
  ctaLede: "Share your category, timeline, and reference sites. We will propose a build plan with clear milestones.",
  ctaPrimaryLabel: "Start a project",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "Book Appointment",
  ctaSecondaryHref: "/contact",
};

function parseString(raw: unknown, fallback: string) {
  return typeof raw === "string" && raw.trim() ? raw : fallback;
}

function parseStringArray(raw: unknown, fallback: string[]) {
  if (!Array.isArray(raw)) return fallback;
  const items = raw.map((item) => (typeof item === "string" ? item.trim() : "")).filter(Boolean);
  return items.length ? items : fallback;
}

function parseShowcases(raw: unknown, fallback: ProjectShowcase[]): ProjectShowcase[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      slug: fb.slug,
      title: parseString(data.title, fb.title),
      subtitle: parseString(data.subtitle, fb.subtitle),
      category: parseString(data.category, fb.category),
      chromeUrl: parseString(data.chromeUrl, fb.chromeUrl),
      imageSrc: parseString(data.imageSrc, fb.imageSrc),
    };
  });
}

function parseStats(raw: unknown, fallback: ProjectStat[]): ProjectStat[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      value: parseString(data.value, fb.value),
      label: parseString(data.label, fb.label),
    };
  });
}

export function parseProjectsConfig(raw: unknown): ProjectsConfig {
  const data = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const str = (key: keyof ProjectsConfig, fallback: string) => parseString(data[key], fallback);
  return {
    heroEyebrow: str("heroEyebrow", DEFAULT_PROJECTS.heroEyebrow),
    heroTitleBefore: str("heroTitleBefore", DEFAULT_PROJECTS.heroTitleBefore),
    heroTitleAccent: str("heroTitleAccent", DEFAULT_PROJECTS.heroTitleAccent),
    heroTitleAfter: str("heroTitleAfter", DEFAULT_PROJECTS.heroTitleAfter),
    heroLede: str("heroLede", DEFAULT_PROJECTS.heroLede),
    zoomEyebrow: str("zoomEyebrow", DEFAULT_PROJECTS.zoomEyebrow),
    zoomTitle: str("zoomTitle", DEFAULT_PROJECTS.zoomTitle),
    zoomTitleAccent: str("zoomTitleAccent", DEFAULT_PROJECTS.zoomTitleAccent),
    zoomLede: str("zoomLede", DEFAULT_PROJECTS.zoomLede),
    showcases: parseShowcases(data.showcases, DEFAULT_PROJECTS.showcases),
    stats: parseStats(data.stats, DEFAULT_PROJECTS.stats),
    scopeEyebrow: str("scopeEyebrow", DEFAULT_PROJECTS.scopeEyebrow),
    scopeTitle: str("scopeTitle", DEFAULT_PROJECTS.scopeTitle),
    scopeParagraphs: parseStringArray(data.scopeParagraphs, [...DEFAULT_PROJECTS.scopeParagraphs]),
    scopeBullets: parseStringArray(data.scopeBullets, [...DEFAULT_PROJECTS.scopeBullets]),
    ctaTitle: str("ctaTitle", DEFAULT_PROJECTS.ctaTitle),
    ctaLede: str("ctaLede", DEFAULT_PROJECTS.ctaLede),
    ctaPrimaryLabel: str("ctaPrimaryLabel", DEFAULT_PROJECTS.ctaPrimaryLabel),
    ctaPrimaryHref: str("ctaPrimaryHref", DEFAULT_PROJECTS.ctaPrimaryHref),
    ctaSecondaryLabel: str("ctaSecondaryLabel", DEFAULT_PROJECTS.ctaSecondaryLabel),
    ctaSecondaryHref: str("ctaSecondaryHref", DEFAULT_PROJECTS.ctaSecondaryHref),
  };
}
