import type { CSSProperties, ReactNode } from "react";
import type { ErpSuite } from "@/lib/orbit-software-page";

function AppWindow({
  accent,
  product,
  user,
  search,
  nav,
  children,
}: {
  accent: string;
  product: string;
  user: string;
  search: string;
  nav: { label: string; on?: boolean }[];
  children: ReactNode;
}) {
  return (
    <div className="erp-app" style={{ "--erp-accent": accent } as CSSProperties} aria-hidden="true">
      <div className="erp-app-top">
        <span className="erp-app-traffic">
          <i />
          <i />
          <i />
        </span>
        <div className="erp-app-search">{search}</div>
        <div className="erp-app-user">
          <span>United States · live</span>
          <b>{user}</b>
        </div>
      </div>
      <div className="erp-app-body">
        <aside className="erp-app-nav">
          <strong>{product}</strong>
          {nav.map((item) => (
            <span key={item.label} className={item.on ? "is-on" : undefined}>
              {item.label}
            </span>
          ))}
        </aside>
        <div className="erp-app-main">{children}</div>
      </div>
    </div>
  );
}

function Toolbar({
  title,
  filters,
  action,
}: {
  title: string;
  filters: string[];
  action: string;
}) {
  return (
    <div className="erp-app-toolbar">
      <h4>{title}</h4>
      <div className="erp-app-filters">
        {filters.map((f, i) => (
          <em key={f} className={i === 0 ? "is-on" : undefined}>
            {f}
          </em>
        ))}
      </div>
      <span className="erp-app-btn">{action}</span>
    </div>
  );
}

