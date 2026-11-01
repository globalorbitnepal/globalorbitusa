import Link from "next/link";
import { HeroGlobePins } from "@/components/orbit/hero-flags";
import { OrbitHomeHeroScene } from "@/components/orbit/home-hero-media";

const SERVICES = [
  { title: "Web Development", line: "Modern & Scalable", icon: "monitor" },
  { title: "ERP Software", line: "Business Automation", icon: "gear" },
  { title: "Cloud & Hosting", line: "Secure & Reliable", icon: "cloud" },
  { title: "Digital Growth", line: "SEO & Marketing", icon: "chart" },
] as const;

const STATS = [
  { value: "03", label: "Studios", icon: "team" },
  { value: "NP", label: "United States HQ", icon: "code" },
  { value: "Web", label: "Apps · Software", icon: "users" },
  { value: "SEO", label: "Digital Growth", icon: "award" },
] as const;

const MARKETS = [
  { code: "np", name: "USA" },
  { code: "in", name: "India" },
  { code: "us", name: "USA" },
] as const;

function ServiceIcon({ name }: { name: string }) {
  const props = {
    className: "h-10 w-10 shrink-0 text-[#f0c43a] sm:h-11 sm:w-11 lg:h-12 lg:w-12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "monitor") {
    return (
      <svg {...props}>
        <rect x="2.5" y="4.5" width="19" height="13" rx="1.6" />
        <path d="M9 21h6M12 17.5V21" />
      </svg>
    );
  }
  if (name === "gear") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9" />
      </svg>
    );
  }
  if (name === "cloud") {
    return (
      <svg {...props}>
        <path d="M7 18.5h10.2a3.9 3.9 0 0 0 .4-7.8A6.2 6.2 0 0 0 6 9.2 3.7 3.7 0 0 0 7 18.5z" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M4 20V11M9.3 20V5M14.7 20v-6.5M20 20V8" />
    </svg>
  );
}

