export type HeaderNavLink = {
  label: string;
  href?: string;
  children?: HeaderNavLink[];
};

export type HeaderNavItem =
  | HeaderNavLink
  | {
      label: string;
      children: HeaderNavLink[];
    };

export function isNavDropdown(item: HeaderNavItem): item is { label: string; children: HeaderNavLink[] } {
  return "children" in item && Array.isArray(item.children);
}

function hasHref(link: HeaderNavLink): link is HeaderNavLink & { href: string } {
  return typeof link.href === "string" && link.href.length > 0;
}

export function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function navLinkTreeActive(pathname: string, link: HeaderNavLink): boolean {
  if (hasHref(link) && navLinkActive(pathname, link.href)) return true;
  return link.children?.some((child) => navLinkTreeActive(pathname, child)) ?? false;
}

/** Primary studio header — matches Metaminds-style pill + Services flyout. */
export const STUDIO_HEADER_NAV: HeaderNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: [
      {
        label: "APPS",
        children: [
          { label: "Android Apps", href: "/orbit-software/android-apps" },
          { label: "iOS Apps", href: "/orbit-software/ios-apps" },
          { label: "Web Apps", href: "/orbit-software/web-apps" },
        ],
      },
      { label: "Website", href: "/service/website-development-usa" },
      { label: "ERP Software", href: "/orbit-software" },
      { label: "AI Automation", href: "/service/ai-automation" },
    ],
  },
  { label: "Portfolio", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
