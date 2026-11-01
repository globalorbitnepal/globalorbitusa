import {
  DEFAULT_GLOBAL_TAGLINE,
  DEFAULT_HERO_STUDIOS,
  DEFAULT_STUDIOS_KICKER,
  parseHeroStudios,
  type HeroStudioLocation,
} from "@/lib/hero-studios";
import { DEFAULT_HERO_TRUST_LOGOS, parseTrustLogos, type HeroTrustLogo } from "@/lib/hero-trust-logos";

export type { HeroTrustLogo, HeroStudioLocation };

export type HeroConfig = {
  eyebrow: string;
  headline: string;
  headlineSecond: string;
  lede: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  shipsOn: string;
  imageSrc: string;
  videoSrc: string;
  useVideo: boolean;
  trustLogos: HeroTrustLogo[];
  trustMarqueeLabel: string;
  globalTagline: string;
  studiosKicker: string;
  studios: HeroStudioLocation[];
};

export const DEFAULT_HERO: HeroConfig = {
  eyebrow: "WEB · APPS · SOFTWARE · SEO",
  headline: "We Build Digital",
  headlineSecond: "Solutions",
  lede: "Website development, custom software, mobile apps, SEO and digital marketing for businesses in USA — built by our United States studio.",
  primaryLabel: "Get a Free Consultation",
  primaryHref: "/contact",
  secondaryLabel: "Explore Our Services",
  secondaryHref: "/services",
  shipsOn: "Play store · App store",
  imageSrc: "/brand/studio-hero-phones.jpg",
  videoSrc: "/brand/hero-product.mp4",
  useVideo: true,
  trustLogos: DEFAULT_HERO_TRUST_LOGOS,
  trustMarqueeLabel: "Enterprises that trust us",
  globalTagline: DEFAULT_GLOBAL_TAGLINE,
  studiosKicker: DEFAULT_STUDIOS_KICKER,
  studios: DEFAULT_HERO_STUDIOS,
};

export function parseHeroConfig(raw: unknown): HeroConfig {
  const data = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const str = (key: keyof HeroConfig, fallback: string) => {
    const value = data[key];
    return typeof value === "string" && value.trim() ? value : fallback;
  };
  return {
    eyebrow:
      ["Web · Apps · SEO", "WEB · APPS · SEO"].includes(str("eyebrow", DEFAULT_HERO.eyebrow))
        ? DEFAULT_HERO.eyebrow
        : str("eyebrow", DEFAULT_HERO.eyebrow),
    headline: str("headline", DEFAULT_HERO.headline) === "Precise approach" ? DEFAULT_HERO.headline : str("headline", DEFAULT_HERO.headline),
    headlineSecond:
      str("headlineSecond", DEFAULT_HERO.headlineSecond) === "to your product."
        ? DEFAULT_HERO.headlineSecond
        : str("headlineSecond", DEFAULT_HERO.headlineSecond),
    lede: str("lede", DEFAULT_HERO.lede).includes("original idea") ? DEFAULT_HERO.lede : str("lede", DEFAULT_HERO.lede),
    primaryLabel: ["Start a project", "Start a project →"].includes(str("primaryLabel", DEFAULT_HERO.primaryLabel))
      ? DEFAULT_HERO.primaryLabel
      : str("primaryLabel", DEFAULT_HERO.primaryLabel),
    primaryHref: str("primaryHref", DEFAULT_HERO.primaryHref),
    secondaryLabel: str("secondaryLabel", DEFAULT_HERO.secondaryLabel) === "Know more" ? DEFAULT_HERO.secondaryLabel : str("secondaryLabel", DEFAULT_HERO.secondaryLabel),
    secondaryHref: str("secondaryHref", DEFAULT_HERO.secondaryHref),
    shipsOn: str("shipsOn", DEFAULT_HERO.shipsOn),
    imageSrc: str("imageSrc", DEFAULT_HERO.imageSrc),
    videoSrc: str("videoSrc", DEFAULT_HERO.videoSrc),
    useVideo: data.useVideo === false || data.useVideo === "false" ? false : true,
    trustLogos: parseTrustLogos(data.trustLogos),
    trustMarqueeLabel: str("trustMarqueeLabel", DEFAULT_HERO.trustMarqueeLabel),
    globalTagline: str("globalTagline", DEFAULT_HERO.globalTagline),
    studiosKicker: str("studiosKicker", DEFAULT_HERO.studiosKicker),
    studios: parseHeroStudios(data.studios),
  };
}
