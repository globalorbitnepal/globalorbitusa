import { USA_PHONE_DISPLAY } from "@/lib/contact-info";

/**
 * Local-intent landing pages for the USA market.
 *
 * These target “near me” and metro-level commercial keywords that the generic
 * service pages do not rank for. Each entry renders a full page (not a stub) so
 * Google sees unique, useful content with FAQ and LocalBusiness markup.
 */

export type LocalLandingFaq = { q: string; a: string };

export type LocalLanding = {
  slug: string;
  title: string;
  summary: string;
  /** Meta title used in <title>. */
  seoTitle: string;
  /** Meta description. */
  seoDescription: string;
  keywords: string[];
  focusKeyword: string;
  /** Short label above the H1. */
  eyebrow: string;
  h1: string;
  lede: string;
  city: string;
  region: string;
  /** Neighbourhoods / nearby cities for local relevance. */
  areas: string[];
  intro: string[];
  services: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  pricing: { label: string; price: string; detail: string }[];
  faqs: LocalLandingFaq[];
  related: { label: string; href: string }[];
};

const SHARED_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "30–45 minutes on the phone to map what you sell, who buys it, and the one action every page must drive.",
  },
  {
    step: "02",
    title: "Written scope & quote",
    body: "Page list, integrations, timeline, and a fixed price in USD. Nothing starts until you approve it in writing.",
  },
  {
    step: "03",
    title: "Design and build",
    body: "Original layouts, mobile-first components, and real copy — reviewed with you at two checkpoints, not one silent handoff.",
  },
  {
    step: "04",
    title: "SEO pass and launch",
    body: "Metadata, schema, sitemap, redirects, Core Web Vitals, analytics, and Search Console verification before go-live.",
  },
  {
    step: "05",
    title: "Aftercare",
    body: "30 days of fixes included. Optional monthly care plan for updates, backups, and ranking reports.",
  },
];

