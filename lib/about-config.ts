export type AboutJourneyItem = {
  year: string;
  title: string;
  body: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

export type AboutTeamRole = {
  role: string;
  specialty: string;
  icon: string;
};

export type AboutValue = {
  title: string;
  body: string;
};

export type AboutStep = {
  title: string;
  body: string;
};

export type AboutRegion = {
  title: string;
  body: string;
};

export type AboutConfig = {
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroTitleAfter: string;
  heroLede: string;
  storyEyebrow: string;
  storyTitle: string;
  storyParagraphs: string[];
  missionTitle: string;
  missionBody: string;
  visionTitle: string;
  visionBody: string;
  valuesEyebrow: string;
  valuesTitle: string;
  valuesTitleAccent: string;
  values: AboutValue[];
  journeyEyebrow: string;
  journeyTitle: string;
  journeyTitleAccent: string;
  journeyLede: string;
  journey: AboutJourneyItem[];
  stats: AboutStat[];
  approachEyebrow: string;
  approachTitle: string;
  approachLede: string;
  approachSteps: AboutStep[];
  teamEyebrow: string;
  teamTitle: string;
  teamLede: string;
  team: AboutTeamRole[];
  presenceEyebrow: string;
  presenceTitle: string;
  presenceLede: string;
  regions: AboutRegion[];
  whyEyebrow: string;
  whyTitle: string;
  whyBullets: string[];
  ctaTitle: string;
  ctaLede: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export const DEFAULT_ABOUT: AboutConfig = {
  heroEyebrow: "About Global Orbit",
  heroTitleBefore: "Building enterprise-grade",
  heroTitleAccent: "digital systems",
  heroTitleAfter: "from USA to the world",
  heroLede:
    "Global Orbit Pvt Ltd is a United States-based technology company. We design, build, and operate websites, custom software, ERP platforms, and SEO programmes for organisations that need delivery to stay clear after launch — across USA, India, the United States, and fifteen-plus countries.",
  storyEyebrow: "Our story",
  storyTitle: "A studio built for operators, not slide decks",
  storyParagraphs: [
    "We started in 2016 as a focused web development team in United States. Today we run a full product and services practice: billing and ERP software, hotel and OTA systems, warehouse and POS platforms, and the marketing sites that introduce them to the market.",
    "Our clients are owners, operations leads, and founders who need a named team — not a rotating bench. Every engagement gets a project lead, documented handover, and support that continues after go-live.",
    "We do not borrow prestige with fake logos or inflated numbers. What you see on this site is what we ship: real products, live deployments, and relationships measured in years — not campaigns.",
  ],
  missionTitle: "Our mission",
  missionBody:
    "Deliver world-class digital systems that empower businesses to grow, innovate, and succeed — with transparent ownership, measurable performance, and support that stays reachable.",
  visionTitle: "Our vision",
  visionBody:
    "To be the most trusted build-and-operate partner in South Asia and beyond — known for premium quality, honest delivery, and software that teams actually run every day.",
  valuesEyebrow: "What we stand for",
  valuesTitle: "Principles that guide",
  valuesTitleAccent: "every delivery",
  values: [
    {
      title: "Clarity over noise",
      body: "Architecture, access, and promises live in documents the client keeps. Chat is not the archive.",
    },
    {
      title: "Performance is product",
      body: "Fast load, accessible UI, and SEO foundations are not add-ons — they ship with the build.",
    },
    {
      title: "Stay reachable",
      body: "The people who designed your system remain the people you can ask when it misbehaves.",
    },
    {
      title: "Honest growth",
      body: "We publish real milestones and real work. If it is not live yet, we say so — and then we ship it.",
    },
  ],
  journeyEyebrow: "Our journey",
  journeyTitle: "From United States to",
  journeyTitleAccent: "global delivery",
  journeyLede: "Nine years of product launches, international clients, and software used in production every day.",
  journey: [
    {
      year: "2016",
      title: "Founded in USA",
      body: "Started as a web development studio in United States with a focus on premium digital experiences.",
    },
    {
      year: "2018",
      title: "SEO & growth practice",
      body: "Expanded into technical SEO, local ranking, and measurable traffic programmes across USA.",
    },
    {
      year: "2020",
      title: "International clients",
      body: "Began serving businesses in the USA, UK, UAE, Australia, and India with remote delivery.",
    },
    {
      year: "2022",
      title: "Software products launched",
      body: "Shipped our own ERP, billing, hospitality, and operations products on a shared platform.",
    },
    {
      year: "2024",
      title: "250+ projects delivered",
      body: "Crossed two hundred fifty successful websites, apps, and software deployments worldwide.",
    },
    {
      year: "2025",
      title: "Studios in three countries",
      body: "USA, India, and United States delivery with unified standards and shared product roadmap.",
    },
  ],
  stats: [
    { value: "250+", label: "Projects completed" },
    { value: "120+", label: "SEO clients" },
    { value: "15+", label: "Countries served" },
    { value: "9+", label: "Years in operation" },
  ],
  approachEyebrow: "How we work",
  approachTitle: "A proven delivery rhythm",
  approachLede: "Structured phases, visible milestones, and no surprise scope — from discovery to long-term care.",
  approachSteps: [
    {
      title: "Discover & align",
      body: "We map operators, constraints, and success metrics before design or code. You know what we will build and why.",
    },
    {
      title: "Design & build",
      body: "UI/UX, engineering, and QA run in parallel with weekly demos. Staging stays stable; production changes are deliberate.",
    },
    {
      title: "Launch & operate",
      body: "Handover docs, training, monitoring, and a named contact for fixes and iterations after go-live.",
    },
  ],
  teamEyebrow: "Leadership & craft",
  teamTitle: "Experts across product, engineering, and growth",
  teamLede: "A senior team of developers, designers, and SEO specialists — one studio, one standard.",
  team: [
    { role: "CEO & Founder", specialty: "Strategy & client partnerships", icon: "◈" },
    { role: "Lead Developer", specialty: "Architecture & product engineering", icon: "</>" },
    { role: "SEO Director", specialty: "Search, analytics & growth", icon: "⌁" },
    { role: "Design Lead", specialty: "UI/UX & brand systems", icon: "✦" },
  ],
  presenceEyebrow: "Global presence",
  presenceTitle: "Studios where you need us",
  presenceLede: "Local time zones, shared playbooks, and one quality bar across regions.",
  regions: [
    {
      title: "USA · United States",
      body: "Headquarters and product engineering — ERP, hospitality software, and delivery for South Asia.",
    },
    {
      title: "India",
      body: "Implementation, SEO, and enterprise web for growing brands across India and the region.",
    },
    {
      title: "United States",
      body: "Consulting, custom apps, and SaaS operations for North American clients and partners.",
    },
  ],
  whyEyebrow: "Why Global Orbit",
  whyTitle: "Why teams choose us",
  whyBullets: [
    "Nine-plus years serving USA and international clients with documented delivery",
    "Data-driven SEO and Core Web Vitals–first engineering",
    "Ultra-fast marketing sites and apps — performance as a default",
    "Dedicated project lead on every engagement",
    "Transparent pricing with no hidden fees",
    "Ongoing support and iteration after launch",
  ],
  ctaTitle: "Ready to build something that lasts?",
  ctaLede: "Tell us about your product, website, or operations challenge. Free consultation — no commitment.",
  ctaPrimaryLabel: "Book a consultation",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "View our work",
  ctaSecondaryHref: "/projects",
};

function parseString(raw: unknown, fallback: string) {
  return typeof raw === "string" && raw.trim() ? raw : fallback;
}

function parseStringArray(raw: unknown, fallback: string[]) {
  if (!Array.isArray(raw)) return fallback;
  const items = raw.map((item) => (typeof item === "string" ? item.trim() : "")).filter(Boolean);
  return items.length ? items : fallback;
}

function parseJourney(raw: unknown, fallback: AboutJourneyItem[]): AboutJourneyItem[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      year: parseString(data.year, fb.year),
      title: parseString(data.title, fb.title),
      body: parseString(data.body, fb.body),
    };
  });
}

