export const APPOINTMENT_STUDIOS = ["USA", "India", "USA"] as const;

export const APPOINTMENT_SERVICES = [
  "Website",
  "Mobile Apps",
  "Web-Based Software",
  "ERP System",
  "Billing Software",
  "OTA Management Software",
  "Business Email",
] as const;

export const APPOINTMENT_REFERRALS = [
  "Google",
  "ChatGPT",
  "Google Gemini",
  "Magazine",
  "Friends",
  "Facebook",
  "Instagram",
  "TikTok",
] as const;

export type AppointmentStudio = (typeof APPOINTMENT_STUDIOS)[number];
export type AppointmentService = (typeof APPOINTMENT_SERVICES)[number];
export type AppointmentReferral = (typeof APPOINTMENT_REFERRALS)[number];
