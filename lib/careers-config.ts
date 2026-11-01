export type CareerRole = {
  slug: string;
  title: string;
  summary: string;
  location: string;
  employmentType: string;
  department: string;
};

export type CareerPerk = {
  title: string;
  body: string;
};

export type CareerStep = {
  title: string;
  body: string;
};

export type CareerOffice = {
  title: string;
  body: string;
};

export type CareersConfig = {
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroTitleAfter: string;
  heroLede: string;
  cultureEyebrow: string;
  cultureTitle: string;
  cultureParagraphs: string[];
  perksEyebrow: string;
  perksTitle: string;
  perksTitleAccent: string;
  perksLede: string;
  perks: CareerPerk[];
  rolesEyebrow: string;
  rolesTitle: string;
  rolesTitleAccent: string;
  rolesLede: string;
  roles: CareerRole[];
  processEyebrow: string;
  processTitle: string;
  processLede: string;
  processSteps: CareerStep[];
  officesEyebrow: string;
  officesTitle: string;
  officesLede: string;
  offices: CareerOffice[];
  quoteText: string;
  quoteAuthor: string;
  quoteRole: string;
  applyNote: string;
  ctaTitle: string;
  ctaLede: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export const DEFAULT_CAREERS: CareersConfig = {
  heroEyebrow: "Careers at Global Orbit",
  heroTitleBefore: "Build products that",
  heroTitleAccent: "ship worldwide",
  heroTitleAfter: "from United States and beyond",
  heroLede:
    "We are a product-led studio hiring engineers, designers, and growth specialists who care about craft, clarity, and code that stays maintainable after launch. Three regions, one quality bar.",
  cultureEyebrow: "Life here",
  cultureTitle: "A studio culture built for builders",
  cultureParagraphs: [
    "You will work on real ERP, hospitality, and SaaS products — not endless pitch decks. Teams are small, senior-heavy, and focused on outcomes clients can operate every day.",
    "We favour async documentation, honest reviews, and room to learn. You are expected to own your module end-to-end, from spec to production support.",
    "Remote-friendly within our regions, with core overlap hours for USA, India, and US clients. We invest in tools, training, and time to do the work properly.",
  ],
  perksEyebrow: "Why join us",
  perksTitle: "Benefits that match",
  perksTitleAccent: "serious work",
  perksLede: "Competitive packages, modern stack, and a team that respects your time outside of delivery sprints.",
  perks: [
    {
      title: "Modern stack",
      body: "Next.js, Laravel, Node, Figma, and the product suite we ship to clients — no legacy mystery code on day one.",
    },
    {
      title: "Global exposure",
      body: "Work with clients and teammates across USA, India, and global clients without leaving a structured delivery process.",
    },
    {
      title: "Growth & learning",
      body: "Budget for courses, conferences, and internal reviews. Senior engineers pair on architecture; designers share systems.",
    },
    {
      title: "Stable delivery rhythm",
      body: "Planned sprints, visible roadmaps, and no heroics-as-culture. We ship on schedule and protect focus time.",
    },
  ],
  rolesEyebrow: "Open roles",
  rolesTitle: "Current",
  rolesTitleAccent: "opportunities",
  rolesLede: "Apply with a short note, portfolio or GitHub, and the role you are targeting. We respond to every serious application.",
  roles: [
    {
      slug: "senior-full-stack-developer",
      title: "Senior Full-Stack Developer",
      summary: "Own features across Next.js and Laravel — from API design to polished UI and production monitoring.",
      location: "United States · Hybrid",
      employmentType: "Full-time",
      department: "Engineering",
    },
    {
      slug: "ui-ux-designer",
      title: "UI/UX Designer",
      summary: "Design systems and product flows for hotel, trek, ecommerce, and SaaS clients — Figma to shipped UI.",
      location: "United States · On-site",
      employmentType: "Full-time",
      department: "Design",
    },
    {
      slug: "seo-specialist",
      title: "SEO Specialist",
      summary: "Technical SEO, content architecture, and measurable growth for USA and international export brands.",
      location: "Remote · USA / India",
      employmentType: "Full-time",
      department: "Growth",
    },
  ],
  processEyebrow: "How to apply",
  processTitle: "A straightforward hiring process",
  processLede: "Respectful of your time — typically two to three conversations from application to offer.",
  processSteps: [
    {
      title: "Apply",
      body: "Send your CV, links, and a few lines on why this role. Use the contact page or email careers@theglobalorbit.com.",
    },
    {
      title: "Conversation",
      body: "Intro call with People Ops, then a technical or portfolio review with the team you would join.",
    },
    {
      title: "Offer",
      body: "Reference checks, compensation discussion, and a clear start date. Onboarding includes product context and access.",
    },
  ],
  officesEyebrow: "Where we hire",
  officesTitle: "Studios & remote hubs",
  officesLede: "Roles are tied to delivery studios — relocation support discussed for the right candidate.",
  offices: [
    {
      title: "USA · United States HQ",
      body: "Engineering, design, and product — core ERP and hospitality platforms.",
    },
    {
      title: "India",
      body: "Implementation, SEO, and client delivery for regional accounts.",
    },
    {
      title: "United States",
      body: "Consulting, custom apps, and partner-led projects (remote-friendly).",
    },
  ],
  quoteText:
    "The best part is shipping software that clients run every morning — and still having mentors who explain why the architecture choices matter.",
  quoteAuthor: "Engineering team",
  quoteRole: "Global Orbit Pvt Ltd",
  applyNote:
    "We welcome applicants from all backgrounds. If you need accommodations during the process, tell us when you apply.",
  ctaTitle: "Ready to build with us?",
  ctaLede: "Tell us which role fits you — or send an open application if your profile spans product, design, and growth.",
  ctaPrimaryLabel: "Apply now",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "View open roles",
  ctaSecondaryHref: "#open-roles",
};

function parseString(raw: unknown, fallback: string) {
  return typeof raw === "string" && raw.trim() ? raw : fallback;
}

function parseStringArray(raw: unknown, fallback: string[]) {
  if (!Array.isArray(raw)) return fallback;
  const items = raw.map((item) => (typeof item === "string" ? item.trim() : "")).filter(Boolean);
  return items.length ? items : fallback;
}

function parseRoles(raw: unknown, fallback: CareerRole[]): CareerRole[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      slug: fb.slug,
      title: parseString(data.title, fb.title),
      summary: parseString(data.summary, fb.summary),
      location: parseString(data.location, fb.location),
      employmentType: parseString(data.employmentType, fb.employmentType),
      department: parseString(data.department, fb.department),
    };
  });
}

