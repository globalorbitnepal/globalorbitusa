export type FallbackNavItem = {
  label: string;
  href: string;
  location: "HEADER" | "FOOTER";
};

export const FALLBACK_SITE = {
  companyName: "Global Orbit Pvt Ltd",
  tagline: "Studios in the United States, India, and Nepal",
  email: "support@theglobalorbit.com",
  phone: "+1 (646) 907-4410",
  address: "United States · India · Nepal",
  defaultSeoTitle: "Global Orbit | Web Development & Software Company in USA",
  defaultSeoDescription:
    "Global Orbit helps U.S. businesses with website development, custom software, mobile apps, SEO and digital marketing. Contact our United States team for a consultation.",
} as const;

export const FALLBACK_HEADER_NAV: FallbackNavItem[] = [
  { label: "Overview", href: "/", location: "HEADER" },
  { label: "ERP Software", href: "/orbit-software", location: "HEADER" },
  { label: "Solutions", href: "/services", location: "HEADER" },
  { label: "Our Work", href: "/projects", location: "HEADER" },
  { label: "About Us", href: "/about", location: "HEADER" },
  { label: "Contact", href: "/contact", location: "HEADER" },
];

export const FALLBACK_FOOTER_NAV: FallbackNavItem[] = [
  { label: "Home", href: "/", location: "FOOTER" },
  { label: "About", href: "/about", location: "FOOTER" },
  { label: "Services", href: "/services", location: "FOOTER" },
  { label: "Projects", href: "/projects", location: "FOOTER" },
  { label: "Contact", href: "/contact", location: "FOOTER" },
];
