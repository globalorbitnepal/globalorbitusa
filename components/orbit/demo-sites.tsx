import type { CSSProperties } from "react";

export type DemoSiteTheme = {
  id: string;
  host: string;
  brand: string;
  links: [string, string, string];
  kicker: string;
  title: string;
  cta: string;
  image: string;
  thumbs: [string, string, string];
  light?: boolean;
};

export const DEMO_SITES: DemoSiteTheme[] = [
  {
    id: "site-01",
    host: "atelierbakery.com",
    brand: "Atelier",
    links: ["Menu", "Shop", "Visit"],
    kicker: "United States bakery",
    title: "Sourdough, still warm.",
    cta: "Order today",
    image: "/brand/work/work-bakery.jpg",
    thumbs: ["/brand/work/work-bakery.jpg", "/brand/work/work-journey.jpg", "/brand/hero-bright-office.jpg"],
    light: true,
  },
  {
    id: "site-02",
    host: "forma.studio",
    brand: "Forma",
    links: ["Work", "Studio", "Index"],
    kicker: "Architecture",
    title: "Rooms with quiet light.",
    cta: "See projects",
    image: "/brand/work/work-architects.jpg",
    thumbs: ["/brand/work/work-architects.jpg", "/brand/offices/usa.jpg", "/brand/hero-uhd-office.jpg"],
  },
  {
    id: "site-03",
    host: "northline.travel",
    brand: "Northline",
    links: ["Trips", "Stay", "Guide"],
    kicker: "Himalaya travel",
    title: "Start the journey here.",
    cta: "View trips",
    image: "/brand/work/work-journey.jpg",
    thumbs: ["/brand/places/himalaya.jpg", "/brand/work/summit-seek.jpg", "/brand/places/pagoda.jpg"],
  },
  {
    id: "site-04",
    host: "northstar.ai",
    brand: "Northstar",
    links: ["Practice", "Team", "Contact"],
    kicker: "Strategy",
    title: "Build the AI agenda.",
    cta: "Talk to us",
    image: "/brand/work/work-ai-agenda.jpg",
    thumbs: ["/brand/work/work-ai-saas.jpg", "/brand/hero-uhd-office.jpg", "/brand/offices/usa.jpg"],
  },
  {
    id: "site-05",
    host: "peaklodge.com",
    brand: "Peak Lodge",
    links: ["Rooms", "Spa", "Weddings"],
    kicker: "Mountain resort",
    title: "Lakeside, after dark.",
    cta: "Check dates",
    image: "/brand/work/work-resort.jpg",
    thumbs: ["/brand/work/work-resort.jpg", "/brand/places/himalaya.jpg", "/brand/portfolio/thamel-park-hotel.webp"],
  },
  {
    id: "site-06",
    host: "havenrealty.co",
    brand: "Haven",
    links: ["Buy", "Rent", "Sell"],
    kicker: "Interiors",
    title: "Homes that hold light.",
    cta: "Browse listings",
    image: "/brand/work/work-realty.jpg",
    thumbs: ["/brand/portfolio/first-choice-interior.webp", "/brand/work/work-realty.jpg", "/brand/hero-bright-office.jpg"],
    light: true,
  },
  {
    id: "site-07",
    host: "orbitpulse.ai",
    brand: "Pulse",
    links: ["Product", "Pricing", "Login"],
    kicker: "Revenue OS",
    title: "See every rupee move.",
    cta: "Open console",
    image: "/brand/work/work-ai-saas.jpg",
    thumbs: ["/brand/soft-previews/08.png", "/brand/work/work-ai-saas.jpg", "/brand/soft-previews/01.png"],
  },
  {
    id: "site-08",
    host: "wildline.co",
    brand: "Wildline",
    links: ["Rides", "Gear", "Club"],
    kicker: "Adventure",
    title: "Ride the river line.",
    cta: "Book a run",
    image: "/brand/work/work-adventure-mobile.jpg",
    thumbs: ["/brand/places/himalaya.jpg", "/brand/work/summit-seek.jpg", "/brand/work/work-adventure-mobile.jpg"],
  },
  {
    id: "site-09",
    host: "marlohotels.com",
    brand: "Marlo",
    links: ["Stay", "Dine", "Events"],
    kicker: "City hotel",
    title: "A quiet night in town.",
    cta: "Reserve",
    image: "/brand/work/marlo-hotels.jpg",
    thumbs: ["/brand/work/thamel-hotel.jpg", "/brand/portfolio/thamel-park-hotel.webp", "/brand/work/marlo-hotels.jpg"],
  },
  {
    id: "site-10",
    host: "kalon.spa",
    brand: "Kalon",
    links: ["Rituals", "Book", "Gift"],
    kicker: "Spa",
    title: "Slow the whole day down.",
    cta: "Book a ritual",
    image: "/brand/work/kaya-spa.jpg",
    thumbs: ["/brand/work/zen-spa.jpg", "/brand/work/thamel-spa.jpg", "/brand/work/kaya-spa.jpg"],
    light: true,
  },
  {
    id: "site-11",
    host: "nona.kitchen",
    brand: "Nona",
    links: ["Menu", "Table", "Chef"],
    kicker: "Restaurant",
    title: "Tonight’s table is set.",
    cta: "Reserve",
    image: "/brand/hero-bright-office.jpg",
    thumbs: ["/brand/work/work-bakery.jpg", "/brand/hero-uhd.jpg", "/brand/work/work-journey.jpg"],
  },
  {
    id: "site-12",
    host: "threadand.co",
    brand: "Thread",
    links: ["New", "Women", "Men"],
    kicker: "Studio shop",
    title: "The new drop is live.",
    cta: "Shop",
    image: "/brand/portfolio/first-choice-interior.webp",
    thumbs: ["/brand/studio-service-web.jpg", "/brand/work/work-realty.jpg", "/brand/hero-studio.png"],
    light: true,
  },
  {
    id: "site-13",
    host: "volt.fit",
    brand: "Volt",
    links: ["Classes", "App", "Join"],
    kicker: "Training",
    title: "Train before sunrise.",
    cta: "Join a class",
    image: "/brand/places/himalaya.jpg",
    thumbs: ["/brand/work/work-adventure-mobile.jpg", "/brand/places/city.jpg", "/brand/places/himalaya.jpg"],
  },
  {
    id: "site-14",
    host: "kindwell.clinic",
    brand: "Kindwell",
    links: ["Care", "Doctors", "Visit"],
    kicker: "Clinic",
    title: "Care that feels human.",
    cta: "Book visit",
    image: "/brand/work/zen-spa.jpg",
    thumbs: ["/brand/work/thamel-spa.jpg", "/brand/work/kaya-spa.jpg", "/brand/offices/india.jpg"],
    light: true,
  },
  {
    id: "site-15",
    host: "ledgerly.io",
    brand: "Ledgerly",
    links: ["Platform", "Security", "Login"],
    kicker: "Finance",
    title: "Cash, clear and live.",
    cta: "Open account",
    image: "/brand/offices/usa.jpg",
    thumbs: ["/brand/work/work-ai-saas.jpg", "/brand/soft-previews/01.png", "/brand/hero-uhd-office.jpg"],
  },
  {
    id: "site-16",
    host: "summitseek.com",
    brand: "Summit",
    links: ["Treks", "Dates", "Gear"],
    kicker: "Trekking",
    title: "Walk into the cloud line.",
    cta: "See dates",
    image: "/brand/work/summit-seek.jpg",
    thumbs: ["/brand/places/himalaya.jpg", "/brand/work/ambition-holidays.jpg", "/brand/places/pagoda.jpg"],
  },
];

export function DemoWebsite({ site }: { site: DemoSiteTheme }) {
  return (
    <article className={`orbit-ds${site.light ? " is-light" : ""}`} aria-hidden="true">
      <div className="orbit-ds-shot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.image} alt="" />
        <div className="orbit-ds-veil" />
        <header className="orbit-ds-nav">
          <strong>{site.brand}</strong>
          <nav>
            {site.links.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </nav>
        </header>
        <section className="orbit-ds-hero">
          <em>{site.kicker}</em>
          <h3>{site.title}</h3>
          <b>{site.cta}</b>
        </section>
      </div>
      <div className="orbit-ds-row">
        {site.thumbs.map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt="" />
        ))}
      </div>
    </article>
  );
}
