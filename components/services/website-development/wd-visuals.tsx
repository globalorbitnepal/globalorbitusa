import type { CSSProperties } from "react";

const INDUSTRY_THEMES: Record<string, string> = {
  hotels: "lodge",
  trekking: "trail",
  restaurants: "ember",
  ecommerce: "shop",
  corporate: "corporate",
  saas: "saas",
};

export function WdPh({
  variant = "neutral",
  ratio = "4 / 3",
  className = "",
  compact,
}: {
  variant?: string;
  ratio?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`wd-ph wd-ph--${variant}${compact ? " wd-ph--compact" : ""} ${className}`.trim()}
      style={{ "--wd-ph-ratio": ratio } as CSSProperties}
      aria-hidden="true"
    >
      <span className="wd-ph-shine" />
      <span className="wd-ph-grid" />
    </div>
  );
}

export function WdIndustryMock({ id }: { id: string }) {
  const theme = INDUSTRY_THEMES[id] ?? "corporate";
  return (
    <div className={`wd-industry-mock wd-industry-mock--${theme}`} aria-hidden="true">
      <div className="wd-industry-mock-chrome">
        <span />
        <span />
        <span />
        <em>{theme}.demo</em>
      </div>
      <div className="wd-industry-mock-body">
        <div className="wd-industry-mock-copy">
          <i />
          <i />
          <i />
          <b />
        </div>
        <WdPh variant={theme} ratio="16 / 11" compact />
      </div>
    </div>
  );
}

const SAT_THEMES = ["lodge", "trail", "shop", "saas"] as const;

export function WdHeroSatelliteUi({ index }: { index: number }) {
  const theme = SAT_THEMES[index] ?? "corporate";
  return (
    <div className={`wd-hero-sat-ui wd-hero-sat-ui--${theme}`} aria-hidden="true">
      <span className="wd-hero-sat-ui-bar" />
      <span className="wd-hero-sat-ui-line wd-hero-sat-ui-line--lg" />
      <span className="wd-hero-sat-ui-line" />
      <span className="wd-hero-sat-ui-block" />
    </div>
  );
}

export function WdHeroMainPreview() {
  return (
    <article className="wd-hero-preview wd-app wd-app--lodge">
      <header className="wd-app-bar wd-app-bar--light">
        <strong>Your Brand</strong>
        <nav>
          <span>Services</span>
          <span>Work</span>
          <span>Contact</span>
        </nav>
        <button type="button">Get a quote</button>
      </header>
      <section className="wd-hero-preview-main">
        <div>
          <p className="wd-app-kicker">Denver · Nationwide delivery</p>
          <p className="wd-app-demo-title">A site that earns trust in the first scroll</p>
          <p className="wd-app-lede">
            Structured service pages, fast mobile layout, and enquiry paths wired to your inbox — no stock-photo hero required.
          </p>
          <div className="wd-hero-preview-cta">
            <span>Start project</span>
            <span className="wd-hero-preview-ghost">View process</span>
          </div>
        </div>
        <div className="wd-hero-preview-stack">
          <WdPh variant="corporate" ratio="16 / 10" />
          <div className="wd-hero-preview-metrics">
            <span>
              <b>98</b> Performance
            </span>
            <span>
              <b>100</b> SEO
            </span>
            <span>
              <b>0.8s</b> LCP target
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
