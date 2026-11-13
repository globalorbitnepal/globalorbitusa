import type { ReactNode } from "react";

function I({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="go-cms-nav-svg">
      {children}
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ADMIN_NAV_ICONS = {
  dashboard: (
    <I>
      <rect x="3.5" y="3.5" width="7.2" height="7.2" rx="1.6" {...stroke} />
      <rect x="13.3" y="3.5" width="7.2" height="7.2" rx="1.6" {...stroke} />
      <rect x="3.5" y="13.3" width="7.2" height="7.2" rx="1.6" {...stroke} />
      <rect x="13.3" y="13.3" width="7.2" height="7.2" rx="1.6" {...stroke} />
    </I>
  ),
  home: (
    <I>
      <path d="M4 11.2 12 4.5 20 11.2" {...stroke} />
      <path d="M6.2 10.4V19h11.6v-8.6" {...stroke} />
    </I>
  ),
  about: (
    <I>
      <circle cx="12" cy="8" r="3.1" {...stroke} />
      <path d="M5.4 19.2c.7-3.2 3.3-5 6.6-5s5.9 1.8 6.6 5" {...stroke} />
    </I>
  ),
  software: (
    <I>
      <rect x="4" y="4" width="16" height="16" rx="3" {...stroke} />
      <path d="M4 9.2h16M9.2 9.2V20" {...stroke} />
    </I>
  ),
  website: (
    <I>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <path d="M4.4 12h15.2M12 4.2c2.4 2.4 3.6 5 3.6 7.8S14.4 17.4 12 19.8C9.6 17.4 8.4 14.8 8.4 12S9.6 6.6 12 4.2Z" {...stroke} />
    </I>
  ),
  projects: (
    <I>
      <rect x="3.8" y="6.2" width="16.4" height="13" rx="2" {...stroke} />
      <path d="M8.2 6.2V5.4A2.4 2.4 0 0 1 10.6 3h2.8A2.4 2.4 0 0 1 15.8 5.4v.8" {...stroke} />
    </I>
  ),
  careers: (
    <I>
      <rect x="3.6" y="8" width="16.8" height="11.4" rx="2" {...stroke} />
      <path d="M8.2 8V6.4A1.8 1.8 0 0 1 10 4.6h4A1.8 1.8 0 0 1 15.8 6.4V8M3.6 12.6h16.8" {...stroke} />
    </I>
  ),
  contact: (
    <I>
      <rect x="3.6" y="5.4" width="16.8" height="13.2" rx="2.2" {...stroke} />
      <path d="m4.4 7.2 7.6 6.2 7.6-6.2" {...stroke} />
    </I>
  ),
  pin: (
    <I>
      <path d="M12 21s6.4-5.2 6.4-10.2A6.4 6.4 0 0 0 5.6 10.8C5.6 15.8 12 21 12 21Z" {...stroke} />
      <circle cx="12" cy="10.8" r="2.1" {...stroke} />
    </I>
  ),
  hire: (
    <I>
      <circle cx="10" cy="8" r="3" {...stroke} />
      <path d="M4.6 19c.6-3 2.8-4.6 5.4-4.6 1.1 0 2.1.3 3 .8M16.6 11.2v6.4M13.4 14.4h6.4" {...stroke} />
    </I>
  ),
  tag: (
    <I>
      <path d="M12.8 4.6h6.6v6.6L11.2 19.4a2 2 0 0 1-2.8 0L4.6 15.6a2 2 0 0 1 0-2.8Z" {...stroke} />
      <circle cx="16.2" cy="7.8" r="1" fill="currentColor" />
    </I>
  ),
  web: (
    <I>
      <rect x="3.6" y="5" width="16.8" height="14" rx="2.2" {...stroke} />
      <path d="M3.6 9h16.8M7 6.8h.8M9.2 6.8h.8" {...stroke} />
    </I>
  ),
  android: (
    <I>
      <rect x="7" y="8.2" width="10" height="11" rx="2.2" {...stroke} />
      <path d="M9.2 8.2V6.4A2.8 2.8 0 0 1 12 3.6a2.8 2.8 0 0 1 2.8 2.8v1.8M9.4 19.2v1.6M14.6 19.2v1.6" {...stroke} />
    </I>
  ),
  ios: (
    <I>
      <rect x="8" y="3.4" width="8" height="17.2" rx="2.4" {...stroke} />
      <path d="M11 5.2h2M12 18.6h.01" {...stroke} />
    </I>
  ),
  packages: (
    <I>
      <path d="M4.4 8.2 12 4.4l7.6 3.8v7.6L12 19.6 4.4 15.8Z" {...stroke} />
      <path d="M12 4.4v15.2M4.4 8.2 12 12l7.6-3.8" {...stroke} />
    </I>
  ),
  services: (
    <I>
      <path d="M12 3.6 13.4 9H19l-4.4 3.2 1.6 5.4L12 14.8 7.8 17.6l1.6-5.4L5 9h5.6Z" {...stroke} />
    </I>
  ),
  blogs: (
    <I>
      <path d="M6 4.6h9.2A2.4 2.4 0 0 1 17.6 7v13H8A2 2 0 0 1 6 18Z" {...stroke} />
      <path d="M9.2 8.4h5.2M9.2 11.6h5.2M9.2 14.8h3.4" {...stroke} />
    </I>
  ),
  studio: (
    <I>
      <path d="M4.4 16.6 14.8 6.2a2.4 2.4 0 0 1 3.4 3.4L7.8 20H4.4Z" {...stroke} />
      <path d="M13.2 7.8 16.4 11" {...stroke} />
    </I>
  ),
  orbit: (
    <I>
      <circle cx="12" cy="12" r="3" {...stroke} />
      <ellipse cx="12" cy="12" rx="9" ry="4.2" {...stroke} />
    </I>
  ),
  privacy: (
    <I>
      <path d="M12 3.8 19.2 7v5.2c0 4.4-3 6.8-7.2 8-4.2-1.2-7.2-3.6-7.2-8V7Z" {...stroke} />
      <path d="m9.2 12.2 1.8 1.8 3.8-3.8" {...stroke} />
    </I>
  ),
  terms: (
    <I>
      <path d="M7 4.4h7.2L19 9.2V19a1.6 1.6 0 0 1-1.6 1.6H7A1.6 1.6 0 0 1 5.4 19V6A1.6 1.6 0 0 1 7 4.4Z" {...stroke} />
      <path d="M14.1 4.6V9H19M8.4 13h7M8.4 16.2h5" {...stroke} />
    </I>
  ),
  compose: (
    <I>
      <rect x="4" y="4" width="16" height="16" rx="3" {...stroke} />
      <path d="M12 8v8M8 12h8" {...stroke} />
    </I>
  ),
  categories: (
    <I>
      <path d="M4.2 8.4h7.2l1.6 1.8H19.8v7.6A1.8 1.8 0 0 1 18 19.6H6A1.8 1.8 0 0 1 4.2 17.8Z" {...stroke} />
      <path d="M8 8.4V6.6A1.6 1.6 0 0 1 9.6 5h3.4" {...stroke} />
    </I>
  ),
  media: (
    <I>
      <rect x="3.6" y="5.4" width="16.8" height="13.2" rx="2.2" {...stroke} />
      <circle cx="9" cy="10.2" r="1.6" {...stroke} />
      <path d="m6.4 16.8 3.8-3.6 2.6 2.4 2.2-2 2.6 3.2" {...stroke} />
    </I>
  ),
  drafts: (
    <I>
      <path d="M5 19.2 14.6 9.6l3.8 3.8L8.8 23H5Z" {...stroke} />
      <path d="M13.2 8.2 16 5.4a1.8 1.8 0 0 1 2.6 0l1 1a1.8 1.8 0 0 1 0 2.6L16.8 12" {...stroke} />
    </I>
  ),
  search: (
    <I>
      <circle cx="11" cy="11" r="6.2" {...stroke} />
      <path d="m15.6 15.6 4 4" {...stroke} />
    </I>
  ),
  seo: (
    <I>
      <path d="M5 7h14M5 12h10M5 17h7" {...stroke} />
      <circle cx="17.4" cy="16.4" r="2.4" {...stroke} />
      <path d="m19 18.2 1.8 1.8" {...stroke} />
    </I>
  ),
  chrome: (
    <I>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.2" {...stroke} />
      <path d="M3.5 9.2h17M7 6.8h.9M9.2 6.8h.9" {...stroke} />
    </I>
  ),
  account: (
    <I>
      <rect x="5.2" y="11" width="13.6" height="8.6" rx="2" {...stroke} />
      <path d="M8 11V8.2a4 4 0 0 1 8 0V11" {...stroke} />
    </I>
  ),
  inquiries: (
    <I>
      <path d="M4.4 7.2h15.2v11H8.2L4.4 21Z" {...stroke} />
      <path d="M8 11.2h8M8 14.2h5.2" {...stroke} />
    </I>
  ),
} as const;

export type AdminNavIconKey = keyof typeof ADMIN_NAV_ICONS;

const PAGE_ICONS: Record<string, AdminNavIconKey> = {
  home: "home",
  about: "about",
  software: "software",
  "website-development": "website",
  projects: "projects",
  careers: "careers",
  contact: "contact",
  "denver-website-design": "pin",
  "hire-developer-usa": "hire",
  "affordable-website-usa": "tag",
  "web-apps": "web",
  "android-apps": "android",
  "ios-apps": "ios",
  packages: "packages",
  services: "services",
  blogs: "blogs",
  studio: "studio",
  "inside-orbit": "orbit",
  privacy: "privacy",
  terms: "terms",
};

export function adminPageIcon(pageId: string): ReactNode {
  return ADMIN_NAV_ICONS[PAGE_ICONS[pageId] ?? "website"];
}