function parsePerks(raw: unknown, fallback: CareerPerk[]): CareerPerk[] {
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

function parseSteps(raw: unknown, fallback: CareerStep[]): CareerStep[] {
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

function parseOffices(raw: unknown, fallback: CareerOffice[]): CareerOffice[] {
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

export function parseCareersConfig(raw: unknown): CareersConfig {
  const data = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const str = (key: keyof CareersConfig, fallback: string) => parseString(data[key], fallback);
  return {
    heroEyebrow: str("heroEyebrow", DEFAULT_CAREERS.heroEyebrow),
    heroTitleBefore: str("heroTitleBefore", DEFAULT_CAREERS.heroTitleBefore),
    heroTitleAccent: str("heroTitleAccent", DEFAULT_CAREERS.heroTitleAccent),
    heroTitleAfter: str("heroTitleAfter", DEFAULT_CAREERS.heroTitleAfter),
    heroLede: str("heroLede", DEFAULT_CAREERS.heroLede),
    cultureEyebrow: str("cultureEyebrow", DEFAULT_CAREERS.cultureEyebrow),
    cultureTitle: str("cultureTitle", DEFAULT_CAREERS.cultureTitle),
    cultureParagraphs: parseStringArray(data.cultureParagraphs, [...DEFAULT_CAREERS.cultureParagraphs]),
    perksEyebrow: str("perksEyebrow", DEFAULT_CAREERS.perksEyebrow),
    perksTitle: str("perksTitle", DEFAULT_CAREERS.perksTitle),
    perksTitleAccent: str("perksTitleAccent", DEFAULT_CAREERS.perksTitleAccent),
    perksLede: str("perksLede", DEFAULT_CAREERS.perksLede),
    perks: parsePerks(data.perks, DEFAULT_CAREERS.perks),
    rolesEyebrow: str("rolesEyebrow", DEFAULT_CAREERS.rolesEyebrow),
    rolesTitle: str("rolesTitle", DEFAULT_CAREERS.rolesTitle),
    rolesTitleAccent: str("rolesTitleAccent", DEFAULT_CAREERS.rolesTitleAccent),
    rolesLede: str("rolesLede", DEFAULT_CAREERS.rolesLede),
    roles: parseRoles(data.roles, DEFAULT_CAREERS.roles),
    processEyebrow: str("processEyebrow", DEFAULT_CAREERS.processEyebrow),
    processTitle: str("processTitle", DEFAULT_CAREERS.processTitle),
    processLede: str("processLede", DEFAULT_CAREERS.processLede),
    processSteps: parseSteps(data.processSteps, DEFAULT_CAREERS.processSteps),
    officesEyebrow: str("officesEyebrow", DEFAULT_CAREERS.officesEyebrow),
    officesTitle: str("officesTitle", DEFAULT_CAREERS.officesTitle),
    officesLede: str("officesLede", DEFAULT_CAREERS.officesLede),
    offices: parseOffices(data.offices, DEFAULT_CAREERS.offices),
    quoteText: str("quoteText", DEFAULT_CAREERS.quoteText),
    quoteAuthor: str("quoteAuthor", DEFAULT_CAREERS.quoteAuthor),
    quoteRole: str("quoteRole", DEFAULT_CAREERS.quoteRole),
    applyNote: str("applyNote", DEFAULT_CAREERS.applyNote),
    ctaTitle: str("ctaTitle", DEFAULT_CAREERS.ctaTitle),
    ctaLede: str("ctaLede", DEFAULT_CAREERS.ctaLede),
    ctaPrimaryLabel: str("ctaPrimaryLabel", DEFAULT_CAREERS.ctaPrimaryLabel),
    ctaPrimaryHref: str("ctaPrimaryHref", DEFAULT_CAREERS.ctaPrimaryHref),
    ctaSecondaryLabel: str("ctaSecondaryLabel", DEFAULT_CAREERS.ctaSecondaryLabel),
    ctaSecondaryHref: str("ctaSecondaryHref", DEFAULT_CAREERS.ctaSecondaryHref),
  };
}

export function findCareerRole(config: CareersConfig, slug: string) {
  return config.roles.find((role) => role.slug === slug);
}
