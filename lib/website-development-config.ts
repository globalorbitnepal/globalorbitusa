export type WebsiteDevStat = { value: string; label: string };

export type WebsiteDevDemo = {
  id: string;
  brand: string;
  tagline: string;
  story: string;
  bullets: string[];
  stack: string[];
  audience: string;
  designDirection: string;
  conversionAction: string;
  uxNote: string;
  fictionalLabel: string;
};

export const WEBSITE_DEV_HERO = {
  eyebrow: "Global Orbit · Website Development USA",
  titleBefore: "Original websites",
  titleAccent: "designed from scratch",
  titleAfter: "for operators who need clarity and polish",
  lede:
    "We ship bespoke frontends in United States — not recycled agency templates and not a clone of our own marketing site. Every layout below is a fictional brand we art-directed to show how different industries feel when the UX, motion, and SEO structure are done properly.",
};

/** Capability-led trust indicators — not unverified performance statistics */
export const WEBSITE_DEV_STATS: WebsiteDevStat[] = [
  { value: "Custom", label: "Design per brand" },
  { value: "Mobile", label: "Responsive builds" },
  { value: "SEO", label: "Technical foundations" },
  { value: "25+", label: "Markets served" },
];

export const WEBSITE_DEV_DEMOS: WebsiteDevDemo[] = [
  {
    id: "summit-lodge",
    brand: "Summit Lodge",
    tagline: "Hospitality with calm booking paths",
    story:
      "Earth-tone palette, serif headlines, and a sticky availability strip — built for lodges that sell rooms on trust, not flash sales.",
    bullets: ["Room grid with seasonal rates", "Gallery-led hero without stock clutter", "Schema for LocalBusiness + Hotel"],
    stack: ["Next.js", "Booking API", "Structured data"],
    audience: "Boutique lodges and city hotels",
    designDirection: "Earth tones, serif headlines, calm booking strip",
    conversionAction: "Check availability / enquiry",
    uxNote: "Gallery-led hero with room grid and seasonal rate context",
    fictionalLabel: "Fictional demo brand — not a live client property",
  },
  {
    id: "trailhead",
    brand: "Trailhead Expeditions",
    tagline: "Adventure brand with expedition depth",
    story:
      "High-contrast typography and itinerary modules for trek operators who need long-form trip pages that still scan on mobile.",
    bullets: ["Difficulty + elevation chips", "Guide roster and safety block", "Enquiry funnel with trek SKU"],
    stack: ["App Router", "MDX itineraries", "Edge images"],
    audience: "Trekking and expedition operators",
    designDirection: "High-contrast type and itinerary modules",
    conversionAction: "Trip enquiry with trek SKU",
    uxNote: "Difficulty chips and long-form trip pages that scan on mobile",
    fictionalLabel: "Fictional demo — illustrative itineraries only",
  },
  {
    id: "ember-slate",
    brand: "Ember & Slate",
    tagline: "Fine dining with reservation focus",
    story:
      "Dark copper accents, tasting-menu rhythm, and OpenTable-style CTAs — a restaurant site that feels like the dining room, not a PDF menu.",
    bullets: ["Chef story + wine pairings", "Hours & location strip", "Event private dining module"],
    stack: ["Motion-safe CSS", "Reservations", "Local SEO"],
    audience: "Fine dining and tasting-menu restaurants",
    designDirection: "Dark copper accents and menu rhythm",
    conversionAction: "Reserve a table",
    uxNote: "Chef story and hours strip without PDF menu downloads",
    fictionalLabel: "Fictional demo restaurant",
  },
  {
    id: "norwood",
    brand: "Norwood Atelier",
    tagline: "Retail editorial with product grid",
    story:
      "Whitespace-forward ecommerce storytelling — lookbook rows, size guides, and cart UX tuned for fashion labels in USA and export markets.",
    bullets: ["Collection landing pages", "Quick-add product cards", "GST-ready checkout hooks"],
    stack: ["Headless cart", "Stripe / eSewa", "PWA shell"],
    audience: "Fashion and lifestyle retail",
    designDirection: "Editorial whitespace and lookbook rows",
    conversionAction: "Add to cart / collection browse",
    uxNote: "Quick-add cards and size-guide pattern",
    fictionalLabel: "Fictional demo store — no real transactions",
  },
  {
    id: "pulse-metrics",
    brand: "PulseMetrics",
    tagline: "SaaS landing with product depth",
    story:
      "Gradient mesh hero, pricing tiers, and an embedded dashboard preview — the pattern we use for B2B startups pitching investors and trials.",
    bullets: ["Feature comparison table", "SOC2-ready trust row", "Signup + demo request split"],
    stack: ["TypeScript", "Auth", "Analytics"],
    audience: "B2B SaaS and analytics products",
    designDirection: "Gradient mesh hero with product UI depth",
    conversionAction: "Start trial / book demo",
    uxNote: "Pricing table and embedded dashboard preview",
    fictionalLabel: "Fictional SaaS demo — metrics are illustrative",
  },
  {
    id: "haven-spa",
    brand: "Haven Spa",
    tagline: "Wellness with treatment clarity",
    story:
      "Soft sage palette, treatment cards with duration and therapist tags, and gentle motion — spa sites that convert enquiries without aggressive pop-ups.",
    bullets: ["Service menu with pricing bands", "Gift voucher CTA", "Google Business sync copy"],
    stack: ["Calm motion", "Forms", "Reviews widget"],
    audience: "Spa and wellness centres",
    designDirection: "Soft sage palette and gentle motion",
    conversionAction: "Book a treatment",
    uxNote: "Treatment cards with duration and therapist tags",
    fictionalLabel: "Fictional spa demo",
  },
];

