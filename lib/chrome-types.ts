/**
 * Shape of the site-wide brand/identity record.
 * No runtime imports so client components can use it safely.
 */
export type SiteChrome = {
  companyName: string;
  tagline: string;
  email: string;
  phone: string;
  /** WhatsApp display label; falls back to the primary phone. */
  whatsapp?: string;
  salesEmail?: string;
  address: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  footerTagline: string;
  /** Optional header/footer logo override (uploaded via admin). */
  headerLogoSrc?: string;
  /** Header/footer wordmark width in px (100–480). */
  logoWidth?: number;
  /** Optional WhatsApp floating button override; empty string hides it. */
  whatsappHref?: string;
};