function Kpis({ items }: { items: { label: string; value: string; delta?: string }[] }) {
  return (
    <div className="erp-app-kpis">
      {items.map((item) => (
        <article key={item.label}>
          <p>{item.label}</p>
          <b>{item.value}</b>
          {item.delta ? <em>{item.delta}</em> : null}
        </article>
      ))}
    </div>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <table className="erp-app-table">
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("-")}>
            {row.map((cell, i) => (
              <td key={`${cell}-${i}`}>
                {i === row.length - 1 ? (
                  <span className={`erp-pill erp-pill--${cell.toLowerCase().replace(/\s+/g, "")}`}>{cell}</span>
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ErpConsole({ suite }: { suite: ErpSuite }) {
  switch (suite.ui) {
    case "billing":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit Billing"
          user="RS"
          search="Search invoices, GST, customers…"
          nav={[
            { label: "Overview", on: true },
            { label: "Invoices" },
            { label: "Customers" },
            { label: "GST" },
            { label: "Reports" },
          ]}
        >
          <Toolbar title="Receivables" filters={["This month", "FY 2083", "Overdue"]} action="New invoice" />
          <Kpis
            items={[
              { label: "Collected", value: "NPR 8.42L", delta: "+12.4%" },
              { label: "Open AR", value: "NPR 1.18L", delta: "42 invoices" },
              { label: "Avg days", value: "11.2", delta: "−1.4 vs last" },
            ]}
          />
          <Table
            head={["Invoice", "Customer", "Due", "Amount", "Status"]}
            rows={[
              ["INV-2048", "Summit Lodge", "12 Oct", "48,200", "Paid"],
              ["INV-2047", "Trailhead Exp.", "14 Oct", "22,900", "Due"],
              ["INV-2046", "Northline Trek", "15 Oct", "31,400", "Due"],
              ["INV-2044", "Haven Spa", "02 Oct", "9,800", "Overdue"],
            ]}
          />
        </AppWindow>
      );
    case "hotel":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit PMS"
          user="NK"
          search="Room, guest, confirmation…"
          nav={[
            { label: "Front desk", on: true },
            { label: "Rooms" },
            { label: "Housekeeping" },
            { label: "Folios" },
            { label: "Night audit" },
          ]}
        >
          <Toolbar title="Occupancy · 12–14 Oct" filters={["All rooms", "Arrivals", "OOO"]} action="Walk-in" />
          <Kpis
            items={[
              { label: "Occupancy", value: "86%", delta: "24 / 28" },
              { label: "Arrivals", value: "7 today" },
              { label: "ADR", value: "NPR 14,200" },
            ]}
          />
          <div className="erp-room-grid">
            <header>
              <span>Room</span>
              <span>Fri 12</span>
              <span>Sat 13</span>
              <span>Sun 14</span>
            </header>
            {[
              ["101 Deluxe", "in", "in", "out"],
              ["102 Deluxe", "out", "hold", "in"],
              ["201 Suite", "in", "in", "in"],
              ["202 Suite", "ooo", "ooo", "out"],
              ["301 Twin", "in", "out", "hold"],
            ].map((row) => (
              <div key={row[0]} className="erp-room-row">
                <b>{row[0]}</b>
                {row.slice(1).map((cell, i) => (
                  <i key={`${row[0]}-${i}`} data-st={cell} />
                ))}
              </div>
            ))}
          </div>
        </AppWindow>
      );
    case "ota":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit Channels"
          user="AP"
          search="Reservation ID or channel…"
          nav={[
            { label: "Inbox", on: true },
            { label: "Mapping" },
            { label: "Rates" },
            { label: "Calendar" },
          ]}
        >
          <Toolbar title="Channel health" filters={["Live", "Holds", "Mapping"]} action="Force sync" />
          <Kpis
            items={[
              { label: "Live channels", value: "3" },
              { label: "Last sync", value: "2 min" },
              { label: "Conflicts", value: "1 hold" },
            ]}
          />
          <Table
            head={["Channel", "Res", "Share", "Latency", "Health"]}
            rows={[
              ["Booking.com", "186", "42%", "1.2s", "Live"],
              ["Agoda", "94", "26%", "1.8s", "Live"],
              ["Expedia", "61", "18%", "—", "Hold"],
              ["Direct / web", "48", "14%", "0.4s", "Live"],
            ]}
          />
        </AppWindow>
      );
    case "warehouse":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit WMS"
          user="WK"
          search="SKU, bin, vendor…"
          nav={[
            { label: "Inventory", on: true },
            { label: "Pick lists" },
            { label: "Vendors" },
            { label: "Sites" },
          ]}
        >
          <Toolbar title="Stock across sites" filters={["All sites", "KTM", "Reorder"]} action="Create pick" />
          <Kpis
            items={[
              { label: "SKUs", value: "1,240" },
              { label: "On hand", value: "NPR 62L" },
              { label: "Reorder", value: "12 alerts" },
            ]}
          />
          <ul className="erp-stock">
            {[
              ["Rice 25kg · A-12", "72%", "ok"],
              ["Cooking oil · B-04", "28%", "low"],
              ["Packaging A4 · C-01", "9%", "out"],
              ["Mineral water · D-08", "64%", "ok"],
            ].map(([name, w, tone]) => (
              <li key={name} data-tone={tone}>
                <span>{name}</span>
                <i>
                  <b style={{ width: w }} />
                </i>
                <em>{w}</em>
              </li>
            ))}
          </ul>
        </AppWindow>
      );
    case "factory":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit MES"
          user="PR"
          search="WO, batch, line…"
          nav={[
            { label: "Work orders", on: true },
            { label: "BOM" },
            { label: "QC" },
            { label: "Shifts" },
          ]}
        >
          <Toolbar title="Line 2 · day shift" filters={["Open", "QC hold", "Packed"]} action="Release WO" />
          <Kpis
            items={[
              { label: "Open WO", value: "14" },
              { label: "On hold", value: "2 QC" },
              { label: "Packed today", value: "38" },
            ]}
          />
          <Table
            head={["WO", "SKU", "Stage", "Yield", "Status"]}
            rows={[
              ["WO-88", "Trail pack", "Cutting", "98%", "Run"],
              ["WO-89", "Sleeping bag", "QC", "91%", "Hold"],
              ["WO-90", "Down jacket", "Pack", "99%", "Done"],
              ["WO-91", "Gaiter", "Sew", "—", "Run"],
            ]}
          />
        </AppWindow>
      );
    case "pos":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit POS"
          user="FD"
          search="Table, SKU, modifier…"
          nav={[
            { label: "Floor", on: true },
            { label: "KDS" },
            { label: "Menu" },
            { label: "Close day" },
          ]}
        >
          <Toolbar title="Dinner service" filters={["Floor", "Takeaway", "Room"]} action="New ticket" />
          <div className="erp-pos">
            <div className="erp-floor">
              {["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"].map((t, i) => (
                <button key={t} type="button" data-busy={i < 5 ? "1" : "0"}>
                  {t}
                  <small>{i < 5 ? `${2 + (i % 3)} guests` : "Free"}</small>
                </button>
              ))}
            </div>
            <aside>
              <p>Ticket #1842 · T3 · 00:18</p>
              <ul>
                <li>
                  <span>Momo platter × 2</span>
                  <em>1,600</em>
                </li>
                <li>
                  <span>Thakali set × 1</span>
                  <em>890</em>
                </li>
                <li>
                  <span>Lassi × 3</span>
                  <em>540</em>
                </li>
                <li>
                  <span>Service 10%</span>
                  <em>303</em>
                </li>
              </ul>
              <div className="erp-pos-total">
                <span>Due</span>
                <b>NPR 3,333</b>
              </div>
              <button type="button">Settle · Fonepay</button>
            </aside>
          </div>
        </AppWindow>
      );
    case "crm":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit CRM"
          user="SL"
          search="Company, owner, deal…"
          nav={[
            { label: "Pipeline", on: true },
            { label: "Leads" },
            { label: "Tasks" },
            { label: "Reports" },
          ]}
        >
          <Toolbar title="Hospitality pipeline" filters={["Q2", "My deals", "Won"]} action="New deal" />
          <div className="erp-pipe-board">
            {[
              ["New · 2", ["Kaya Spa · 80k", "Marlo Hotel · 2.1L"]],
              ["Talking · 1", ["Ambition Holidays · 1.4L"]],
              ["Won · 1", ["Thamel Park · 3.6L"]],
            ].map(([col, cards]) => (
              <div key={String(col)}>
                <p>{col}</p>
                {(cards as string[]).map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            ))}
          </div>
        </AppWindow>
      );
    case "saas":
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit Suite"
          user="GO"
          search="Tenant, plan, invoice…"
          nav={[
            { label: "Home", on: true },
            { label: "Billing" },
            { label: "CRM" },
            { label: "Analytics" },
          ]}
        >
          <Toolbar title="Revenue" filters={["90d", "MRR", "NRR"]} action="Export" />
          <Kpis
            items={[
              { label: "MRR", value: "$284k", delta: "+18%" },
              { label: "NRR", value: "118%" },
              { label: "Seats", value: "312" },
            ]}
          />
          <div className="erp-spark">
            {["28%", "36%", "32%", "48%", "44%", "61%", "58%", "74%", "69%", "88%", "82%", "96%"].map((h, i) => (
              <i key={i} style={{ height: h }} />
            ))}
          </div>
        </AppWindow>
      );
    case "web":
      return (
        <AppWindow
          accent={suite.accent}
          product="Guest portal"
          user="YA"
          search="Booking or invoice…"
          nav={[
            { label: "Home", on: true },
            { label: "Bookings" },
            { label: "Invoices" },
            { label: "Support" },
          ]}
        >
          <div className="erp-portal">
            <header>
              <p>Upcoming stay</p>
              <h4>Summit Lodge · 12–15 Oct</h4>
            </header>
            <Kpis
              items={[
                { label: "Balance", value: "NPR 12,500" },
                { label: "Voucher", value: "Dinner 2" },
                { label: "Room", value: "201 Suite" },
              ]}
            />
            <Table
              head={["Date", "Item", "Amount", "Status"]}
              rows={[
                ["12 Oct", "Room 201", "28,400", "Paid"],
                ["13 Oct", "Airport pickup", "3,200", "Due"],
              ]}
            />
          </div>
        </AppWindow>
      );
    case "android":
    case "ios":
      return (
        <div className={`erp-device ${suite.ui === "ios" ? "is-ios" : ""}`} style={{ "--erp-accent": suite.accent } as CSSProperties}>
          <div className="erp-device-status">
            <span>9:41</span>
            <span>{suite.ui === "ios" ? "LTE" : "5G"}</span>
          </div>
          <span className="erp-device-notch" />
          <div className="erp-device-app">
            <p>{suite.ui === "ios" ? "Field · iOS" : "Field · Android"}</p>
            <h4>Today’s jobs</h4>
            <ul>
              <li>
                <b>Pick list #441</b>
                <span>Thamel warehouse · 10:20</span>
              </li>
              <li>
                <b>Check-in 201</b>
                <span>Summit Lodge · 14:00</span>
              </li>
              <li>
                <b>Meter read</b>
                <span>Offline · queued</span>
              </li>
            </ul>
            <button type="button">Sync now</button>
          </div>
        </div>
      );
    default:
      return (
        <AppWindow
          accent={suite.accent}
          product="Orbit Tenants"
          user="SA"
          search="Org, plan, audit…"
          nav={[
            { label: "Orgs", on: true },
            { label: "Plans" },
            { label: "Invoices" },
            { label: "Audit" },
          ]}
        >
          <Toolbar title="Tenants" filters={["Live", "Trial", "Paused"]} action="Invite org" />
          <Table
            head={["Tenant", "Plan", "Seats", "Renews", "Status"]}
            rows={[
              ["acme.orbit", "Growth", "24", "Nov 12", "Live"],
              ["northline", "Launch", "8", "Oct 28", "Trial"],
              ["haven-spa", "Enterprise", "60", "Jan 04", "Live"],
              ["trailhead", "Growth", "16", "Dec 19", "Live"],
            ]}
          />
        </AppWindow>
      );
  }
}