function StatIcon({ name }: { name: string }) {
  const props = {
    className: "h-9 w-9 shrink-0 text-[#f0c43a] sm:h-10 sm:w-10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "team") {
    return (
      <svg {...props}>
        <circle cx="8.6" cy="8.4" r="2.8" />
        <circle cx="16.2" cy="9.2" r="2.2" />
        <path d="M3.2 18.4a5.4 5.4 0 0 1 10.8 0M14.6 15.6a4.4 4.4 0 0 1 6.2 2.4" />
      </svg>
    );
  }
  if (name === "code") {
    return (
      <svg {...props}>
        <path d="m8.4 7.8-4.2 4.2 4.2 4.2M15.6 7.8l4.2 4.2-4.2 4.2M13.4 4.6l-2.8 14.8" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.1" />
        <path d="M5.4 19.2a6.6 6.6 0 0 1 13.2 0" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="12" cy="8.4" r="4.4" />
      <path d="m8.6 13.4-1.4 7 4.8-2.6 4.8 2.6-1.4-7" />
    </svg>
  );
}

export function OrbitHomeHero() {
  return (
    <section
      className="orbit-home-hero relative isolate min-h-[100svh] overflow-hidden bg-[#030912] text-white"
      aria-labelledby="home-hero-heading"
    >
      <div className="orbit-hero-stage">
        <OrbitHomeHeroScene />
        <div className="hidden md:block">
          <HeroGlobePins />
        </div>
      </div>
      <div className="orbit-hero-scrim pointer-events-none absolute inset-0" />

      <div className="orbit-hero-content relative z-[1] mx-auto flex min-h-[100svh] w-full max-w-[1720px] flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[calc(4.75rem+env(safe-area-inset-top))] sm:px-6 sm:pt-[calc(5.25rem+env(safe-area-inset-top))] lg:px-10 lg:pt-[calc(6rem+env(safe-area-inset-top))] xl:px-12">
        <div className="orbit-hero-copy w-full max-w-[34rem] lg:max-w-[38rem] xl:max-w-[41rem]">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#f0c43a] sm:text-[11px] sm:tracking-[0.38em] lg:text-[12px]">
            Built for a brighter tomorrow
          </p>
          <h1
            id="home-hero-heading"
            className="mt-4 font-[family-name:var(--font-jakarta)] text-[clamp(2.15rem,5.2vw+0.6rem,4.75rem)] font-extrabold leading-[1.04] tracking-[-0.04em] sm:mt-5"
          >
            <span className="block text-white">Digital Solutions for a</span>
            <span className="mt-1 block text-[#f0c43a]">Global World</span>
          </h1>
          <p className="mt-5 max-w-[31rem] text-[14px] font-normal leading-[1.75] text-white/90 sm:text-[15px] sm:leading-[1.78] lg:mt-6 lg:max-w-[33rem] lg:text-[16px]">
            We design and develop websites, web applications, ERP systems and digital solutions that help
            businesses grow, operate smarter and reach further — from local to global.
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-2 md:hidden">
            {MARKETS.map((market) => (
              <li
                key={market.code}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 backdrop-blur-sm"
              >
                <img
                  src={`https://flagcdn.com/w80/${market.code}.png`}
                  alt=""
                  className="h-5 w-5 rounded-full object-cover ring-1 ring-white/85"
                />
                <span className="text-[12px] font-semibold text-white">{market.name}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Link
              href="/contact"
              className="group inline-flex h-[3.25rem] w-full items-center justify-center gap-3 rounded-full bg-[#f0c43a] py-2 pl-7 pr-2 text-[15px] font-bold text-[#1a1408] shadow-[0_16px_36px_rgba(240,196,58,0.38)] transition-colors hover:bg-[#ffe38a] sm:w-auto lg:text-[16px]"
            >
              Start a project
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#12100a] text-[15px] text-[#f0c43a] transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-[3.25rem] w-full items-center justify-center gap-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto lg:text-[16px]"
            >
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[10px] text-[#0b1220]"
                aria-hidden="true"
              >
                ▶
              </span>
              View our work
            </Link>
          </div>
        </div>

        <div className="mt-auto w-full pt-10 sm:pt-12 lg:pt-10">
          <ul className="mx-auto grid w-full max-w-[1020px] grid-cols-2 gap-x-1 gap-y-7 sm:flex sm:flex-nowrap sm:justify-between sm:gap-0 lg:max-w-[1080px]">
            {SERVICES.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-center gap-3 px-1 sm:flex-1 sm:justify-center sm:px-4 lg:px-5 ${
                  index === 0 ? "" : "sm:border-l sm:border-white/25"
                }`}
              >
                <ServiceIcon name={item.icon} />
                <span>
                  <span className="block text-[13px] font-bold leading-tight sm:text-[14px] lg:text-[15px]">
                    {item.title}
                  </span>
                  <span className="block text-[11px] font-medium text-white/68 sm:text-[12px]">{item.line}</span>
                </span>
              </li>
            ))}
          </ul>

          <dl className="orbit-hero-stats mx-auto mt-5 grid w-full max-w-[1020px] grid-cols-2 gap-0 overflow-hidden rounded-[26px] px-1 py-3 sm:mt-6 sm:grid-cols-4 sm:rounded-[32px] sm:px-4 sm:py-4 lg:max-w-[1080px] lg:px-6">
            {STATS.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-3 px-2 py-3 sm:py-1 ${
                  index === 0 ? "" : "sm:border-l sm:border-white/22"
                } ${index % 2 === 1 ? "border-l border-white/16 sm:border-white/22" : ""} ${
                  index < 2 ? "border-b border-white/16 sm:border-b-0" : ""
                }`}
              >
                <StatIcon name={item.icon} />
                <div className="text-left sm:text-center">
                  <dt className="font-[family-name:var(--font-jakarta)] text-[24px] font-extrabold leading-none text-white sm:text-[28px] lg:text-[30px]">
                    {item.value}
                  </dt>
                  <dd className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white/78 sm:text-[9px] lg:text-[10px]">
                    {item.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mx-auto mt-5 flex max-w-[1080px] items-end justify-between gap-4 sm:mt-6">
            <p className="flex min-w-0 items-center gap-3 text-[8px] font-bold uppercase tracking-[0.28em] text-white/72 sm:text-[9px] sm:tracking-[0.34em] lg:text-[10px]">
              Explore a smarter tomorrow
              <span className="hidden h-px w-16 bg-white/45 sm:block lg:w-24" aria-hidden="true" />
            </p>
            <p className="max-w-[55%] shrink-0 text-right font-[family-name:var(--font-script)] text-[clamp(1.25rem,4.5vw,2.5rem)] leading-[1.08] text-white sm:max-w-none lg:mr-8 xl:mr-14">
              Building
              <span className="block">a Smarter</span>
              <span className="relative inline-block">
                Tomorrow
                <span
                  className="absolute -bottom-2 left-0 h-[4px] w-full rotate-[-2deg] rounded-full bg-[#f0c43a]"
                  aria-hidden="true"
                />
                <span
                  className="absolute -bottom-3 left-[10%] h-[3px] w-[82%] rotate-[2deg] rounded-full bg-[#f0c43a]/80"
                  aria-hidden="true"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