function parseStats(raw: unknown, fallback: AboutStat[]): AboutStat[] {
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

function parseTeam(raw: unknown, fallback: AboutTeamRole[]): AboutTeamRole[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      role: parseString(data.role, fb.role),
      specialty: parseString(data.specialty, fb.specialty),
      icon: parseString(data.icon, fb.icon),
    };
  });
}

function parseValues(raw: unknown, fallback: AboutValue[]): AboutValue[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      title: parseString(data.title, fb.title),
      body: parseString(data.body, fb.body),
    };
  });
}

function parseSteps(raw: unknown, fallback: AboutStep[]): AboutStep[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      title: parseString(data.title, fb.title),
      body: parseString(data.body, fb.body),
    };
  });
}

function parseRegions(raw: unknown, fallback: AboutRegion[]): AboutRegion[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      title: parseString(data.title, fb.title),
      body: parseString(data.body, fb.body),
    };
  });
}

export function parseAboutConfig(raw: unknown): AboutConfig {
  const data = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const str = (key: keyof AboutConfig, fallback: string) => parseString(data[key], fallback);
  return {
    heroEyebrow: str("heroEyebrow", DEFAULT_ABOUT.heroEyebrow),
    heroTitleBefore: str("heroTitleBefore", DEFAULT_ABOUT.heroTitleBefore),
    heroTitleAccent: str("heroTitleAccent", DEFAULT_ABOUT.heroTitleAccent),
    heroTitleAfter: str("heroTitleAfter", DEFAULT_ABOUT.heroTitleAfter),
    heroLede: str("heroLede", DEFAULT_ABOUT.heroLede),
    storyEyebrow: str("storyEyebrow", DEFAULT_ABOUT.storyEyebrow),
    storyTitle: str("storyTitle", DEFAULT_ABOUT.storyTitle),
    storyParagraphs: parseStringArray(data.storyParagraphs, [...DEFAULT_ABOUT.storyParagraphs]),
    missionTitle: str("missionTitle", DEFAULT_ABOUT.missionTitle),
    missionBody: str("missionBody", DEFAULT_ABOUT.missionBody),
    visionTitle: str("visionTitle", DEFAULT_ABOUT.visionTitle),
    visionBody: str("visionBody", DEFAULT_ABOUT.visionBody),
    valuesEyebrow: str("valuesEyebrow", DEFAULT_ABOUT.valuesEyebrow),
    valuesTitle: str("valuesTitle", DEFAULT_ABOUT.valuesTitle),
    valuesTitleAccent: str("valuesTitleAccent", DEFAULT_ABOUT.valuesTitleAccent),
    values: parseValues(data.values, DEFAULT_ABOUT.values),
    journeyEyebrow: str("journeyEyebrow", DEFAULT_ABOUT.journeyEyebrow),
    journeyTitle: str("journeyTitle", DEFAULT_ABOUT.journeyTitle),
    journeyTitleAccent: str("journeyTitleAccent", DEFAULT_ABOUT.journeyTitleAccent),
    journeyLede: str("journeyLede", DEFAULT_ABOUT.journeyLede),
    journey: parseJourney(data.journey, DEFAULT_ABOUT.journey),
    stats: parseStats(data.stats, DEFAULT_ABOUT.stats),
    approachEyebrow: str("approachEyebrow", DEFAULT_ABOUT.approachEyebrow),
    approachTitle: str("approachTitle", DEFAULT_ABOUT.approachTitle),
    approachLede: str("approachLede", DEFAULT_ABOUT.approachLede),
    approachSteps: parseSteps(data.approachSteps, DEFAULT_ABOUT.approachSteps),
    teamEyebrow: str("teamEyebrow", DEFAULT_ABOUT.teamEyebrow),
    teamTitle: str("teamTitle", DEFAULT_ABOUT.teamTitle),
    teamLede: str("teamLede", DEFAULT_ABOUT.teamLede),
    team: parseTeam(data.team, DEFAULT_ABOUT.team),
    presenceEyebrow: str("presenceEyebrow", DEFAULT_ABOUT.presenceEyebrow),
    presenceTitle: str("presenceTitle", DEFAULT_ABOUT.presenceTitle),
    presenceLede: str("presenceLede", DEFAULT_ABOUT.presenceLede),
    regions: parseRegions(data.regions, DEFAULT_ABOUT.regions),
    whyEyebrow: str("whyEyebrow", DEFAULT_ABOUT.whyEyebrow),
    whyTitle: str("whyTitle", DEFAULT_ABOUT.whyTitle),
    whyBullets: parseStringArray(data.whyBullets, [...DEFAULT_ABOUT.whyBullets]),
    ctaTitle: str("ctaTitle", DEFAULT_ABOUT.ctaTitle),
    ctaLede: str("ctaLede", DEFAULT_ABOUT.ctaLede),
    ctaPrimaryLabel: str("ctaPrimaryLabel", DEFAULT_ABOUT.ctaPrimaryLabel),
    ctaPrimaryHref: str("ctaPrimaryHref", DEFAULT_ABOUT.ctaPrimaryHref),
    ctaSecondaryLabel: str("ctaSecondaryLabel", DEFAULT_ABOUT.ctaSecondaryLabel),
    ctaSecondaryHref: str("ctaSecondaryHref", DEFAULT_ABOUT.ctaSecondaryHref),
  };
}
