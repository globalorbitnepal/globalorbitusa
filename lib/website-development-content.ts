/** Long-form copy and section data for /service/website-development-usa */

export const WD_BREADCRUMB = { parent: "Solutions", parentHref: "/services", current: "Website Development USA" };

export const WD_HERO = {
  eyebrow: "Global Orbit · Website Development USA",
  h1: "Website Development Company in USA for Ambitious Businesses",
  lede:
    "Global Orbit designs and builds custom business websites, e-commerce stores, hospitality and travel experiences, restaurant sites, and scalable web applications — with responsive layouts, clear user journeys, and SEO-ready structure from United States for USA and international brands.",
  primaryCta: "Start Your Project",
  secondaryCta: "Explore Our Work",
  secondaryHref: "/projects",
};

export const WD_TRUST = [
  { label: "Custom design & development" },
  { label: "Responsive, mobile-first UI" },
  { label: "E-commerce & booking journeys" },
  { label: "Technical SEO foundations" },
  { label: "Integrations & APIs" },
  { label: "Maintenance & support options" },
];

export const WD_INTRO = {
  title: "What professional website development actually means",
  paragraphs: [
    "A basic website is a collection of pages online. A professional business website is a planned digital asset: it presents your brand credibly, guides visitors toward enquiry or purchase, loads quickly on phones, and can be found when people search for what you offer.",
    "Professional development connects brand presentation, user experience, mobile responsiveness, page speed, search-friendly structure, conversion-focused layout, maintainable code, and integrations with the tools you already use — payments, booking, CRM, or inventory.",
    "Global Orbit treats these elements as one delivery, not a checklist added at the end. The goal is a site your team can run after launch, not a fragile template that breaks the first time you edit a heading.",
  ],
};

export type WdServiceCard = {
  title: string;
  body: string;
  href?: string;
};

export const WD_SERVICES: WdServiceCard[] = [
  {
    title: "Custom Website Design and Development",
    body: "Original layouts, typography, and motion matched to your brand — not a recycled agency skin.",
    href: "/contact",
  },
  {
    title: "Business and Corporate Websites",
    body: "Service pages, leadership profiles, and lead paths for B2B teams in USA and export markets.",
    href: "/contact",
  },
  {
    title: "E-commerce Website Development",
    body: "Catalogues, carts, and checkout flows on WooCommerce, Shopify, or custom stacks when scoped.",
    href: "/service/ecommerce-development-usa",
  },
  {
    title: "Hotel and Hospitality Website Development",
    body: "Room stories, galleries, enquiry or booking journeys, and local SEO for properties.",
    href: "/hotel-website-development-usa",
  },
  {
    title: "Trekking and Travel Website Development",
    body: "Itineraries, seasonal packages, filters, and enquiry funnels for operators and DMCs.",
    href: "/trekking-website-development-usa",
  },
  {
    title: "Restaurant Website Development",
    body: "Menus, reservations, location, and hours with mobile-first dining-room polish.",
    href: "/restaurant-website-development-usa",
  },
  {
    title: "Custom Web Application Development",
    body: "Portals, dashboards, and authenticated workflows beyond a marketing site.",
    href: "/custom-software-development-usa",
  },
  {
    title: "CMS and Website Management",
    body: "Editable pages with training so marketing updates copy without opening a ticket.",
    href: "/contact",
  },
  {
    title: "Website Redesign and Modernization",
    body: "New UX and performance with redirect planning to protect existing search equity.",
    href: "/contact",
  },
  {
    title: "Website Maintenance and Technical Support",
    body: "Updates, security patches, and small changes on monthly care plans when agreed.",
    href: "/contact",
  },
  {
    title: "Website Performance Optimization",
    body: "Image pipelines, script budgets, and layout stability aimed at strong Core Web Vitals.",
    href: "/service/seo-optimization-usa",
  },
  {
    title: "Technical SEO Implementation",
    body: "Metadata, sitemaps, schema, and crawl hygiene built into the project — not bolted on later.",
    href: "/service/seo-optimization-usa",
  },
];

