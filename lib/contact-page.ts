export const CONTACT_HERO = {
  eyebrow: "Contact · Free consultation",
  titleBefore: "Tell us what you run.",
  titleAccent: "We reply with a plan.",
  titleAfter: "Not a pitch deck.",
  lede:
    "Websites, custom apps, ERP, billing, SaaS, and SEO — from studios in USA, India, and global clients. Share what must not break, who the customer is, and when you need to be live.",
};

export const CONTACT_STATS = [
  { value: "< 24h", label: "First response on business days" },
  { value: "3", label: "Sales offices · NP · IN · US" },
  { value: "Free", label: "Consultation · no obligation" },
  { value: "NP", label: "United States sales desk" },
] as const;

export const CONTACT_CHANNELS = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    hint: "Fastest for USA & international",
    href: "https://wa.me/9779812322339",
    external: true,
    value: "+977-9812322339",
  },
  {
    id: "phone",
    title: "Call USA",
    hint: "Sales & project desk",
    href: "tel:+9779823631899",
    external: false,
    value: "+977-9823631899",
  },
  {
    id: "email",
    title: "Email",
    hint: "Briefs, RFPs, attachments",
    href: "mailto:sales@theglobalorbit.com",
    external: false,
    value: "sales@theglobalorbit.com",
  },
  {
    id: "webmail",
    title: "Business mail",
    hint: "Existing clients",
    href: "https://webmail.globalorbitmail.cloud/",
    external: true,
    value: "Webmail login",
  },
] as const;

export const CONTACT_BRIEF_POINTS = [
  "What you operate (hotel, factory, agency, SaaS, etc.)",
  "What must not break during launch",
  "Must-have integrations (PMS, POS, WhatsApp, payment)",
  "Target go-live date and budget range",
  "Links to your current site or competitor references",
] as const;

export const CONTACT_PROCESS = [
  {
    step: "01",
    title: "You reach out",
    body: "Form, WhatsApp, or email — whichever fits. We read the full brief, not just the subject line.",
  },
  {
    step: "02",
    title: "Discovery call",
    body: "30–45 minutes to map scope, risks, and timeline. You get a named contact, not a ticket queue.",
  },
  {
    step: "03",
    title: "Written scope",
    body: "Milestones, stack, SEO pass, and support — in plain language finance can approve.",
  },
  {
    step: "04",
    title: "Build & launch",
    body: "Design, engineering, QA, and go-live with aftercare. Same team from first call to production.",
  },
] as const;

export const CONTACT_TOPICS = [
  { title: "Website & web apps", body: "Marketing sites, Next.js products, demos, and SEO-ready launches." },
  { title: "ERP & operations", body: "Hotel PMS, warehouse, manufacturing, POS, billing, and OTA flows." },
  { title: "Mobile & custom apps", body: "Android, iOS, and responsive portals for staff and customers." },
  { title: "AI & automation", body: "Workflows, WhatsApp bots, invoice capture — with human gates and logs." },
  { title: "SEO & growth", body: "Technical SEO, local ranking, Core Web Vitals, and content structure." },
  { title: "Care & retainers", body: "Hosting guidance, updates, monitoring, and long-term improvement." },
] as const;

export const CONTACT_FAQ = [
  {
    q: "Is the consultation really free?",
    a: "Yes. The first call is to understand fit and scope. If we are not the right firm, we say so early.",
  },
  {
    q: "How fast do you respond?",
    a: "WhatsApp and form enquiries are typically answered within one business day. Urgent production issues from existing clients are prioritized.",
  },
  {
    q: "Do you work outside USA?",
    a: "Yes. We ship for clients in 25+ countries with delivery from USA, India, and global clients.",
  },
  {
    q: "What should I send before the call?",
    a: "Current site URL, examples you like, integrations you cannot change, and your hard launch date.",
  },
  {
    q: "Can you fix or rebuild an existing site?",
    a: "Often yes — we audit performance, SEO, and code first, then propose rebuild vs incremental fix.",
  },
] as const;
