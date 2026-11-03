import type { ComponentType } from "react";
import { WdPh } from "@/components/services/website-development/wd-visuals";

function Topbar({
  brand,
  links,
  cta,
  theme,
}: {
  brand: string;
  links: string[];
  cta: string;
  theme?: "ink" | "light" | "sage";
}) {
  return (
    <header className={`wd-app-bar wd-app-bar--${theme ?? "ink"}`}>
      <strong>{brand}</strong>
      <nav>
        {links.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
      <button type="button">{cta}</button>
    </header>
  );
}

export function DemoSummitLodge() {
  return (
    <article className="wd-app wd-app--lodge">
      <Topbar brand="Summit Lodge" links={["Rooms", "Dining", "Offers"]} cta="Check availability" theme="light" />
      <section className="wd-app-hero-row">
        <div>
          <p className="wd-app-kicker">Rocky Mountain · 24 rooms</p>
          <p className="wd-app-demo-title">Book a quiet night above the ridge</p>
          <p className="wd-app-lede">Forest suites, fireside dining, and airport transfer on request.</p>
          <div className="wd-app-book">
            <label>
              Check-in
              <input defaultValue="12 Oct" readOnly />
            </label>
            <label>
              Check-out
              <input defaultValue="15 Oct" readOnly />
            </label>
            <label>
              Guests
              <input defaultValue="2 adults" readOnly />
            </label>
            <button type="button">Show rooms</button>
          </div>
        </div>
        <aside className="wd-app-gallery">
          <WdPh variant="lodge" ratio="16 / 11" />
          <div>
            <WdPh variant="lodge" ratio="1" compact />
            <WdPh variant="lodge" ratio="1" compact />
          </div>
        </aside>
      </section>
      <section className="wd-app-rooms">
        {[
          ["Forest deluxe", "From $189", "King · garden"],
          ["Panorama suite", "From $279", "Valley view"],
          ["Hill cottage", "From $219", "Fireplace"],
        ].map(([name, price, meta]) => (
          <article key={name}>
            <WdPh variant="lodge" ratio="4 / 3" compact />
            <div>
              <h2>{name}</h2>
              <p>{meta}</p>
              <span>{price} / night</span>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}

export function DemoTrailhead() {
  return (
    <article className="wd-app wd-app--trail">
      <Topbar brand="Trailhead" links={["Expeditions", "Guides", "Gear"]} cta="Request dates" />
      <section className="wd-app-hero-row wd-app-hero-row--trail">
        <div>
          <p className="wd-app-kicker">Colorado · 14 days</p>
          <p className="wd-app-demo-title">Departures with named guides</p>
          <p className="wd-app-lede">Small groups, gear checks, and a written altitude plan before you fly.</p>
          <button type="button" className="wd-app-primary">
            Get the itinerary
          </button>
        </div>
        <table className="wd-app-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Trip</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18 Oct</td>
              <td>High route classic</td>
              <td>4 left</td>
            </tr>
            <tr>
              <td>02 Nov</td>
              <td>Alpine lakes</td>
              <td>6 left</td>
            </tr>
            <tr>
              <td>14 Nov</td>
              <td>Summit skills</td>
              <td>Waitlist</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}

export function DemoEmberSlate() {
  return (
    <article className="wd-app wd-app--ember">
      <Topbar brand="Ember & Slate" links={["Menu", "Wine", "Private"]} cta="Reserve" />
      <section className="wd-app-hero-row wd-app-hero-row--ember">
        <div>
          <p className="wd-app-kicker">Denver · Thu–Sun</p>
          <p className="wd-app-demo-title">Seven-course tasting, one seating</p>
          <p className="wd-app-lede">Wood-fired produce and natural wines. Last table 21:30.</p>
          <div className="wd-app-reserve">
            <input defaultValue="Saturday" readOnly />
            <input defaultValue="2 guests" readOnly />
            <button type="button">Hold table</button>
          </div>
        </div>
        <ol className="wd-app-menu">
          <li>
            <b>01</b> Charred leek, miso butter
          </li>
          <li>
            <b>04</b> Line-caught trout, fennel
          </li>
          <li>
            <b>07</b> Dark chocolate, smoked salt
          </li>
        </ol>
      </section>
    </article>
  );
}

export function DemoNorwood() {
  return (
    <article className="wd-app wd-app--shop">
      <Topbar brand="Norwood" links={["New", "Lookbook", "Stores"]} cta="Cart · 2" theme="light" />
      <section className="wd-app-shop-head">
        <div>
          <p className="wd-app-kicker">Winter 2026</p>
          <p className="wd-app-demo-title">Hill-morning layers</p>
        </div>
        <p>Merino, structure, and export-ready sizes. Pickup in-store.</p>
      </section>
      <section className="wd-app-products">
        {[
          ["Alpine coat", "$189"],
          ["Ridge scarf", "$42"],
          ["Summit boot", "$124"],
          ["Wool overshirt", "$98"],
        ].map(([name, price]) => (
          <article key={name}>
            <WdPh variant="shop" ratio="3 / 4" compact />
            <h2>{name}</h2>
            <p>{price}</p>
            <button type="button">Add</button>
          </article>
        ))}
      </section>
    </article>
  );
}

export function DemoPulseMetrics() {
  return (
    <article className="wd-app wd-app--saas">
      <Topbar brand="PulseMetrics" links={["Product", "Pricing", "Docs"]} cta="Start trial" />
      <section className="wd-app-saas">
        <aside>
          <p>Workspace</p>
          <ul>
            <li className="is-on">Overview</li>
            <li>Pipeline</li>
            <li>Seats</li>
            <li>Billing</li>
          </ul>
        </aside>
        <div>
          <header className="wd-app-saas-head">
            <p className="wd-app-demo-title">Revenue this quarter</p>
            <span>+18% vs last</span>
          </header>
          <div className="wd-app-kpis">
            <article>
              <p>MRR</p>
              <b>$284k</b>
            </article>
            <article>
              <p>NRR</p>
              <b>118%</b>
            </article>
            <article>
              <p>Open pipeline</p>
              <b>$2.4M</b>
            </article>
          </div>
          <div className="wd-app-chart">
            {["38%", "52%", "47%", "66%", "58%", "73%", "61%", "88%"].map((h, i) => (
              <i key={i} style={{ height: h }} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export function DemoHavenSpa() {
  return (
    <article className="wd-app wd-app--spa">
      <Topbar brand="Haven Spa" links={["Rituals", "Therapists", "Gifts"]} cta="Book" theme="sage" />
      <section className="wd-app-hero-row wd-app-hero-row--spa">
        <div>
          <p className="wd-app-kicker">Downtown · Daily 10:00–21:00</p>
          <p className="wd-app-demo-title">Book a ritual, not a popup</p>
          <p className="wd-app-lede">Therapist matched to pressure. Gift vouchers at reception.</p>
          <div className="wd-app-book wd-app-book--spa">
            <label>
              Treatment
              <input defaultValue="Deep tissue 60" readOnly />
            </label>
            <label>
              Time
              <input defaultValue="16:30" readOnly />
            </label>
            <button type="button">Confirm</button>
          </div>
        </div>
        <ul className="wd-app-treats">
          <li>
            <WdPh variant="spa" ratio="1" compact />
            <div>
              <h2>Deep tissue</h2>
              <p>60 min · $89</p>
            </div>
          </li>
          <li>
            <WdPh variant="spa" ratio="1" compact />
            <div>
              <h2>Couples ritual</h2>
              <p>120 min · $198</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export const DEMO_COMPONENTS: Record<string, ComponentType> = {
  "summit-lodge": DemoSummitLodge,
  trailhead: DemoTrailhead,
  "ember-slate": DemoEmberSlate,
  norwood: DemoNorwood,
  "pulse-metrics": DemoPulseMetrics,
  "haven-spa": DemoHavenSpa,
};
