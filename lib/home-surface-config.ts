export type HomeSurfaceConfig = {
  processBadgeNum: string;
  processBadgeLabel: string;
  processTitleLine1: string;
  processTitleLine2: string;
  processLede: string;
  madeBadgeNum: string;
  madeBadgeLabel: string;
  madeTitle: string;
  madeCtaLabel: string;
  whyTitle: string;
  reviewsTitle: string;
  faqTitle: string;
  faqLede: string;
  ctaTitle: string;
  ctaLede: string;
  ctaButtonLabel: string;
};

export const DEFAULT_HOME_SURFACE: HomeSurfaceConfig = {
  processBadgeNum: "5",
  processBadgeLabel: "Smooth journey",
  processTitleLine1: "From idea to launch",
  processTitleLine2: "— then we stay.",
  processLede:
    "Strategy, design, build, SEO, and support — one team from first call to long after go-live.",
  madeBadgeNum: "6",
  madeBadgeLabel: "Made at Global Orbit",
  madeTitle: "Crafted with purpose, driven by results.",
  madeCtaLabel: "View all work",
  whyTitle: "There are thousands of agencies. Why choose us?",
  reviewsTitle: "Our clients speak for us",
  faqTitle: "Frequently asked questions",
  faqLede: "Cost, timelines, stack, SEO, and whether we are the right firm.",
  ctaTitle: "Let’s bring your project to life.",
  ctaLede: "Websites, apps, ERP, and SEO from studios in USA, India, and global clients.",
  ctaButtonLabel: "Start a project",
};

export function mergeHomeSurface(partial: Partial<HomeSurfaceConfig> | null | undefined): HomeSurfaceConfig {
  return { ...DEFAULT_HOME_SURFACE, ...partial };
}
