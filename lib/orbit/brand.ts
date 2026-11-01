import {
  USA_PHONE_DISPLAY,
  USA_PHONE_TEL,
  USA_SALES_EMAIL,
  USA_SUPPORT_EMAIL,
  USA_WHATSAPP_URL,
} from "@/lib/contact-info";

export const ORBIT_BRAND = {
  name: "Global Orbit Pvt Ltd",
  phones: [
    { label: USA_PHONE_DISPLAY, href: USA_PHONE_TEL },
  ],
  email: USA_SUPPORT_EMAIL,
  salesEmail: USA_SALES_EMAIL,
  webmail: "https://webmail.globalorbitmail.cloud/",
  whatsapp: USA_WHATSAPP_URL,
  address: "United States · India · Nepal",
  offices: [
    { name: "United States", country: "USA", code: "us", role: "Sales & client success" },
    { name: "India", country: "India", code: "in", role: "Delivery studio" },
    { name: "Nepal", country: "Nepal", code: "np", role: "Engineering studio" },
  ],
  salesOffices: [
    {
      code: "us",
      country: "United States",
      city: "United States",
      landmark: "Sales office · USA",
      image: "/brand/offices/usa.jpg",
      phone: USA_PHONE_DISPLAY,
      phoneHref: USA_PHONE_TEL,
      email: USA_SALES_EMAIL,
    },
    {
      code: "in",
      country: "India",
      city: "Delhi (NCR)",
      landmark: "Sales office · India",
      image: "/brand/offices/india.jpg",
      phone: "+91 11 3500 7890",
      phoneHref: "tel:+911135007890",
      email: "india@theglobalorbit.com",
    },
    {
      code: "np",
      country: "Nepal",
      city: "Kathmandu",
      landmark: "Engineering studio · Nepal",
      image: "/brand/offices/nepal.jpg",
      phone: "+977-9823631899",
      phoneHref: "tel:+9779823631899",
      email: "sales@theglobalorbit.com",
    },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/globalorbit" },
    { label: "Instagram", href: "https://www.instagram.com/globalorbit" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/globalorbit" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "TikTok", href: "https://www.tiktok.com" },
  ],
} as const;

export const ORBIT_HEADER_NAV = [
  { label: "Overview", href: "/", location: "HEADER" as const },
  { label: "ERP Software", href: "/orbit-software", location: "HEADER" as const },
  { label: "Solutions", href: "/services", location: "HEADER" as const },
  { label: "Our Work", href: "/projects", location: "HEADER" as const },
  { label: "About Us", href: "/about", location: "HEADER" as const },
  { label: "Contact", href: "/contact", location: "HEADER" as const },
];

export const ORBIT_FOOTER_STATS = [
  { label: "Web · Apps · SEO", icon: "rocket" as const },
  { label: "3 studios · USA · India · Nepal", icon: "clients" as const },
  { label: "U.S. sales · global delivery", icon: "star" as const },
];

export const ORBIT_FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const ORBIT_FOOTER_QUICK = [
  { label: "Home", href: "/", icon: "home" as const },
  { label: "Website Development", href: "/service/website-development-usa", icon: "website" as const },
  { label: "Hotel Websites", href: "/hotel-website-development-usa", icon: "hotel" as const },
  { label: "Trekking Websites", href: "/trekking-website-development-usa", icon: "trek" as const },
  { label: "Restaurant Websites", href: "/restaurant-website-development-usa", icon: "restaurant" as const },
  { label: "E-commerce", href: "/ecommerce-website-development-usa", icon: "ecommerce" as const },
  { label: "About Us", href: "/about", icon: "about" as const },
  { label: "Contact", href: "/contact", icon: "contact" as const },
];

export const ORBIT_FOOTER_SERVICES = [
  { label: "Website Development", href: "/service/website-development-usa", icon: "website" as const },
  { label: "Custom Software Development", href: "/custom-software-development-usa", icon: "custom" as const },
  { label: "Web Development", href: "/web-development-usa", icon: "web" as const },
  { label: "ERP Software USA", href: "/erp-software-usa", icon: "erp" as const },
  { label: "SEO Services USA", href: "/seo-services-usa", icon: "seo" as const },
  { label: "Local SEO USA", href: "/local-seo-usa", icon: "local" as const },
  { label: "Software Products", href: "/orbit-software", icon: "products" as const },
];
