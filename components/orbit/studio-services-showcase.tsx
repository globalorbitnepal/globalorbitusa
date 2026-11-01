"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { bindOrbitAutoplay } from "@/lib/orbit/scroll-performance";

const SERVICES = [
  {
    title: "Website Development",
    body: "Fast, SEO-ready marketing sites and platforms that drive engagement and business growth.",
    href: "/service/website-development-usa",
    tone: "blue",
    index: "01",
  },
  {
    title: "UI/UX Design",
    body: "Crafting pixel-perfect interfaces and intuitive user journeys, backed by research, systems and testing.",
    href: "/services",
    tone: "violet",
    index: "02",
  },
  {
    title: "Webflow Development",
    body: "Pixel-perfect, no-code powered sites built for speed and easy content control.",
    href: "/services",
    tone: "pink",
    index: "03",
  },
  {
    title: "Next.js Development",
    body: "Engineering fast, SEO-friendly web apps and platforms on the Next.js framework.",
    href: "/services",
    tone: "sky",
    index: "04",
  },
  {
    title: "Laravel Backend",
    body: "Secure APIs, admin panels, and ERP modules on Laravel — built to scale with your operations.",
    href: "/orbit-software",
    tone: "red",
    index: "05",
  },
  {
    title: "Node.js Backend",
    body: "Realtime services, integrations, and microservices on Node for products that stay responsive.",
    href: "/orbit-software",
    tone: "green",
    index: "06",
  },
  {
    title: "SEO & Local Ranking",
    body: "Technical, on-page, and local SEO so you rank on Google Maps and search — not skipped.",
    href: "/packages/seo-growth",
    tone: "gold",
    index: "07",
  },
] as const;

function ServiceIcon({ tone }: { tone: (typeof SERVICES)[number]["tone"] }) {
  const common = { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true as const };
  const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons: Record<(typeof SERVICES)[number]["tone"], ReactNode> = {
    blue: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2.2" {...stroke} />
        <path d="M3 9h18" {...stroke} />
      </svg>
    ),
    violet: (
      <svg {...common}>
        <path d="M4 16.5 12 5l8 11.5H4Z" {...stroke} />
        <circle cx="12" cy="14.2" r="1.2" fill="currentColor" />
      </svg>
    ),
    pink: (
      <svg {...common}>
        <path d="M5 7h14v10H5z" {...stroke} />
        <path d="M8 11h8M8 14h5" {...stroke} />
      </svg>
    ),
    sky: (
      <svg {...common}>
        <path d="M8 17 4 12l4-5M16 7l4 5-4 5" {...stroke} />
      </svg>
    ),
    red: (
      <svg {...common}>
        <path d="M12 4v16M7 8h10M7 16h10" {...stroke} />
      </svg>
    ),
    green: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" {...stroke} />
        <path d="M12 8v8M8 12h8" {...stroke} />
      </svg>
    ),
    gold: (
      <svg {...common}>
        <path d="m12 4 2.1 5.3L20 11l-4.4 3.7L16.8 20 12 16.9 7.2 20l1.2-5.3L4 11l5.9-1.7L12 4Z" {...stroke} />
      </svg>
    ),
  };
  return icons[tone];
}

export function OrbitStudioServicesShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.loop = true;
    const play = () => {
      if (!document.hidden) void video.play().catch(() => {});
    };
    video.addEventListener("loadeddata", play);
    const stopAutoplay = bindOrbitAutoplay(video);
    play();
    return () => {
      video.removeEventListener("loadeddata", play);
      stopAutoplay();
    };
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll(".orbit-services-card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, []);

  return (
    <section className="orbit-services-showcase relative overflow-hidden bg-[#030308] text-white" aria-labelledby="services-showcase-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_55%)]" aria-hidden="true" />

      <div className="relative z-[1] mx-auto w-full max-w-[1680px] px-[clamp(1.25rem,3.6vw,3.4rem)] py-[clamp(3.5rem,7vh,5.5rem)]">
        <div className="orbit-services-showcase-head grid gap-[clamp(1.5rem,3vw,2.75rem)] xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-center">
          <div>
            <p className="orbit-services-badge">
              <span className="orbit-services-badge-num">2</span>
              Our Services
            </p>
            <h2 id="services-showcase-heading" className="orbit-services-headline">
              With an in-house team of designers, developers and animators, we build applications that{" "}
              <span className="text-[#818cf8]">STAND OUT</span> from the crowd!
            </h2>
          </div>

          <div className="orbit-services-video-wrap" aria-hidden="true">
            <div className="orbit-services-video-glow" />
            <video
              ref={videoRef}
              className="orbit-services-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
            >
              <source src="/brand/need-phone-reel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div ref={gridRef} className="orbit-services-grid mt-[clamp(2rem,4vh,3rem)]">
          {SERVICES.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className={`orbit-services-card orbit-services-card-${item.tone}`}
              style={{ "--card-delay": `${i * 70}ms` } as CSSProperties}
            >
              <span className="orbit-services-card-sheen" aria-hidden="true" />
              <span className="orbit-services-card-meta">
                <span className="orbit-services-card-icon">
                  <ServiceIcon tone={item.tone} />
                </span>
                <span className="orbit-services-card-index">{item.index}</span>
              </span>
              <h3 className="orbit-services-card-title">{item.title}</h3>
              <p className="orbit-services-card-body">{item.body}</p>
              <span className="orbit-services-card-link">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