export const LOCAL_LANDINGS: LocalLanding[] = [
  {
    slug: "website-design-denver",
    title: "Website Design Denver",
    summary:
      "Website design and development in Denver, Colorado — fast, mobile-first business sites with local SEO built in.",
    seoTitle: "Website Design Denver CO | Small Business Websites | Global Orbit",
    seoDescription:
      "Website design in Denver, Colorado for small and mid-size businesses. Mobile-first builds, local SEO, transparent USD pricing. Call +1 (303) 217-6150 for a free consultation.",
    keywords: [
      "website design denver",
      "web designer denver co",
      "small business website denver",
      "denver web design agency",
      "website development colorado",
      "affordable website design denver",
    ],
    focusKeyword: "website design denver",
    eyebrow: "Website design · Denver, CO",
    h1: "Website Design in Denver for Businesses That Need to Be Found",
    lede:
      "A Denver business lives or dies on local search. We design fast, mobile-first websites that load in under two seconds, rank for neighbourhood searches, and turn visitors into calls, bookings, and quote requests.",
    city: "Denver",
    region: "Colorado",
    areas: [
      "Downtown Denver",
      "LoDo",
      "RiNo",
      "Cherry Creek",
      "Highlands",
      "Aurora",
      "Lakewood",
      "Boulder",
      "Littleton",
      "Centennial",
    ],
    intro: [
      "Most Denver businesses do not need a bigger website. They need a clearer one. We start with the questions your customers actually type — “plumber near me”, “wedding venue Denver”, “commercial cleaning Aurora” — then build pages that answer them in the first screen.",
      "Every project is designed at phone width first, because more than half of Colorado local searches start on a mobile device. Desktop is the enhancement, not the default.",
      "You get original design, hand-written copy, and a technical SEO foundation. No page builders stacked on templates, no stock photography you will see on three competitor sites.",
    ],
    services: [
      {
        title: "Small business websites",
        body: "Five to twelve pages with service detail, proof, location coverage, and a contact path that works on a phone in one thumb reach.",
      },
      {
        title: "Local SEO foundation",
        body: "Google Business Profile alignment, city and neighbourhood pages, NAP consistency, LocalBusiness schema, and internal links that explain your service area.",
      },
      {
        title: "Booking and quote flows",
        body: "Appointment scheduling, estimate request forms, and calendar handoff — routed to the inbox your team actually reads.",
      },
      {
        title: "E-commerce and catalogues",
        body: "Shopify, WooCommerce, or a custom cart for Colorado retailers, wholesalers, and makers who sell beyond the state.",
      },
      {
        title: "Redesigns and migrations",
        body: "Keep the rankings you already earned. Redirect maps, staged cutover, and Search Console monitoring after launch.",
      },
      {
        title: "Care plans",
        body: "Monthly updates, backups, security patches, uptime monitoring, and a plain-language report on what changed.",
      },
    ],
    process: SHARED_PROCESS,
    pricing: [
      { label: "Starter site", price: "from $899", detail: "5 pages · mobile-first · contact form · basic on-page SEO" },
      { label: "Business site", price: "from $2,400", detail: "10–15 pages · copywriting · local SEO · booking flow" },
      { label: "E-commerce", price: "from $4,500", detail: "Catalogue setup · payments · shipping rules · analytics" },
    ],
    faqs: [
      {
        q: "How much does a website cost in Denver?",
        a: "Small business sites typically land between $899 and $2,400 depending on page count, copywriting, and booking needs. E-commerce and custom applications start around $4,500. You receive a fixed written quote after the discovery call — no hourly surprises.",
      },
      {
        q: "How long does a Denver website project take?",
        a: "A five-page starter site usually ships in two to three weeks. A ten to fifteen page business site with copywriting takes four to six weeks. Complex booking or catalogue work takes longer, and we put the dates in the scope document.",
      },
      {
        q: "Will my site rank for ‘near me’ searches?",
        a: "Local rankings depend on your Google Business Profile, reviews, proximity, and competition. We build the technical foundation — structured data, city pages, crawlable content, fast mobile pages — and we tell you honestly which keywords are realistic in your first ninety days.",
      },
      {
        q: "Do you work with businesses outside Denver?",
        a: "Yes. We work with clients across Colorado — Aurora, Lakewood, Boulder, Littleton, Centennial, Colorado Springs — and nationwide by video call. Our USA desk answers at +1 (303) 217-6150 during Mountain and Eastern business hours.",
      },
      {
        q: "Who writes the content?",
        a: "We do, unless you have a writer. Copy is included in business site packages and reviewed with you before design is locked, so the layout fits the message instead of the other way around.",
      },
      {
        q: "Can you fix a slow or broken existing site?",
        a: "Often yes. We audit performance, mobile usability, and technical SEO first, then tell you whether a targeted fix or a rebuild costs less over two years.",
      },
    ],
    related: [
      { label: "Website development USA", href: "/service/website-development-usa" },
      { label: "Local SEO USA", href: "/local-seo-usa" },
      { label: "Web development USA", href: "/web-development-usa" },
      { label: "Packages & pricing", href: "/packages" },
    ],
  },
  {
    slug: "hire-website-developer-usa",
    title: "Hire a Website Developer USA",
    summary:
      "Hire vetted website developers in the USA — fixed scope, fixed price, direct communication, and code you own.",
    seoTitle: "Hire a Website Developer in the USA | Fixed Price, Code You Own",
    seoDescription:
      "Hire a website developer in the USA for business sites, e-commerce, and web apps. Fixed written scope, USD pricing, direct access to the engineers. Call +1 (303) 217-6150.",
    keywords: [
      "hire website developer usa",
      "hire web developer united states",
      "freelance web developer usa",
      "website developer for small business usa",
      "contract web developer usa",
      "best website developer usa",
    ],
    focusKeyword: "hire website developer usa",
    eyebrow: "Hire a developer · USA",
    h1: "Hire a Website Developer in the USA Without the Agency Overhead",
    lede:
      "You talk to the people writing the code. Fixed written scope, fixed USD price, weekly progress you can see, and a repository you own at the end. No account manager relaying messages.",
    city: "United States",
    region: "USA",
    areas: [],
    intro: [
      "Hiring a developer is a trust decision, not a shopping decision. The cheapest quote usually costs the most once you count rebuilds, missed launches, and the plugin stack nobody can maintain.",
      "We work in fixed scopes so you know the number before work starts. If the scope changes, you approve a revised number — never an open-ended hourly invoice.",
      "You get a named developer, a staging URL you can open at any time, and a handover that includes the repository, environment variables, and deployment notes. If you ever leave, nothing is trapped.",
    ],
    services: [
      {
        title: "Fixed-scope project work",
        body: "Marketing sites, e-commerce builds, portals, and dashboards quoted as a complete deliverable with a launch date.",
      },
      {
        title: "Monthly retainer",
        body: "A set number of development hours each month for a team that ships continuously and needs predictable cost.",
      },
      {
        title: "Rescue and takeover",
        body: "Inherit a half-finished build or a site nobody can update. We audit first, then stabilise before adding features.",
      },
      {
        title: "Performance and Core Web Vitals",
        body: "Measure, then fix: image pipelines, font loading, script budgets, and caching. Targets are agreed in writing.",
      },
      {
        title: "Integrations and APIs",
        body: "Payments, CRM, PMS, ERP, email, and SMS connected with documented error handling and retries.",
      },
      {
        title: "Accessibility pass",
        body: "Keyboard navigation, focus states, contrast, labels, and semantic structure checked against WCAG 2.2 AA basics.",
      },
    ],
    process: SHARED_PROCESS,
    pricing: [
      { label: "Hourly (short work)", price: "$65–$95/hr", detail: "For audits, small fixes, and advisory calls" },
      { label: "Fixed project", price: "from $899", detail: "Scope, price, and launch date agreed up front" },
      { label: "Monthly retainer", price: "from $1,200/mo", detail: "Reserved development hours and priority support" },
    ],
    faqs: [
      {
        q: "Can I hire a developer for a single page?",
        a: "Yes. Single landing pages, a booking form, or a performance fix are all valid fixed-scope jobs. The minimum engagement is one day of work.",
      },
      {
        q: "Do I own the code and the accounts?",
        a: "Always. The repository, hosting, domain, analytics, and Search Console are in your name. We hand over access and deployment notes at launch.",
      },
      {
        q: "Who do I talk to during the project?",
        a: "The developer building your site, plus a delivery lead for scheduling. There is no separate account manager layer.",
      },
      {
        q: "How do you handle time zones?",
        a: "Our USA desk works Mountain and Eastern hours, and delivery engineers overlap for at least four hours daily. Urgent production issues are handled outside overlap.",
      },
      {
        q: "What stack do you use?",
        a: "Next.js and React for most builds, WordPress when the team needs to self-edit, Shopify or WooCommerce for retail. We pick based on who maintains the site after launch, not on what is trending.",
      },
      {
        q: "Do you sign NDAs and contracts?",
        a: "Yes. We sign your NDA if you have one, and we provide a statement of work covering scope, payment milestones, IP ownership, and confidentiality.",
      },
    ],
    related: [
      { label: "Custom software development USA", href: "/custom-software-development-usa" },
      { label: "Web app development USA", href: "/orbit-software/web-apps" },
      { label: "Portfolio", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "affordable-website-design-usa",
    title: "Affordable Website Design USA",
    summary:
      "Affordable website design for USA small businesses — clear package pricing, no hidden fees, mobile-first builds.",
    seoTitle: "Affordable Website Design USA | Small Business Packages from $899",
    seoDescription:
      "Affordable website design in the USA with transparent package pricing from $899. Mobile-first, SEO-ready, and built by a real studio. Call +1 (303) 217-6150.",
    keywords: [
      "affordable website design usa",
      "cheap website design usa",
      "low cost website development usa",
      "small business website price usa",
      "budget website designer united states",
      "website design packages usa",
    ],
    focusKeyword: "affordable website design usa",
    eyebrow: "Affordable builds · USA",
    h1: "Affordable Website Design in the USA — Without the Template Look",
    lede:
      "Affordable should mean a fair price for real work, not a page builder you could have clicked together yourself. Fixed packages, published starting prices, and a scope you can read in two minutes.",
    city: "United States",
    region: "USA",
    areas: [],
    intro: [
      "Three things drive website cost: page count, custom design, and integrations. We price on those three, publish the starting numbers, and refuse to pad a proposal with items you did not ask for.",
      "Every package includes a mobile-first layout, contact forms that actually deliver, on-page SEO basics, analytics, and a launch checklist. Those are not add-ons.",
      "If your budget is genuinely tight, we will tell you what to defer — not sell you a smaller version of a site that cannot do the job.",
    ],
    services: [
      {
        title: "Starter website",
        body: "Five pages, one contact form, Google Analytics, and on-page SEO for a single service area.",
      },
      {
        title: "Business website",
        body: "Ten to fifteen pages with service detail, testimonials, location pages, and a booking or quote flow.",
      },
      {
        title: "Local visibility pack",
        body: "Google Business Profile cleanup, citations, schema, and city pages for businesses that live on phone calls.",
      },
      {
        title: "Content and photography direction",
        body: "Copywriting plus a shot list so your photos look intentional instead of borrowed.",
      },
      {
        title: "Payments and bookings",
        body: "Stripe, Square, or PayPal checkout and scheduling that syncs with your calendar.",
      },
      {
        title: "Ongoing care",
        body: "Hosting guidance, updates, backups, and monitoring — billed monthly, cancellable any time.",
      },
    ],
    process: SHARED_PROCESS,
    pricing: [
      { label: "Starter", price: "from $899", detail: "5 pages · contact form · analytics · basic SEO" },
      { label: "Business", price: "from $2,400", detail: "10–15 pages · copywriting · booking flow · local SEO" },
      { label: "Care plan", price: "from $89/mo", detail: "Updates · backups · monitoring · monthly report" },
    ],
    faqs: [
      {
        q: "What is actually included at the starting price?",
        a: "Design, build, responsive layouts, a contact form that delivers to your inbox, basic on-page SEO, analytics setup, and a launch checklist. Copywriting, photography, and paid integrations are listed separately in the quote.",
      },
      {
        q: "Are there hidden monthly fees?",
        a: "No. Hosting, domain, and any third-party tool are billed by the provider directly to you at their published rate. Our care plan is optional and cancellable.",
      },
      {
        q: "Why not use a $99 template site?",
        a: "You can, and for a single-page brochure it may be enough. Template sites usually fail on mobile speed, local SEO structure, and the moment you need a booking flow or a second location.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes. Typical terms are 50% to start and 50% at launch. Larger projects are split into three milestones tied to design approval, build review, and go-live.",
      },
      {
        q: "Do you offer a payment plan for e-commerce?",
        a: "Yes — e-commerce projects can be split across catalogue setup, storefront build, and launch readiness.",
      },
    ],
    related: [
      { label: "Packages & pricing", href: "/packages" },
      { label: "Website development USA", href: "/service/website-development-usa" },
      { label: "Website design Denver", href: "/website-design-denver" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function findLocalLanding(slug: string) {
  return LOCAL_LANDINGS.find((item) => item.slug === slug);
}

export function localLandingPaths(): string[] {
  return LOCAL_LANDINGS.map((item) => `/${item.slug}`);
}

/** LocalBusiness + FAQPage + BreadcrumbList markup for a local landing page. */
export function localLandingJsonLd(item: LocalLanding, origin: string) {
  const url = `${origin}/${item.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${origin}/services` },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
      {
        "@type": "Service",
        name: item.title,
        description: item.seoDescription,
        url,
        serviceType: item.title,
        provider: {
          "@type": "Organization",
          name: "Global Orbit",
          telephone: USA_PHONE_DISPLAY,
          areaServed: { "@type": "Country", name: "United States" },
        },
        areaServed: item.areas.length
          ? item.areas.map((area) => ({ "@type": "City", name: area }))
          : { "@type": "Country", name: "United States" },
      },
      {
        "@type": "FAQPage",
        mainEntity: item.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}
