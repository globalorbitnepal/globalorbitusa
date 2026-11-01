import {
  ORBIT_BRAND,
  ORBIT_FOOTER_LEGAL,
  ORBIT_FOOTER_QUICK,
  ORBIT_FOOTER_SERVICES,
  ORBIT_FOOTER_STATS,
} from "@/lib/orbit/brand";

export type FooterStatIcon = "rocket" | "clients" | "star";

export type FooterStat = {
  label: string;
  icon: FooterStatIcon;
};

export type FooterNavLink = {
  label: string;
  href: string;
  icon: string;
};

export type FooterOffice = {
  code: string;
  country: string;
  phone: string;
  phoneHref: string;
  email: string;
};

export type FooterSocialLink = {
  label: string;
  href: string;
};

export type FooterLegalLink = {
  label: string;
  href: string;
};

export type FooterConfig = {
  exploreHeading: string;
  servicesHeading: string;
  officesHeading: string;
  stats: FooterStat[];
  explore: FooterNavLink[];
  services: FooterNavLink[];
  offices: FooterOffice[];
  connectTitle: string;
  connectLede: string;
  subscribePlaceholder: string;
  subscribeButton: string;
  social: FooterSocialLink[];
  legal: FooterLegalLink[];
};

export const DEFAULT_FOOTER_CONFIG: FooterConfig = {
  exploreHeading: "Explore",
  servicesHeading: "Services",
  officesHeading: "Sales offices",
  stats: ORBIT_FOOTER_STATS.map((s) => ({ label: s.label, icon: s.icon })),
  explore: ORBIT_FOOTER_QUICK.map((s) => ({ label: s.label, href: s.href, icon: s.icon })),
  services: ORBIT_FOOTER_SERVICES.map((s) => ({ label: s.label, href: s.href, icon: s.icon })),
  offices: ORBIT_BRAND.salesOffices.map((o) => ({
    code: o.code,
    country: o.country,
    phone: o.phone,
    phoneHref: o.phoneHref,
    email: o.email,
  })),
  connectTitle: "Connect with us",
  connectLede:
    "Follow for product launches, SEO insights, and stories from client projects worldwide.",
  subscribePlaceholder: "Enter your email address",
  subscribeButton: "Subscribe",
  social: ORBIT_BRAND.social.map((s) => ({ label: s.label, href: s.href })),
  legal: ORBIT_FOOTER_LEGAL.map((l) => ({ label: l.label, href: l.href })),
};

const STALE_FOOTER_STATS = new Set([
  "3 Studios · NP · IN · US",
  "United States engineering",
]);

function normalizeFooterStats(stats?: FooterStat[]): FooterStat[] {
  if (!stats?.length) return DEFAULT_FOOTER_CONFIG.stats;
  const jammed = stats.some((stat) => STALE_FOOTER_STATS.has(stat.label));
  if (jammed) return DEFAULT_FOOTER_CONFIG.stats;
  return stats;
}

export function mergeFooterConfig(partial: Partial<FooterConfig> | null | undefined): FooterConfig {
  if (!partial) return DEFAULT_FOOTER_CONFIG;
  return {
    ...DEFAULT_FOOTER_CONFIG,
    ...partial,
    stats: normalizeFooterStats(partial.stats),
    explore: partial.explore?.length ? partial.explore : DEFAULT_FOOTER_CONFIG.explore,
    services: partial.services?.length ? partial.services : DEFAULT_FOOTER_CONFIG.services,
    offices: partial.offices?.length ? partial.offices : DEFAULT_FOOTER_CONFIG.offices,
    social: partial.social?.length ? partial.social : DEFAULT_FOOTER_CONFIG.social,
    legal: partial.legal?.length ? partial.legal : DEFAULT_FOOTER_CONFIG.legal,
  };
}
