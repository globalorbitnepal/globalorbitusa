export type ServiceSlug =
  | "web-development"
  | "hosting"
  | "seo"
  | "digital-solutions";

export type ServiceContent = {
  slug: ServiceSlug;
  index: string;
  title: string;
  summary: string;
  hero: string;
  needTitle: string;
  need: string;
  provideTitle: string;
  provide: string[];
  processTitle: string;
  process: { step: string; title: string; body: string }[];
  benefitsTitle: string;
  benefits: string[];
  seoTitle: string;
  seoDescription: string;
};

export const SERVICE_CATALOG: ServiceContent[] = [
  {
    slug: "web-development",
    index: "01",
    title: "Web development",
    summary:
      "Websites and web applications built to be operated, not abandoned after launch week.",
    hero: "Software you can explain to the person who will run it on a Tuesday morning.",
    needTitle: "The need",
    need: "Most organisations do not need another brochure. They need a site or application that staff can update, that search engines can read, and that does not collapse the first time a campaign actually works. We start from that operational reality.",
    provideTitle: "What we provide",
    provide: [
      "Public websites with clear information architecture and durable page templates",
      "Authenticated areas for customers, partners, or staff",
      "Integrations with the tools you already use, instead of a forced rebuild",
      "Accessibility, performance, and a handover your team can actually follow",
    ],
    processTitle: "How we work",
    process: [
      {
        step: "01",
        title: "Map the work",
        body: "We write down who uses the system, what must not break, and which pages or flows earn their keep.",
      },
      {
        step: "02",
        title: "Build in the open",
        body: "Regular reviews against the real content—not lorem ipsum. Decisions are recorded, not buried in chat.",
      },
      {
        step: "03",
        title: "Launch and stay",
        body: "Deployment, monitoring, and a period of aftercare so the first production surprises are ours to catch.",
      },
    ],
    benefitsTitle: "What you leave with",
    benefits: [
      "A codebase and CMS shape your team can live with",
      "No mystery plugins as the source of truth",
      "A named person at Global Orbit USA after go-live",
    ],
    seoTitle: "Web development in United States",
    seoDescription:
      "Custom websites and web applications from Global Orbit USA: clear structure, accessible interfaces, and delivery that continues after launch.",
  },
  {
    slug: "hosting",
    index: "02",
    title: "Hosting",
    summary:
      "Hosting and operations with an explainable stack, backups you can test, and ownership that is written down.",
    hero: "Keep the site up. Keep the story of how it stays up equally clear.",
    needTitle: "The need",
    need: "Hosting fails in the dark: an expired certificate, a forgotten backup, a dashboard nobody can log into. We treat hosting as an operating practice—access, updates, recovery—not a shared password in an email thread.",
    provideTitle: "What we provide",
    provide: [
      "Environment design for the application you actually run",
      "TLS, backups, and restore drills documented for your team",
      "Deployment paths that do not require heroics at midnight",
      "Clear boundaries: what we operate, what you own, what third parties own",
    ],
    processTitle: "How we work",
    process: [
      {
        step: "01",
        title: "Inventory",
        body: "Domains, DNS, certificates, application servers, and who currently holds the keys.",
      },
      {
        step: "02",
        title: "Harden the path",
        body: "Least-privilege access, isolated services, and a restore plan that has been tried once on purpose.",
      },
      {
        step: "03",
        title: "Operate",
        body: "Updates and incident habits agreed in writing. No silent changes to production.",
      },
    ],
    benefitsTitle: "What you leave with",
    benefits: [
      "A hosting picture a new staff member can understand in one sitting",
      "Backups that are more than a checkbox",
      "Separation from unrelated applications on the same infrastructure",
    ],
    seoTitle: "Website hosting and operations",
    seoDescription:
      "Hosting from Global Orbit USA: documented operations, backups, and access control for organisations that need their site to stay theirs.",
  },
  {
    slug: "seo",
    index: "03",
    title: "SEO",
    summary:
      "Search work rooted in the pages you publish—structure, speed, and honest titles—not rented rankings.",
    hero: "Be findable for the work you actually do.",
    needTitle: "The need",
    need: "Search visibility is mostly a publishing problem: unclear titles, thin pages, and sites that hide the useful sentence. We do not sell guaranteed positions. We make the site easier for people and crawlers to understand, then measure what changed.",
    provideTitle: "What we provide",
    provide: [
      "Technical foundations: crawlability, canonicals, metadata, and sensible URLs",
      "Page-level titles and descriptions that match the content",
      "Internal linking so important work is not orphaned",
      "A written baseline so later changes can be compared without folklore",
    ],
    processTitle: "How we work",
    process: [
      {
        step: "01",
        title: "Read the site",
        body: "Indexation, duplicates, and the pages that already attract useful visits.",
      },
      {
        step: "02",
        title: "Fix the structure",
        body: "Headings, metadata, and internal links before anyone talks about campaigns.",
      },
      {
        step: "03",
        title: "Publish on purpose",
        body: "A cadence for pages worth ranking—services, news, answers—not filler.",
      },
    ],
    benefitsTitle: "What you leave with",
    benefits: [
      "A site that states what you do in language a stranger can use",
      "No dependency on a black-box ‘boost’",
      "Room to add real articles when you have something to say",
    ],
    seoTitle: "SEO for company websites",
    seoDescription:
      "Search engine foundations from Global Orbit USA: technical structure, honest metadata, and publishing discipline—without promised rankings.",
  },
  {
    slug: "digital-solutions",
    index: "04",
    title: "Digital solutions",
    summary:
      "The joins between products: forms, records, workflows, and the unglamorous systems that make a company feel coherent.",
    hero: "When the website is not the whole job.",
    needTitle: "The need",
    need: "Enquiries sitting in inboxes, spreadsheets as the source of truth, and three tools that almost talk to each other. Digital solutions here means the operational layer: capture, route, store, and report—without inventing a platform you cannot staff.",
    provideTitle: "What we provide",
    provide: [
      "Enquiry and intake flows that land in a system you control",
      "Lightweight internal tools instead of another unused SaaS seat",
      "Integrations chosen for fit, not a partner brochure",
      "Documentation so the next change is not an archaeological dig",
    ],
    processTitle: "How we work",
    process: [
      {
        step: "01",
        title: "Follow one job",
        body: "We pick a real workflow—a quote, an application, a renewal—and map every hand-off.",
      },
      {
        step: "02",
        title: "Narrow the build",
        body: "Ship the smallest system that removes the pain. Expand only when the first path is quiet.",
      },
      {
        step: "03",
        title: "Hand over ownership",
        body: "Who edits what, where data lives, and how to ask for the next change.",
      },
    ],
    benefitsTitle: "What you leave with",
    benefits: [
      "Fewer silent drop-offs between website and operations",
      "Data that belongs to you",
      "A scope you can explain to finance without a second language",
    ],
    seoTitle: "Digital solutions and integrations",
    seoDescription:
      "Operational digital solutions from Global Orbit USA: enquiry flows, internal tools, and integrations that match how the organisation already works.",
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICE_CATALOG.find((service) => service.slug === slug);
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return SERVICE_CATALOG.some((service) => service.slug === slug);
}