export type WdIndustryPanel = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
  body: string;
};

export const WD_INDUSTRIES: WdIndustryPanel[] = [
  {
    id: "hotels",
    title: "Hotels and hospitality",
    image: "/brand/website-demos/lodge-hero.jpg",
    imageAlt: "Conceptual luxury lodge website hero layout",
    body:
      "Guests decide on trust before they decide on price. We structure room types, galleries, location context, and enquiry or booking paths so mobile travellers can act without hunting for a phone number.",
    points: [
      "Room and property presentation with clear rate context",
      "Enquiry or booking journeys aligned to your PMS or form workflow",
      "Image galleries that load efficiently on mobile data",
      "Local SEO foundations for maps and brand search",
      "Integration options discussed per property (channel, PMS, payments)",
    ],
  },
  {
    id: "trekking",
    title: "Trekking and travel companies",
    image: "/brand/website-demos/trek-hero.jpg",
    imageAlt: "Conceptual trekking operator website hero",
    body:
      "Trek and tour sites need long-form itinerary content that still scans on a phone. We plan destination hubs, difficulty filters, and enquiry forms that feed your sales desk the details they need.",
    points: [
      "Itinerary and package pages with structured headings",
      "Trip filters, seasons, and difficulty cues",
      "Maps and practical travel information",
      "Search-friendly content architecture",
      "Agent or group enquiry workflows when required",
    ],
  },
  {
    id: "restaurants",
    title: "Restaurants and cafes",
    image: "/brand/website-demos/dine-hero.jpg",
    imageAlt: "Conceptual fine dining restaurant website",
    body:
      "Menus, reservations, and location should be obvious in seconds. We design for thumb reach, fast menu browsing, and reservation or WhatsApp handoff — not PDF menus pinned to the homepage.",
    points: [
      "Menu presentation with dietary and pricing clarity",
      "Reservation or enquiry CTAs",
      "Hours, parking, and map placement",
      "Mobile-first layouts for walk-in search traffic",
      "Ordering or POS integrations scoped per venue",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce and retail",
    image: "/brand/website-demos/fashion-hero.jpg",
    imageAlt: "Conceptual fashion e-commerce storefront",
    body:
      "Retail sites must make discovery, product detail, and checkout feel inevitable. We connect catalogues, categories, search, and payment gateways you approve — with inventory rules documented in scope.",
    points: [
      "Category and product templates",
      "Cart and checkout UX",
      "Payment gateway integration when in scope",
      "Inventory or ERP hooks for larger retailers",
      "Performance tuning for image-heavy catalogues",
    ],
  },
  {
    id: "corporate",
    title: "Corporate and professional businesses",
    image: "/brand/website-demos/saas-hero.jpg",
    imageAlt: "Conceptual corporate and SaaS marketing website",
    body:
      "Service firms need clarity: what you do, who you serve, proof of delivery, and a form that reaches the right inbox. We build trust sections and case-study patterns without fake metrics.",
    points: [
      "Service and industry landing pages",
      "Lead-generation forms with validation",
      "Portfolio or case-study layouts",
      "Team and company profile pages",
      "Conversion-focused page rhythm",
    ],
  },
  {
    id: "saas",
    title: "SaaS and custom web applications",
    image: "/brand/website-demos/saas-hero.jpg",
    imageAlt: "Conceptual SaaS product marketing and dashboard preview",
    body:
      "A marketing site sells the product; the application delivers it. We distinguish landing pages from authenticated apps — dashboards, roles, APIs, and scaling concerns are scoped separately from brochure pages.",
    points: [
      "Product marketing and pricing pages",
      "Dashboard UI patterns in design previews",
      "Authentication and role-based access for apps",
      "API and third-party integration planning",
      "Scalable Next.js or Laravel architectures when scoped",
    ],
  },
];

export const WD_PROCESS_STEPS = [
  {
    title: "Discovery and business requirements",
    body: "Workshop on goals, audiences, competitors, integrations, and success measures. You receive a written summary before design spend.",
    deliverable: "Requirements brief and sitemap outline",
  },
  {
    title: "Sitemap, content strategy, and SEO planning",
    body: "Page list, keyword intent per template, internal linking, and migration notes for redesigns.",
    deliverable: "Sitemap, content checklist, SEO plan",
  },
  {
    title: "Visual design and prototype approval",
    body: "Figma or in-browser prototypes for key templates. You approve layout and motion before full build.",
    deliverable: "Approved designs for core templates",
  },
  {
    title: "Development and integration",
    body: "Front-end and CMS implementation, forms, payments, booking hooks, and staging environment for review.",
    deliverable: "Staging site with integrated features",
  },
  {
    title: "Quality assurance and launch",
    body: "Cross-device testing, accessibility checks, performance pass, and redirect verification for migrations.",
    deliverable: "Launch checklist sign-off",
  },
  {
    title: "Handover, measurement, and support",
    body: "CMS training, analytics and Search Console when included, documentation, and optional care plan.",
    deliverable: "Handover pack and support options",
  },
];

export const WD_TECH = {
  title: "Technology chosen for the project — not a single default stack",
  paragraphs: [
    "Some clients need a fast marketing site on Next.js. Others need WordPress because their team lives in the block editor. E-commerce may be WooCommerce or Shopify. Custom portals need APIs, databases, and auth.",
    "We explain trade-offs plainly: CMS sites optimize for editor autonomy; custom-coded sites optimize for performance and unique UX; e-commerce platforms optimize for catalogue scale; custom applications optimize for workflows no plugin fits.",
  ],
  stacks: [
    "Next.js and React for performance-focused marketing and app shells",
    "WordPress and WooCommerce for editor-led sites and shops",
    "Laravel and Node.js for APIs and business applications",
    "Headless integrations with payment, booking, and ERP systems when scoped",
  ],
};

export const WD_PERF_A11Y = {
  title: "Performance, security, and accessibility",
  paragraphs: [
    "We optimize images with responsive sizing and modern formats, keep JavaScript lean on marketing pages, and aim for stable layouts so content does not jump while loading.",
    "Forms use server-side validation where applicable. Applications include role-based access when in scope. We follow semantic HTML, keyboard focus, contrast checks, and reduced-motion preferences.",
    "Backup and recovery depend on hosting choice — we document what your deployment includes. We do not claim certifications unless documented for your contract.",
  ],
  bullets: [
    "Responsive images and lazy loading below the fold",
    "CLS-aware hero and font loading",
    "Secure HTTPS delivery in production",
    "Accessible FAQ and navigation patterns",
    "Dependency updates on maintenance plans",
  ],
};

export const WD_PRICING = {
  title: "What determines your website cost?",
  intro:
    "Published package ranges appear on our Packages pages when available. Every custom quote depends on scope — we provide a written estimate after discovery rather than a one-size-fits-all price.",
  factors: [
    "Number and complexity of page templates",
    "Custom design and illustration requirements",
    "Copywriting and translation",
    "E-commerce, booking, or membership functionality",
    "Third-party integrations and APIs",
    "CMS training and editor workflows",
    "SEO migration and redirect work",
    "Ongoing maintenance and support level",
  ],
  packagesHref: "/packages",
  ctaLabel: "Request a Project Estimate",
};

export const WD_WHY = {
  title: "Why choose Global Orbit",
  paragraphs: [
    "We are an engineering-led studio in United States with delivery overlap for India and the United States — websites, SEO, software, and ERP from one team when you need to grow.",
    "Client sites receive original art direction. Our marketing site demonstrates our craft; your brand does not inherit its layout.",
    "Milestones, staging links, and named contacts keep projects legible for owners and finance. Handover includes documentation so you are not locked to mystery hosting.",
  ],
};

export const WD_RELATED = [
  { label: "Web Development USA", href: "/web-development-usa" },
  { label: "Custom Software Development", href: "/custom-software-development-usa" },
  { label: "ERP Software USA", href: "/erp-software-usa" },
  { label: "SEO Services USA", href: "/seo-services-usa" },
  { label: "Local SEO USA", href: "/local-seo-usa" },
  { label: "E-commerce Development", href: "/service/ecommerce-development-usa" },
  { label: "Hotel Website Development", href: "/hotel-website-development-usa" },
  { label: "Trekking Website Development", href: "/trekking-website-development-usa" },
];

export const WD_FINAL_CTA = {
  title: "Let's Build a Website That Moves Your Business Forward",
  lede:
    "Tell us about your business, the pages you need, integrations, and timeline. We will respond with next steps and a scope conversation — no obligation.",
  primary: "Start Your Project",
  secondary: "Book a Consultation",
  whatsappHref: "https://wa.me/9779812322339",
  whatsappLabel: "WhatsApp +977-9812322339",
};

export const WD_FAQ_EXTENDED = [
  {
    q: "How much does website development cost in USA?",
    a: "Cost depends on pages, design, features, and integrations. Starter packages are listed on our Packages pages from about $299 for simple sites; larger builds are quoted after a brief discovery call.",
  },
  {
    q: "How long does it take to build a professional website?",
    a: "Many business sites ship in roughly six to ten weeks after scope approval — design, build, content, SEO pass, and launch. Complex e-commerce or applications take longer; we estimate per project.",
  },
  {
    q: "Do you provide custom website design?",
    a: "Yes. Every client receives art direction and layouts created for their brand, not a copy of our homepage.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We plan redirects, preserve valuable URLs where possible, and stage migrations with Search Console monitoring. Rankings are never guaranteed.",
  },
  {
    q: "Will my website work on mobile phones and tablets?",
    a: "Yes. Responsive layouts are standard. We test representative phone and tablet widths before launch.",
  },
  {
    q: "Can you build an e-commerce website?",
    a: "Yes — WooCommerce, Shopify, or custom cart flows depending on catalogue size and operations.",
  },
  {
    q: "Do you develop hotel and trekking websites?",
    a: "Yes. Hospitality and adventure travel are core verticals — see our hotel and trekking landing pages and portfolio.",
  },
  {
    q: "Can you integrate online payments?",
    a: "Yes when gateways such as Stripe, eSewa, or Khalti are in scope. Integration work is documented in your quote.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "We implement technical SEO foundations — metadata, headings, sitemaps, canonical URLs, and performance budgets. Rankings depend on competition and ongoing content; we do not promise page-one positions.",
  },
  {
    q: "Can you migrate my existing website without unnecessary ranking losses?",
    a: "We use redirect maps and staged cutovers to reduce risk. Search engines ultimately control indexing; we monitor and adjust after launch.",
  },
  {
    q: "Will I be able to update website content myself?",
    a: "Yes when a CMS is included. We train your team on the editor you will use day to day.",
  },
  {
    q: "Do you provide website maintenance and support?",
    a: "Yes — monthly care plans cover updates, backups, security patches, and small content changes when agreed.",
  },
  {
    q: "Can you integrate third-party booking or business systems?",
    a: "Yes when APIs and credentials are available. Scope defines which systems connect in phase one versus later.",
  },
  {
    q: "Do you provide domain registration and hosting assistance?",
    a: "We advise on DNS, hosting, and SSL setup and can manage deployment on infrastructure you own or we provision per contract.",
  },
  {
    q: "What information should I prepare before requesting a quotation?",
    a: "Brand assets, example sites you like, page list, languages, integrations, and target launch window help us quote accurately.",
  },
  {
    q: "How can I start a website development project with Global Orbit?",
    a: "Contact us via the form, book a consultation, or message WhatsApp +977-9812322339 with your industry and goals.",
  },
];
