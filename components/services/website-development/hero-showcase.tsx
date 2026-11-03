import { WebsiteDemoBrowser } from "@/components/services/website-development/demo-browser";
import { WdHeroMainPreview, WdHeroSatelliteUi } from "@/components/services/website-development/wd-visuals";
import type { WebsiteDevelopmentPageConfig } from "@/lib/website-development-page-config";

export function WebsiteDevHeroShowcase({ composition }: { composition: WebsiteDevelopmentPageConfig["heroComposition"] }) {
  const satellites = composition.satellites.slice(0, 4);
  const satClass = ["wd-hero-sat--tl", "wd-hero-sat--tr", "wd-hero-sat--bl", "wd-hero-sat--br"];

  return (
    <div className="wd-hero-composition" aria-hidden="true">
      <div className="wd-hero-composition-glow" />
      {satellites.map((item, index) => (
        <div key={`${item.url}-${index}`} className={`wd-hero-sat ${satClass[index] ?? ""}`}>
          <div className="wd-hero-sat-chrome">
            <span />
            <span />
            <span />
            <em>{item.url}</em>
          </div>
          <div className="wd-hero-sat-screen">
            <WdHeroSatelliteUi index={index} />
          </div>
        </div>
      ))}
      <div className="wd-hero-composition-main wd-hero-enter">
        <WebsiteDemoBrowser url={composition.mainBrowserUrl}>
          <WdHeroMainPreview />
        </WebsiteDemoBrowser>
      </div>
      <p className="wd-hero-composition-caption">{composition.caption}</p>
    </div>
  );
}
