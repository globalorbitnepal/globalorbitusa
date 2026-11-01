/**
 * Single source of truth for GlobalOrbit USA public contact details.
 *
 * Admin > Header & footer can override the primary phone / email / WhatsApp via
 * the site-chrome store; these constants are the production defaults used when
 * no override exists and by code paths that render outside the chrome provider.
 */

export const USA_PHONE_DISPLAY = "+1 (303) 217-6150";
export const USA_PHONE_E164 = "+13032176150";
export const USA_PHONE_TEL = "tel:+13032176150";

export const USA_WHATSAPP_DIGITS = "13032176150";
export const USA_WHATSAPP_URL = "https://wa.me/13032176150";
export const USA_WHATSAPP_LABEL = "WhatsApp +1 (303) 217-6150";

export const USA_SUPPORT_EMAIL = "support@theglobalorbit.com";
export const USA_SALES_EMAIL = "usa@theglobalorbit.com";
export const USA_CAREERS_EMAIL = "careers@theglobalorbit.com";

/** Convert a display phone such as `+1 (303) 217-6150` into a `tel:` href. */
export function phoneToTel(display: string): string {
  const digits = display.replace(/[^\d+]/g, "");
  if (!digits) return USA_PHONE_TEL;
  return `tel:${digits}`;
}

/** Convert a display phone into a wa.me link (digits only, no plus). */
export function phoneToWhatsApp(display: string): string {
  const digits = display.replace(/\D/g, "");
  if (!digits) return USA_WHATSAPP_URL;
  return `https://wa.me/${digits}`;
}
