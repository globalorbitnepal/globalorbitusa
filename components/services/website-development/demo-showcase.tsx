"use client";

import { useEffect, useRef } from "react";
import type { WebsiteDevDemoConfig } from "@/lib/website-development-page-config";
import { bindOrbitScroll } from "@/lib/orbit/scroll-performance";
import { WebsiteDemoBrowser } from "@/components/services/website-development/demo-browser";
import { DEMO_COMPONENTS } from "@/components/services/website-development/demo-templates";

type Header = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lede: string;
};

export function WebsiteDevDemoShowcase({ demos, header }: { demos: WebsiteDevDemoConfig[]; header: Header }) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameId = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const apply = () => {
      const vh = window.innerHeight;
      frameRefs.current.forEach((frame) => {
        if (!frame) return;
        if (reduce) {
          frame.style.transform = "none";
          frame.style.opacity = "1";
          return;
        }
        const rect = frame.getBoundingClientRect();
        const mid = rect.top + rect.height * 0.45;
        const t = Math.min(1, Math.max(0, 1 - Math.abs(mid - vh * 0.5) / (vh * 0.7)));
        const ease = t * t * (3 - 2 * t);
        frame.style.opacity = String(0.55 + ease * 0.45);
        frame.style.transform = `translate3d(0, ${(1 - ease) * 28}px, 0)`;
      });
    };
    return bindOrbitScroll(sectionRef.current, apply, frameId);
  }, [demos]);

  return (
    <section ref={sectionRef} className="orbit-wd-demos px-4 sm:px-6 lg:px-8" aria-labelledby="wd-demos-heading">
      <div className="mx-auto max-w-[82rem]">
        <header className="orbit-projects-portfolio-head mb-10 text-center lg:mb-12">
          <p className="orbit-work-badge mx-auto">
            <span className="orbit-work-badge-num">{String(demos.length).padStart(2, "0")}</span>
            {header.eyebrow}
          </p>
          <h2 id="wd-demos-heading" className="orbit-projects-portfolio-title">
            {header.title} <span>{header.titleAccent}</span>
          </h2>
          <p className="orbit-projects-portfolio-lede mx-auto">{header.lede}</p>
        </header>

        <div className="orbit-wd-hero-stack">
          {demos.map((demo, index) => {
            const Demo = DEMO_COMPONENTS[demo.id];
            return (
              <article key={demo.id} className="orbit-wd-hero-block">
                <div className="orbit-wd-hero-meta">
                  <p>{String(index + 1).padStart(2, "0")}</p>
                  <h3>{demo.brand}</h3>
                  <p>{demo.tagline}</p>
                </div>
                <p className="wd-demo-fiction">{demo.fictionalLabel}</p>
                <div
                  ref={(el) => {
                    frameRefs.current[index] = el;
                  }}
                  className="orbit-wd-hero-frame"
                >
                  <WebsiteDemoBrowser url={demo.demoUrl || "demo.test"}>{Demo ? <Demo /> : null}</WebsiteDemoBrowser>
                </div>
                <dl className="wd-demo-details">
                  <div>
                    <dt>Audience</dt>
                    <dd>{demo.audience}</dd>
                  </div>
                  <div>
                    <dt>Design direction</dt>
                    <dd>{demo.designDirection}</dd>
                  </div>
                  <div>
                    <dt>Primary action</dt>
                    <dd>{demo.conversionAction}</dd>
                  </div>
                  <div>
                    <dt>UX focus</dt>
                    <dd>{demo.uxNote}</dd>
                  </div>
                </dl>
                <p className="wd-demo-story">{demo.story}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
