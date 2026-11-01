import type { ComponentType } from "react";

const IMG = "/brand/website-demos";

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
          <p className="wd-app-kicker">Nagarkot · 12 rooms</p>
          <p className="wd-app-demo-title">Book a quiet night above the ridge</p>
          <p className="wd-app-lede">Forest suites, fireside dining, and airport transfer on request.</p>
          <form className="wd-app-book" onSubmit={(e) => e.preventDefault()}>
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
          </form>
        </div>
        <aside className="wd-app-gallery">
          <img src={`${IMG}/lodge-hero.jpg`} alt="" />
          <div>
            <img src={`${IMG}/lodge-room-1.jpg`} alt="" />
            <img src={`${IMG}/lodge-room-2.jpg`} alt="" />
          </div>
        </aside>
      </section>
      <section className="wd-app-rooms">
        {[
          [`${IMG}/lodge-room-1.jpg`, "Forest deluxe", "NPR 12,500", "King · garden"],
          [`${IMG}/lodge-room-2.jpg`, "Panorama suite", "NPR 18,900", "Valley view"],
          [`${IMG}/lodge-room-3.jpg`, "Hill cottage", "NPR 15,200", "Fireplace"],
        ].map(([src, name, price, meta]) => (
          <article key={name}>
            <img src={src} alt="" />
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
          <p className="wd-app-kicker">Everest region · 14 days</p>
          <p className="wd-app-demo-title">Departures with named guides</p>
          <p className="wd-app-lede">Small groups, porter welfare, and a written altitude plan before you fly to Lukla.</p>
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
              <td>EBC classic</td>
              <td>4 left</td>
            </tr>
            <tr>
              <td>02 Nov</td>
              <td>Gokyo lakes</td>
              <td>6 left</td>
            </tr>
            <tr>
              <td>14 Nov</td>
              <td>Island Peak</td>
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
          <p className="wd-app-kicker">United States · Thu–Sun</p>
          <p className="wd-app-demo-title">Seven-course tasting, one seating</p>
          <p className="wd-app-lede">Wood-fired produce and natural wines. Last table 21:30.</p>
          <form className="wd-app-reserve" onSubmit={(e) => e.preventDefault()}>
            <input defaultValue="Saturday" readOnly />
            <input defaultValue="2 guests" readOnly />
            <button type="button">Hold table</button>
          </form>
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
        <p>Merino, structure, and export-ready sizes. Pickup in Thamel.</p>
      </section>
      <section className="wd-app-products">
        {[
          [`${IMG}/fashion-1.jpg`, "Alpine coat", "NPR 18,900"],
          [`${IMG}/fashion-2.jpg`, "Ridge scarf", "NPR 4,200"],
          [`${IMG}/fashion-3.jpg`, "Summit boot", "NPR 12,400"],
          [`${IMG}/fashion-hero.jpg`, "Wool overshirt", "NPR 9,800"],
        ].map(([src, name, price]) => (
          <article key={name}>
            <img src={src} alt="" />
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
          <p className="wd-app-kicker">Thamel · Daily 10:00–21:00</p>
          <p className="wd-app-demo-title">Book a ritual, not a popup</p>
          <p className="wd-app-lede">Therapist matched to pressure. Gift vouchers at reception.</p>
          <form className="wd-app-book wd-app-book--spa" onSubmit={(e) => e.preventDefault()}>
            <label>
              Treatment
              <input defaultValue="Deep tissue 60" readOnly />
            </label>
            <label>
              Time
              <input defaultValue="16:30" readOnly />
            </label>
            <button type="button">Confirm</button>
          </form>
        </div>
        <ul className="wd-app-treats">
          <li>
            <img src={`${IMG}/spa-1.jpg`} alt="" />
            <div>
              <h2>Deep tissue</h2>
              <p>60 min · NPR 4,200</p>
            </div>
          </li>
          <li>
            <img src={`${IMG}/spa-hero.jpg`} alt="" />
            <div>
              <h2>Couples ritual</h2>
              <p>120 min · NPR 9,800</p>
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