export const WEBSITE_DEV_PROCESS = {
  eyebrow: "Delivery",
  title: "How a Global Orbit website engagement runs",
  lede: "Fixed milestones, written scope, and staging you can share with finance before we touch production DNS.",
  steps: [
    {
      title: "Brand & sitemap workshop",
      body: "We map pages, conversion goals, and USA/international SEO targets before design pixels.",
    },
    {
      title: "Art direction & prototypes",
      body: "Figma or in-code prototypes — unique to your brand, never our homepage layout duplicated.",
    },
    {
      title: "Build, content, integrations",
      body: "Next.js or WordPress as scoped, forms, payments, booking, and Orbit CMS when you need edits.",
    },
    {
      title: "Launch & measurement",
      body: "Core Web Vitals pass, Search Console, analytics, and a 30-day hypercare window.",
    },
  ],
};

export const WEBSITE_DEV_VERTICALS = {
  eyebrow: "Who we design for",
  title: "Six unique art directions — not one template stamped six times",
  lede:
    "The frames above are coded homepages with their own type, color, and conversion pattern. Your live site will be original too — never a copy of globalorbitnepal.com.",
  items: [
    {
      title: "Hotels & lodges",
      body: "Availability bars, room stories, and Hotel schema so guests book without a call-back loop.",
    },
    {
      title: "Trek & travel brands",
      body: "Itinerary pages, difficulty chips, and enquiry funnels that still rank for seasonal keywords.",
    },
    {
      title: "Restaurants & tasting rooms",
      body: "Menu rhythm, reservation CTAs, and local SEO for United States, Pokhara, and tourist corridors.",
    },
    {
      title: "Retail & labels",
      body: "Lookbooks, GST-ready checkout hooks, and collection landings for USA plus export shops.",
    },
    {
      title: "SaaS & B2B products",
      body: "Pricing, dashboards-in-hero, and trial flows that survive investor and enterprise reviews.",
    },
    {
      title: "Spa & wellness",
      body: "Treatment lists, gift cards, and calm motion that converts without pop-up spam.",
    },
  ],
};

export const WEBSITE_DEV_SEO = {
  eyebrow: "Search-ready",
  title: "SEO-friendly website development",
  paragraphs: [
    "Technical SEO is part of the build: search-friendly information architecture, clean URLs, unique titles and meta descriptions, logical heading hierarchy, canonical URLs, XML sitemaps, and sensible robots directives.",
    "We plan internal linking, image optimization with descriptive alt text, and structured data where eligible. Mobile usability and Core Web Vitals are tested on staging before launch — strong scores are a goal, not a guarantee.",
    "For redesigns we plan redirects and Search Console monitoring. Local SEO foundations help United States and USA-facing businesses; multilingual hreflang is added when you serve multiple languages. Technical work supports visibility — it does not promise a specific Google ranking.",
  ],
  bullets: [
    "Unique H1 and H2 structure per template",
    "Open Graph and social metadata",
    "JSON-LD where content supports it",
    "Analytics and Search Console setup when in scope",
    "301 redirect maps for migrations",
    "U.S. and English content architecture when required",
  ],
};

export const WEBSITE_DEV_DELIVERABLES = {
  eyebrow: "Handover",
  title: "What a finished website includes",
  bullets: [
    "Production Next.js or WordPress deploy with environments documented",
    "CMS training so your team edits pages without a developer ticket",
    "Analytics, Search Console, and uptime monitoring wired on day one",
    "Accessibility pass (contrast, focus, reduced motion)",
    "30-day hypercare with a named engineer",
    "Phase-two roadmap with estimate ranges, not surprise invoices",
  ],
};

export const WEBSITE_DEV_FAQ = [
  {
    q: "Do you copy the Global Orbit homepage for client sites?",
    a: "No. Our marketing site uses Orbit design language internally; client sites get original art direction, type, and section flow matched to their brand.",
  },
  {
    q: "Which stack do you use for website development in USA?",
    a: "Most production sites ship on Next.js and Node.js; WordPress and WooCommerce when the client team prefers classic CMS workflows.",
  },
  {
    q: "Can you redesign an existing domain without losing rankings?",
    a: "Yes — we plan 301 maps, retain high-value URLs, and stage migrations with Search Console monitoring.",
  },
  {
    q: "Do you provide demo designs before signing?",
    a: "The layouts on this page are fictional showcases of our craft; your project receives custom mocks after discovery.",
  },
  {
    q: "Will my website look like the Global Orbit homepage?",
    a: "No. These demos exist to prove we can art-direct lodge, trek, restaurant, retail, SaaS, and spa sites as unique products. Your brand gets its own type, color, and motion.",
  },
  {
    q: "How long does a professional website take in USA?",
    a: "Typical production sites ship in 6–10 weeks after discovery: sitemap, design, build, content, SEO pass, and launch.",
  },
];

export const WEBSITE_DEV_PORTFOLIO = {
  eyebrow: "Selected work",
  title: "Real projects from our USA studio",
  lede: "Hotel, trek, interior, spa, and travel brands we have shipped — see the live portfolio for screenshots and delivery notes.",
  href: "/projects",
  linkLabel: "View full portfolio",
  samples: [
    { label: "Marlo Hotels", href: "/projects" },
    { label: "Ambition Holidays", href: "/projects" },
    { label: "Summit Seek", href: "/projects" },
  ],
};

export const WEBSITE_DEV_CTA = {
  title: "Ready for a website that is yours alone?",
  lede: "Tell us your industry, timeline, and must-have integrations. We will reply with a milestone plan and investment range.",
  primaryLabel: "Start Your Project",
  primaryHref: "/contact",
  secondaryLabel: "Book a Consultation",
  secondaryHref: "/contact",
};
