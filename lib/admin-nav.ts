export type EditorSection =
  | "hero"
  | "need"
  | "work"
  | "software"
  | "about"
  | "careers"
  | "projects"
  | "customApps"
  | "appointments"
  | "homeSurface"
  | "websiteDevelopment";

export type AdminPageId =
  | "home"
  | "about"
  | "projects"
  | "careers"
  | "software"
  | "web-apps"
  | "android-apps"
  | "ios-apps"
  | "contact"
  | "blogs"
  | "packages"
  | "services"
  | "website-development"
  | "privacy"
  | "terms"
  | "studio"
  | "inside-orbit";

export type AdminView =
  | "overview"
  | "page"
  | "seo"
  | "chrome"
  | "inquiries"
  | "blogs";

export type SectionId = EditorSection | "seo" | "hub";

export type AdminSection = {
  id: SectionId;
  label: string;
  hint: string;
};

export type AdminNavGroup = {
  id: string;
  label: string;
  pageIds: AdminPageId[];
};

export type AdminPage = {
  id: AdminPageId;
  label: string;
  path: string;
  hint?: string;
  editor?: EditorSection;
  platformSlug?: "web-apps" | "android-apps" | "ios-apps";
  sections: AdminSection[];
  seoOnly?: boolean;
};

export const ADMIN_PAGES: AdminPage[] = [
  {
    id: "home",
    label: "Homepage",
    path: "/",
    hint: "Hero, need, work, SEO",
    editor: "hero",
    sections: [
      { id: "hero", label: "Hero", hint: "Eyebrow, headline, CTAs, video" },
      { id: "need", label: "Why you need us", hint: "Stats, slides, video" },
      { id: "software", label: "Enterprise software", hint: "Product cards" },
      { id: "work", label: "Websites we ship", hint: "Globe mosaic tiles" },
      { id: "homeSurface", label: "Process · portfolio · FAQ · CTA", hint: "Lower homepage copy" },
      { id: "seo", label: "SEO", hint: "Title, description, robots" },
    ],
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    hint: "Story, timeline, team",
    editor: "about",
    sections: [
      { id: "about", label: "Page content", hint: "Story, timeline, team, CTA" },
      { id: "seo", label: "SEO", hint: "Metadata for /about" },
    ],
  },
  {
    id: "software",
    label: "Orbit Software",
    path: "/orbit-software",
    hint: "ERP & product cards",
    editor: "software",
    sections: [
      { id: "software", label: "Products", hint: "ERP and product cards" },
      { id: "seo", label: "SEO", hint: "Metadata for /orbit-software" },
    ],
  },
  {
    id: "web-apps",
    label: "Web Apps",
    path: "/orbit-software/web-apps",
    hint: "Hero video, clips, copy",
    editor: "customApps",
    platformSlug: "web-apps",
    sections: [
      { id: "customApps", label: "Page content", hint: "Hero video, four clips, all copy" },
      { id: "seo", label: "SEO", hint: "Metadata for web apps page" },
    ],
  },
  {
    id: "android-apps",
    label: "Android Apps",
    path: "/orbit-software/android-apps",
    hint: "Hero video, clips, copy",
    editor: "customApps",
    platformSlug: "android-apps",
    sections: [
      { id: "customApps", label: "Page content", hint: "Hero video, four clips, all copy" },
      { id: "seo", label: "SEO", hint: "Metadata for Android page" },
    ],
  },
  {
    id: "ios-apps",
    label: "iOS Apps",
    path: "/orbit-software/ios-apps",
    hint: "Hero video, clips, copy",
    editor: "customApps",
    platformSlug: "ios-apps",
    sections: [
      { id: "customApps", label: "Page content", hint: "Hero video, four clips, all copy" },
      { id: "seo", label: "SEO", hint: "Metadata for iOS page" },
    ],
  },
  {
    id: "projects",
    label: "Portfolio",
    path: "/projects",
    hint: "Demos, stats, CTA",
    editor: "projects",
    sections: [
      { id: "projects", label: "Page content", hint: "Demos, stats, CTA" },
      { id: "seo", label: "SEO", hint: "Metadata for /projects" },
    ],
  },
  {
    id: "careers",
    label: "Careers",
    path: "/careers",
    hint: "Roles, culture, apply",
    editor: "careers",
    sections: [
      { id: "careers", label: "Page content", hint: "Roles, culture, apply" },
      { id: "seo", label: "SEO", hint: "Metadata for /careers" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    hint: "Appointments, inquiries",
    editor: "appointments",
    sections: [
      { id: "appointments", label: "Appointment inbox", hint: "Book Appointment form" },
      { id: "seo", label: "SEO", hint: "Metadata for /contact" },
    ],
  },
  {
    id: "website-development",
    label: "Website Development USA",
    path: "/service/website-development-usa",
    hint: "Full page editor",
    sections: [
      {
        id: "websiteDevelopment",
        label: "Full page editor",
        hint: "Hero, images, demos, industries, services, FAQ, CTAs",
      },
      { id: "seo", label: "SEO", hint: "Title, description, robots for this service page" },
    ],
  },
  {
    id: "blogs",
    label: "Blog",
    path: "/blogs",
    hint: "Posts, categories, tags",
    seoOnly: true,
    sections: [{ id: "seo", label: "SEO", hint: "Posts: Blog & content → All Posts" }],
  },
  {
    id: "studio",
    label: "Studio",
    path: "/studio",
    hint: "Design studio page",
    seoOnly: true,
    sections: [{ id: "seo", label: "SEO", hint: "Metadata for /studio" }],
  },
  {
    id: "inside-orbit",
    label: "Inside Orbit",
    path: "/inside-orbit",
    hint: "Process story",
    seoOnly: true,
    sections: [{ id: "seo", label: "SEO", hint: "Metadata for /inside-orbit" }],
  },
  {
    id: "packages",
    label: "Packages",
    path: "/packages",
    hint: "Pricing catalog",
    seoOnly: true,
    sections: [{ id: "seo", label: "SEO", hint: "Catalog copy is code; metadata is editable" }],
  },
  {
    id: "services",
    label: "Solutions",
    path: "/services",
    hint: "Solutions catalog",
    seoOnly: true,
    sections: [{ id: "seo", label: "SEO", hint: "Catalog copy is code; metadata is editable" }],
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    path: "/privacy-policy",
    hint: "Policy metadata",
    seoOnly: true,
    sections: [{ id: "seo", label: "SEO", hint: "Metadata only" }],
  },
  {
    id: "terms",
    label: "Terms",
    path: "/terms-and-conditions",
    hint: "Legal metadata",
    seoOnly: true,
    sections: [{ id: "seo", label: "SEO", hint: "Metadata only" }],
  },
];

/** Sidebar groups — matches live site structure. */
export const ADMIN_NAV_GROUPS: AdminNavGroup[] = [
  {
    id: "main",
    label: "Main website",
    pageIds: ["home", "about", "software", "website-development", "projects", "careers", "contact"],
  },
  {
    id: "platforms",
    label: "App platforms",
    pageIds: ["web-apps", "android-apps", "ios-apps"],
  },
  {
    id: "catalog",
    label: "Catalog & legal",
    pageIds: ["packages", "services", "blogs", "studio", "inside-orbit", "privacy", "terms"],
  },
];

export function adminPageById(id: string) {
  return ADMIN_PAGES.find((page) => page.id === id);
}

export function adminPageByPath(path: string) {
  return ADMIN_PAGES.find((page) => page.path === path);
}
