"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminBlogStudio, type BlogMode } from "@/components/admin/admin-blog-studio";
import { AdminAccountPanel } from "@/components/admin/admin-account-panel";
import { AdminChromeEditor } from "@/components/admin/admin-chrome-editor";
import { AdminMediaLibrary } from "@/components/admin/admin-media-library";
import { AdminInquiriesPanel } from "@/components/admin/admin-inquiries-panel";
import { AdminFooterEditor } from "@/components/admin/admin-footer-editor";
import { AdminHomeSurfaceEditor } from "@/components/admin/admin-home-surface-editor";
import { AdminWebsiteDevelopmentEditor } from "@/components/admin/admin-website-development-editor";
import { AdminMediaField } from "@/components/admin/admin-media-field";
import { AdminPageHub, AdminSitePagesGrid } from "@/components/admin/admin-page-hub";
import { AdminSectionThumb } from "@/components/admin/admin-section-thumb";
import { sectionPreviewForPage } from "@/lib/admin-section-previews";
import { OrbitHeroEditor } from "@/components/orbit/orbit-hero-editor";
import { OrbitAppointmentsPanel } from "@/components/orbit/orbit-appointments-panel";
import {
  ADMIN_NAV_GROUPS,
  ADMIN_PAGES,
  adminPageById,
  adminPageByPath,
  type AdminPage,
  type AdminPageId,
  type EditorSection,
  type SectionId,
} from "@/lib/admin-nav";
import type { AboutConfig } from "@/lib/about-config";
import type { CareersConfig } from "@/lib/careers-config";
import type { CustomAppsConfig } from "@/lib/custom-apps-config";
import type { ProjectsConfig } from "@/lib/projects-config";
import type { HeroConfig } from "@/lib/hero-config";
import type { NeedConfig } from "@/lib/need-config";
import type { WorkConfig } from "@/lib/work-config";
import type { SoftwareConfig } from "@/lib/software-config";
import type { BlogCategory, BlogPost, BlogTag } from "@/lib/blog-types";
import type { PageSeo } from "@/lib/page-seo-store";
import type { FooterConfig } from "@/lib/footer-config";
import type { HomeSurfaceConfig } from "@/lib/home-surface-config";
import type { WebsiteDevelopmentPageConfig } from "@/lib/website-development-page-config";
import type { SiteChrome } from "@/lib/chrome-types";
import { scoreSeo } from "@/lib/seo-score";
import { BRAND_LOGO_PRIMARY, brandAssetUrl } from "@/lib/brand-assets";

type AdminView =
  | "overview"
  | "page"
  | "blogs"
  | "compose"
  | "categories"
  | "tags"
  | "media"
  | "drafts"
  | "blog-seo"
  | "seo"
  | "chrome"
  | "account"
  | "inquiries";

type InquiryPreview = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  createdAt: string;
  status: string;
};

type Props = {
  initial: HeroConfig;
  initialNeed: NeedConfig;
  initialWork: WorkConfig;
  initialSoftware: SoftwareConfig;
  initialAbout: AboutConfig;
  initialCareers: CareersConfig;
  initialProjects: ProjectsConfig;
  initialWebApps: CustomAppsConfig;
  initialAndroidApps: CustomAppsConfig;
  initialIosApps: CustomAppsConfig;
  posts: BlogPost[];
  categories: BlogCategory[];
  tags: BlogTag[];
  pages: PageSeo[];
  chrome: SiteChrome;
  initialFooter: FooterConfig;
  initialHomeSurface: HomeSurfaceConfig;
  initialWebsiteDevelopment: WebsiteDevelopmentPageConfig;
  inquiryNew: number;
  inquiryTotal: number;
  recentInquiries: InquiryPreview[];
};

function readHash() {
  if (typeof window === "undefined") {
    return { view: "overview" as AdminView, pageId: "home" as AdminPageId, section: "hub" as SectionId, slug: "" };
  }
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const view = (hash.get("view") || "overview") as AdminView;
  const pageId = (hash.get("page") || "home") as AdminPageId;
  const sectionRaw = hash.get("section");
  const section = (sectionRaw || (view === "page" ? "hub" : "hero")) as SectionId;
  return {
    view,
    pageId,
    section,
    slug: hash.get("slug") || "",
  };
}

function writeHash(view: AdminView, pageId?: string, section?: string, slug?: string) {
  const params = new URLSearchParams();
  params.set("view", view);
  if (pageId) params.set("page", pageId);
  if (section) params.set("section", section);
  if (slug) params.set("slug", slug);
  window.location.hash = params.toString();
}

/** Human-readable failure text for a non-2xx admin save response. */
async function failureMessage(response: Response, what: string, knownError?: string): Promise<string> {
  let reason = knownError?.trim() || "";
  if (!reason) {
    try {
      const body = (await response.clone().json()) as { error?: string };
      reason = body?.error?.trim() || "";
    } catch {
      /* non-JSON body */
    }
  }
  if (response.status === 429) return "Too many attempts. Wait a moment and try again.";
  if (response.status === 413) return `The ${what} payload is too large.`;
  if (reason) return `Could not save ${what}: ${reason}.`;
  return `Could not save ${what} (server returned ${response.status}).`;
}

function NavButton({  icon,
  label,
  hint,
  active,
  onClick,
}: {
  icon: string;
  label: string;
  hint?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button type="button" className={active ? "is-active" : ""} onClick={onClick}>
      <span className="go-cms-nav-icon" aria-hidden="true">{icon}</span>
      <span className="go-cms-nav-text">
        <span className="go-cms-nav-label">{label}</span>
        {hint ? <span className="go-cms-nav-hint">{hint}</span> : null}
      </span>
    </button>
  );
}

export function AdminApp(props: Props) {
  const router = useRouter();
  const start = readHash();
  const [navOpen, setNavOpen] = useState(false);
  const [view, setView] = useState<AdminView>(start.view);
  const [pageId, setPageId] = useState<AdminPageId>(start.pageId);
  const [section, setSection] = useState<SectionId>(start.section);
  const [composeSlug, setComposeSlug] = useState(start.slug);
  const [expanded, setExpanded] = useState<AdminPageId | null>(start.pageId);
  const [posts, setPosts] = useState(props.posts);
  const [categories, setCategories] = useState(props.categories);
  const [tags, setTags] = useState(props.tags);
  const [pages, setPages] = useState(props.pages);
  const [chrome, setChrome] = useState(props.chrome);
  const [footer, setFooter] = useState(props.initialFooter);
  const [homeSurface, setHomeSurface] = useState(props.initialHomeSurface);
  const [websiteDevelopment, setWebsiteDevelopment] = useState(props.initialWebsiteDevelopment);
  const [wdStatus, setWdStatus] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [query, setQuery] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);

  const page = adminPageById(pageId) ?? ADMIN_PAGES[0];
  const publishedPosts = posts.filter((item) => item.isPublished);
  const draftPosts = posts.filter((item) => !item.isPublished);
  const missingSeo = pages.filter((item) => !item.seoTitle.trim() || !item.seoDescription.trim());

  const filteredPages = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ADMIN_PAGES;
    return ADMIN_PAGES.filter((item) => `${item.label} ${item.path}`.toLowerCase().includes(q));
  }, [query]);

  const contentBundle = useMemo(
    () => ({
      hero: props.initial,
      need: props.initialNeed,
      work: props.initialWork,
      software: props.initialSoftware,
      about: props.initialAbout,
      careers: props.initialCareers,
      projects: props.initialProjects,
      webApps: props.initialWebApps,
      androidApps: props.initialAndroidApps,
      iosApps: props.initialIosApps,
    }),
    [
      props.initial,
      props.initialNeed,
      props.initialWork,
      props.initialSoftware,
      props.initialAbout,
      props.initialCareers,
      props.initialProjects,
      props.initialWebApps,
      props.initialAndroidApps,
      props.initialIosApps,
    ],
  );

  function previewFor(pageItem: AdminPage, sectionId: SectionId) {
    return sectionPreviewForPage(pageItem, sectionId, contentBundle);
  }

  async function uploadHeaderLogo(file: File) {
    setBusy(true);
    const form = new FormData();
    form.set("kind", "chromeLogo");
    form.set("file", file);
    const response = await fetch("/api/orbit/upload", { method: "POST", body: form });
    setBusy(false);
    if (response.status === 401) {
      setStatus("Session expired. Reloading the sign-in screen…");
      router.push("/admin");
      router.refresh();
      return;
    }
    const data = (await response.json().catch(() => ({}))) as { chrome?: SiteChrome; error?: string };
    if (data.chrome) {
      setChrome(data.chrome);
      setStatus("Header logo updated on the live site.");
    } else {
      setStatus(`Could not upload logo: ${data.error || `server returned ${response.status}`}.`);
    }
  }

  useEffect(() => {
    document.body.classList.add("go-cms-open");
    document.body.classList.remove("admin-locked", "go-dash-open");
    return () => document.body.classList.remove("go-cms-open");
  }, []);

  useEffect(() => {
    const onHash = () => {
      const next = readHash();
      setView(next.view);
      if (adminPageById(next.pageId)) {
        setPageId(next.pageId);
        setExpanded(next.pageId);
      }
      setSection(next.section);
      setComposeSlug(next.slug);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function go(next: AdminView, nextPage?: AdminPage, nextSection?: SectionId, slug?: string) {
    setView(next);
    setNavOpen(false);
    setComposeSlug(slug || "");
    if (nextPage) {
      setPageId(nextPage.id);
      setExpanded(nextPage.id);
      const sectionId =
        nextSection ?? (nextPage.seoOnly ? "seo" : nextPage.editor ? "hub" : nextPage.sections[0]?.id ?? "seo");
      setSection(sectionId);
      writeHash(next, nextPage.id, sectionId, slug);
      return;
    }
    writeHash(next, undefined, undefined, slug);
  }

  async function logout() {
    await fetch("/api/orbit/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  async function saveSeo() {
    setBusy(true);
    const response = await fetch("/api/orbit/page-seo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pages }),
    });
    setBusy(false);
    if (handleAuthFailure(response)) return;
    setStatus(response.ok ? "Page SEO published." : await failureMessage(response, "page SEO"));
  }

  async function uploadOgImage(pathname: string, file: File) {
    setBusy(true);
    const form = new FormData();
    form.set("kind", "ogImage");
    form.set("file", file);
    const response = await fetch("/api/orbit/upload", { method: "POST", body: form });
    const data = await response.json();
    setBusy(false);
    if (data.url) {
      setPages((current) => current.map((item) => (item.path === pathname ? { ...item, ogImage: data.url } : item)));
      setStatus("Open Graph image uploaded. Publish SEO to save.");
    } else {
      setStatus("Could not upload Open Graph image.");
    }
  }

  async function saveChrome() {
    setBusy(true);
    const response = await fetch("/api/orbit/chrome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chrome),
    });
    if (handleAuthFailure(response)) {
      setBusy(false);
      return;
    }
    const data = (await response.json().catch(() => ({}))) as { chrome?: SiteChrome; error?: string };
    setBusy(false);
    if (response.ok) {
      if (data.chrome) setChrome(data.chrome);
      setStatus("Header, footer and contact details published.");
      router.refresh();
    } else {
      setStatus(await failureMessage(response, "header and footer settings", data.error));
    }
  }

  async function saveHomeSurface() {
    setBusy(true);
    const response = await fetch("/api/orbit/home-surface", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(homeSurface),
    });
    setBusy(false);
    if (handleAuthFailure(response)) return;
    setStatus(response.ok ? "Homepage lower sections published." : await failureMessage(response, "homepage copy"));
  }

  async function saveWebsiteDevelopment(event: { preventDefault: () => void }) {
    event.preventDefault();
    setBusy(true);
    setWdStatus("");
    const response = await fetch("/api/orbit/website-development", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(websiteDevelopment),
    });
    if (handleAuthFailure(response)) {
      setBusy(false);
      return;
    }
    const data = (await response.json().catch(() => ({}))) as {
      config?: WebsiteDevelopmentPageConfig;
      error?: string;
    };
    setBusy(false);
    if (response.ok && data.config) {
      setWebsiteDevelopment(data.config);
      setWdStatus("Published. Open /service/website-development-usa on the live site.");
    } else {
      setWdStatus(await failureMessage(response, "website development page", data.error));
    }
  }

  async function saveFooter() {
    setBusy(true);
    const response = await fetch("/api/orbit/footer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(footer),
    });
    if (handleAuthFailure(response)) {
      setBusy(false);
      return;
    }
    const data = (await response.json().catch(() => ({}))) as {
      footer?: FooterConfig;
      error?: string;
    };
    setBusy(false);
    if (response.ok) {
      setFooter(data.footer ?? footer);
      setStatus("Footer content published.");
      router.refresh();
    } else {
      setStatus(await failureMessage(response, "footer", data.error));
    }
  }

  /** Sends the admin back to sign-in when the session cookie is no longer valid. */
  function handleAuthFailure(response: Response) {
    if (response.status !== 401) return false;
    setStatus("Session expired. Reloading the sign-in screen…");
    router.push("/admin");
    router.refresh();
    return true;
  }

  const title =
    view === "overview"
      ? "Dashboard"
      : view === "inquiries"
        ? "Inquiries"
        : view === "account"
          ? "Account & security"
          : view === "chrome"
          ? "Header & footer"
          : view === "blogs"
            ? "Blog Posts"
            : view === "compose"
              ? "Add New Post"
              : view === "drafts"
                ? "Drafts"
                : view === "blog-seo"
                  ? "SEO Overview"
            : view === "categories"
              ? "Categories"
              : view === "tags"
                ? "Tags"
                : view === "media"
                  ? "Media library"
                  : view === "seo"
                    ? `SEO · ${page.label}`
                    : view === "page" && section === "hub"
                      ? `${page.label} · Sections`
                      : page.label;

  const showPageHub = view === "page" && section === "hub" && !page.seoOnly;
  const showHomeSurface = view === "page" && pageId === "home" && section === "homeSurface";
  const showWebsiteDevelopment =
    view === "page" && pageId === "website-development" && section === "websiteDevelopment";
  const showEditor =
    view === "page" &&
    section !== "seo" &&
    section !== "hub" &&
    section !== "homeSurface" &&
    section !== "websiteDevelopment" &&
    Boolean(page.editor);
  const showSeo = (view === "page" && (section === "seo" || (page.seoOnly && section !== "hub"))) || view === "seo";
  const seoPage = pages.find((item) => item.path === page.path);

  return (
    <div className="go-cms">
      {navOpen ? (
        <button type="button" className="go-cms-backdrop" aria-label="Close menu" onClick={() => setNavOpen(false)} />
      ) : null}
      <div className="go-cms-mobile-bar">
        <button type="button" className="go-cms-burger" onClick={() => setNavOpen((v) => !v)}>
          {navOpen ? "Close" : "Menu"}
        </button>
        <span className="go-cms-mobile-title">Global Orbit Admin</span>
        <button type="button" className="go-cms-logout is-mobile" onClick={() => void logout()}>
          Log out
        </button>
      </div>
      <aside className={`go-cms-side ${navOpen ? "is-open" : ""}`}>
        <div className="go-cms-side-inner">
        <div className="go-cms-brand">
          <img
            src={chrome.headerLogoSrc ? chrome.headerLogoSrc : brandAssetUrl(BRAND_LOGO_PRIMARY)}
            alt="Global Orbit"
            className="go-cms-brand-logo"
            width={240}
            height={80}
            decoding="async"
          />
          <span className="go-cms-brand-kicker">Management console</span>
        </div>
        <nav>
          <p>Overview</p>
          <NavButton
            icon="◆"
            label="Dashboard"
            hint="Activity & quick actions"
            active={view === "overview"}
            onClick={() => go("overview")}
          />
          {ADMIN_NAV_GROUPS.map((group) => {
            const groupPages = group.pageIds
              .map((id) => ADMIN_PAGES.find((p) => p.id === id))
              .filter((item): item is AdminPage => Boolean(item))
              .filter((item) => filteredPages.some((fp) => fp.id === item.id));
            if (!groupPages.length) return null;
            return (
              <div key={group.id}>
                <p>{group.label}</p>
                {groupPages.map((item) => (
                  <div key={item.id}>
                    <NavButton
                      icon={item.label.slice(0, 1)}
                      label={item.label}
                      hint={item.hint}
                      active={view === "page" && pageId === item.id}
                      onClick={() => {
                        setExpanded((current) => (current === item.id ? null : item.id));
                        go("page", item);
                      }}
                    />
                    {expanded === item.id
                      ? (
                          <>
                            {!item.seoOnly ? (
                              <button
                                type="button"
                                className={`is-sub ${view === "page" && pageId === item.id && section === "hub" ? "is-active" : ""}`}
                                onClick={() => go("page", item, "hub")}
                              >
                                All sections
                              </button>
                            ) : null}
                            {item.sections.map((sub) => (
                              <button
                                key={sub.id}
                                type="button"
                                className={`is-sub ${view === "page" && pageId === item.id && section === sub.id ? "is-active" : ""}`}
                                onClick={() => go("page", item, sub.id)}
                              >
                                {sub.label}
                              </button>
                            ))}
                          </>
                        )
                      : null}
                  </div>
                ))}
              </div>
            );
          })}
          <p>Blog & content</p>
          <NavButton icon="B" label="All Posts" hint="Published & drafts" active={view === "blogs"} onClick={() => go("blogs")} />
          <NavButton icon="+" label="Add New Post" hint="Write & publish" active={view === "compose" && !composeSlug} onClick={() => go("compose")} />
          <NavButton icon="C" label="Categories" hint="Content filters" active={view === "categories"} onClick={() => go("categories")} />
          <NavButton icon="T" label="Tags" hint="Keyword tags" active={view === "tags"} onClick={() => go("tags")} />
          <NavButton icon="M" label="Media Library" hint="Images & videos" active={view === "media"} onClick={() => go("media")} />
          <NavButton icon="D" label="Drafts" hint="Unpublished posts" active={view === "drafts"} onClick={() => go("drafts")} />
          <NavButton icon="S" label="SEO Overview" hint="Blog SEO checklist" active={view === "blog-seo"} onClick={() => go("blog-seo")} />
          <p>SEO</p>
          <NavButton icon="P" label="Page metadata" hint="Every page, one list" active={view === "seo"} onClick={() => go("seo")} />
          <p>Global</p>
          <NavButton icon="H" label="Header & footer" hint="Logo, identity, links" active={view === "chrome"} onClick={() => go("chrome")} />
          <NavButton
            icon="⚿"
            label="Account & security"
            hint="Password, session"
            active={view === "account"}
            onClick={() => go("account")}
          />
          <p>Business</p>
          <NavButton
            icon="!"
            label="All inquiries"
            hint="Leads & appointments"
            active={view === "inquiries"}
            onClick={() => go("inquiries")}
          />
        </nav>
        <footer className="go-cms-side-foot">
          <button type="button" className="go-cms-logout" onClick={() => void logout()}>
            Log out
          </button>
        </footer>
        </div>
      </aside>

      <div className="go-cms-main">
        <div className="go-cms-main-strip">
          <Link href="/" target="_blank" rel="noreferrer" className="go-cms-strip-link">
            View public site
          </Link>
          <button type="button" className="go-cms-logout is-strip" onClick={() => void logout()}>
            Log out
          </button>
        </div>
        <header className="go-cms-top">
          <div>
            <p className="go-cms-crumb">{view === "overview" ? "Overview" : title}</p>
            <h1>{title}</h1>
            {view === "overview" ? (
              <p className="go-cms-lede">
                Edit every live page and homepage section from one console. All changes use the same production content stores.
              </p>
            ) : null}
          </div>
          <div className="go-cms-tools">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pages, posts, media, inquiries…" />
            <Link href={page.path} target="_blank" rel="noreferrer">
              Preview live
            </Link>
            <button type="button" className="go-cms-logout is-top" onClick={() => void logout()}>
              Log out
            </button>
            <div className="go-cms-account">
              <button type="button" onClick={() => setAccountOpen((v) => !v)} aria-expanded={accountOpen}>
                Account
              </button>
              {accountOpen ? (
                <div className="go-cms-menu">
                  <button type="button" onClick={() => go("chrome")}>
                    Site identity
                  </button>
                  <button type="button" onClick={() => go("account")}>
                    Change password
                  </button>
                  <button type="button" onClick={() => void logout()}>
                    Log out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </header>

        {status ? <p className="go-cms-toast">{status}</p> : null}

        {view === "overview" ? (
          <div className="go-cms-home">
            <section className="go-cms-hero">
              <p className="go-cms-hero-eyebrow">Management console</p>
              <h2 className="go-cms-hero-title">Welcome back</h2>
              <p className="go-cms-hero-lede">
                Every page, section, video, image, and footer of the live site — edited from one place and published instantly.
              </p>
              <div className="go-cms-hero-chips">
                <button type="button" onClick={() => go("page", ADMIN_PAGES[0], "hub")}>
                  <strong>{pages.length}</strong>
                  <span>Total pages</span>
                </button>
                <button type="button" onClick={() => go("blogs")}>
                  <strong>{posts.length}</strong>
                  <span>Blog posts</span>
                </button>
                <button type="button" onClick={() => go("inquiries")}>
                  <strong>{props.inquiryNew}</strong>
                  <span>New inquiries</span>
                </button>
                <button type="button" onClick={() => go("inquiries")}>
                  <strong>{props.inquiryTotal}</strong>
                  <span>All inquiries</span>
                </button>
              </div>
            </section>
            <div className="go-cms-kpis">
              <button type="button" onClick={() => go("seo")}>
                <strong>{pages.filter((item) => item.robotsIndex !== false).length}</strong>
                <span>Indexed pages</span>
                <small>Live in sitemap</small>
              </button>
              <button type="button" onClick={() => go("blogs")}>
                <strong>{publishedPosts.length}</strong>
                <span>Published posts</span>
                <small>Live on /blogs</small>
              </button>
              <button type="button" onClick={() => go("drafts")}>
                <strong>{draftPosts.length}</strong>
                <span>Draft posts</span>
                <small>Awaiting publish</small>
              </button>
              <button type="button" onClick={() => go("seo")}>
                <strong>{missingSeo.length}</strong>
                <span>SEO to do</span>
                <small>Missing title or description</small>
              </button>
            </div>
            <div className="go-cms-split">
              <section className="go-cms-card">
                <header>
                  <h2>Recent website pages</h2>
                  <button type="button" onClick={() => go("page", ADMIN_PAGES[0])}>
                    View all
                  </button>
                </header>
                <ul className="go-cms-rows">
                  {ADMIN_PAGES.slice(0, 5).map((item) => (
                    <li key={item.id}>
                      <button type="button" onClick={() => go("page", item)}>
                        <strong>{item.label}</strong>
                        <span>{item.path}</span>
                      </button>
                      <em>Published</em>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="go-cms-card">
                <header>
                  <h2>Recent blog posts</h2>
                  <button type="button" onClick={() => go("blogs")}>
                    View all
                  </button>
                </header>
                {publishedPosts.length ? (
                  <ul className="go-cms-rows">
                    {publishedPosts.slice(0, 4).map((post) => (
                      <li key={post.slug}>
                        <button type="button" onClick={() => go("compose")}>
                          <strong>{post.title}</strong>
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </button>
                        <em>{post.isPublished ? "Published" : "Draft"}</em>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="go-cms-empty">No published posts yet.</p>
                )}
              </section>
              <section className="go-cms-card">
                <header>
                  <h2>Latest inquiries</h2>
                  <button type="button" onClick={() => go("inquiries")}>
                    View all
                  </button>
                </header>
                {props.recentInquiries.length ? (
                  <ul className="go-cms-rows">
                    {props.recentInquiries.map((item) => (
                      <li key={item.id}>
                        <strong>{item.name}</strong>
                        <span>{item.subject || item.email}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="go-cms-empty">No new inquiries yet. When customers submit inquiries, they will appear here.</p>
                )}
              </section>
              <section className="go-cms-card">
                <h2>Quick actions</h2>
                <div className="go-cms-quick">
              <button type="button" onClick={() => go("page", ADMIN_PAGES[0], "hub")}>
                Edit homepage
              </button>
                  <button type="button" onClick={() => go("compose")}>
                    Add new blog post
                  </button>
                  <button type="button" onClick={() => go("media")}>
                    Manage media
                  </button>
                  <button type="button" onClick={() => go("inquiries")}>
                    View inquiries
                  </button>
                  <button type="button" onClick={() => go("chrome")}>
                    Edit header
                  </button>
                  <button type="button" onClick={() => go("chrome")}>
                    Edit footer
                  </button>
                </div>
                {missingSeo.length ? (
                  <p className="go-cms-help">{missingSeo.length} pages still need a title or description.</p>
                ) : (
                  <p className="go-cms-help">Page metadata checklist is complete. This is not a ranking score.</p>
                )}
              </section>
            </div>
            <section className="go-cms-card go-cms-dashboard-sections">
              <header>
                <h2>Homepage sections</h2>
                <button type="button" onClick={() => go("page", ADMIN_PAGES[0], "hub")}>
                  Open homepage hub
                </button>
              </header>
              <div className="go-cms-metric-grid is-compact">
                {ADMIN_PAGES[0].sections
                  .filter((item) => item.id !== "seo")
                  .map((item) => {
                    const preview = previewFor(ADMIN_PAGES[0], item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className="go-cms-metric-card is-rich"
                        onClick={() => go("page", ADMIN_PAGES[0], item.id)}
                      >
                        <AdminSectionThumb preview={preview} />
                        <p className="go-cms-metric-label">Homepage</p>
                        <strong className="go-cms-metric-title">{item.label}</strong>
                        <small>{preview.excerpt || item.hint}</small>
                        <em>Edit →</em>
                      </button>
                    );
                  })}
              </div>
            </section>
            {ADMIN_NAV_GROUPS.map((group) => {
              const groupPages = group.pageIds
                .map((id) => ADMIN_PAGES.find((p) => p.id === id))
                .filter((item): item is AdminPage => Boolean(item));
              return (
                <section key={group.id} className="go-cms-card go-cms-dashboard-sections">
                  <header>
                    <h2>{group.label}</h2>
                  </header>
                  <AdminSitePagesGrid
                    pages={groupPages}
                    previewForPage={(item) =>
                      previewFor(
                        item,
                        item.seoOnly ? "seo" : (item.sections.find((s) => s.id !== "seo")?.id ?? "hub"),
                      )
                    }
                    onOpen={(item) => go("page", item, item.seoOnly ? "seo" : "hub")}
                  />
                </section>
              );
            })}
          </div>
        ) : null}

        {showPageHub ? (
          <AdminPageHub
            page={page}
            previewFor={(sectionId) => previewFor(page, sectionId)}
            onOpen={(next) => {
              if (next === "seo") {
                go("page", page, "seo");
                return;
              }
              go("page", page, next);
            }}
          />
        ) : null}

        {showHomeSurface ? (
          <div className="go-cms-editor go-cms-editor--light">
            <div className="go-cms-editor-bar">
              <button type="button" className="go-cms-back" onClick={() => go("page", page, "hub")}>
                ← All sections
              </button>
              <p className="go-cms-help">Homepage · lower sections</p>
            </div>
            <AdminHomeSurfaceEditor
              surface={homeSurface}
              busy={busy}
              onChange={setHomeSurface}
              onSave={() => void saveHomeSurface()}
            />
          </div>
        ) : null}

        {showWebsiteDevelopment ? (
          <div className="go-cms-editor go-cms-editor--light">
            <div className="go-cms-editor-bar">
              <button type="button" className="go-cms-back" onClick={() => go("page", page, "hub")}>
                ← All sections
              </button>
              <p className="go-cms-help">Website Development USA · full page</p>
            </div>
            <AdminWebsiteDevelopmentEditor
              config={websiteDevelopment}
              busy={busy}
              status={wdStatus}
              onChange={setWebsiteDevelopment}
              onSubmit={(event) => void saveWebsiteDevelopment(event)}
            />
          </div>
        ) : null}

        {showEditor ? (
          <div className="go-cms-editor go-cms-editor--light">
            <div className="go-cms-editor-bar">
              <button type="button" className="go-cms-back" onClick={() => go("page", page, "hub")}>
                ← All sections
              </button>
              <p className="go-cms-help">
                {page.label} · {page.sections.find((item) => item.id === section)?.label} · {page.path}
              </p>
            </div>
            <OrbitHeroEditor
              hideShell
              activeSection={section as EditorSection}
              onActiveSection={(next) => {
                if (next === "overview") {
                  go("overview");
                  return;
                }
                go("page", page, next);
              }}
              platformSlug={page.platformSlug}
              initial={props.initial}
              initialNeed={props.initialNeed}
              initialWork={props.initialWork}
              initialSoftware={props.initialSoftware}
              initialAbout={props.initialAbout}
              initialCareers={props.initialCareers}
              initialProjects={props.initialProjects}
              initialWebApps={props.initialWebApps}
              initialAndroidApps={props.initialAndroidApps}
              initialIosApps={props.initialIosApps}
              authed
              needsSetup={false}
            />
          </div>
        ) : null}

        {view === "seo" ? (
          <section className="go-cms-card">
            <h2>All page metadata</h2>
            <p className="go-cms-help">
              Title, description, keywords, tags, Open Graph, and index flags for every public URL. Publish after edits.
            </p>
            <ul className="go-cms-rows go-cms-seo-index">
              {pages.map((item) => {
                const ready = Boolean(item.seoTitle.trim() && item.seoDescription.trim());
                return (
                  <li key={item.path}>
                    <button
                      type="button"
                      onClick={() => {
                        const match = adminPageByPath(item.path);
                        if (match) go("page", match, "seo");
                        else setStatus(`Open ${item.path} from search or add it as a managed page.`);
                      }}
                    >
                      <strong>{item.label}</strong>
                      <span>{item.path}</span>
                    </button>
                    <em>{ready ? "Ready" : "Needs SEO"}</em>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {showSeo && seoPage ? (
          <SeoPanel
            label={page.label}
            path={page.path}
            seo={seoPage}
            busy={busy}
            onChange={(patch) => setPages((current) => current.map((item) => (item.path === seoPage.path ? { ...item, ...patch } : item)))}
            onSave={() => void saveSeo()}
            onUploadOg={(file) => void uploadOgImage(seoPage.path, file)}
          />
        ) : null}

        {view === "blogs" || view === "compose" || view === "categories" || view === "tags" || view === "drafts" || view === "blog-seo" ? (
          <AdminBlogStudio
            key={`${view}-${composeSlug}`}
            posts={posts}
            categories={categories}
            tags={tags}
            mode={(view === "blog-seo" ? "seo-overview" : view === "blogs" ? "list" : view) as BlogMode}
            composeSlug={composeSlug}
            onPosts={setPosts}
            onCategories={setCategories}
            onTags={setTags}
            onMode={(mode, slug) => go(mode === "list" ? "blogs" : mode === "seo-overview" ? "blog-seo" : mode, undefined, undefined, slug)}
          />
        ) : null}

        {view === "media" ? <AdminMediaLibrary /> : null}

        {view === "chrome" ? (
          <>
          <AdminChromeEditor
            chrome={chrome}
            busy={busy}
            onChange={setChrome}
            onSave={() => void saveChrome()}
            onUpload={(file) => void uploadHeaderLogo(file)}
          />
          <AdminFooterEditor footer={footer} busy={busy} onChange={setFooter} onSave={() => void saveFooter()} />
          </>
        ) : null}

        {view === "account" ? (
          <AdminAccountPanel
            onSignedOut={() => {
              void logout();
            }}
          />
        ) : null}

        {view === "inquiries" ? (
          <section className="go-cms-card go-cms-leads">
            <AdminInquiriesPanel />
            <OrbitAppointmentsPanel />
          </section>
        ) : null}
      </div>
    </div>
  );
}

function SeoPanel({
  label,
  path,
  seo,
  busy,
  onChange,
  onSave,
  onUploadOg,
}: {
  label: string;
  path: string;
  seo: PageSeo;
  busy: boolean;
  onChange: (patch: Partial<PageSeo>) => void;
  onSave: () => void;
  onUploadOg: (file: File) => void;
}) {
  const score = scoreSeo({
    title: label,
    seoTitle: seo.seoTitle,
    seoDescription: seo.seoDescription,
    focusKeyword: seo.focusKeyword,
    body: seo.seoDescription,
    slug: path.replace(/^\//, "") || "home",
    canonical: seo.canonical,
    featuredImage: seo.ogImage,
    featuredImageAlt: seo.ogTitle,
    excerpt: seo.seoDescription,
  });
  return (
    <section className="go-cms-card">
      <h2>
        SEO · {label} <small>{path}</small>
      </h2>
      <p className="go-cms-help">Checklist {score.score}/100 from these fields. Not a Google ranking.</p>
      <div className="go-cms-form">
        <label>
          Meta title
          <input value={seo.seoTitle} onChange={(e) => onChange({ seoTitle: e.target.value })} />
        </label>
        <label>
          Meta description
          <textarea value={seo.seoDescription} onChange={(e) => onChange({ seoDescription: e.target.value })} />
        </label>
        <label>
          Canonical
          <input value={seo.canonical} onChange={(e) => onChange({ canonical: e.target.value })} />
        </label>
        <label className="go-cms-check">
          <input type="checkbox" checked={seo.robotsIndex} onChange={(e) => onChange({ robotsIndex: e.target.checked })} />
          Allow indexing
        </label>
        <label>
          Keywords
          <input
            value={seo.keywords}
            placeholder="web development usa, erp software, android apps"
            onChange={(e) => onChange({ keywords: e.target.value })}
          />
        </label>
        <label>
          Tags
          <input
            value={seo.tags}
            placeholder="usa, united states, software"
            onChange={(e) => onChange({ tags: e.target.value })}
          />
        </label>
        <label>
          Focus keyword
          <input value={seo.focusKeyword} onChange={(e) => onChange({ focusKeyword: e.target.value })} />
        </label>
        <label>
          Open Graph title
          <input value={seo.ogTitle} onChange={(e) => onChange({ ogTitle: e.target.value })} />
        </label>
        <label>
          Open Graph description
          <textarea value={seo.ogDescription} onChange={(e) => onChange({ ogDescription: e.target.value })} />
        </label>
        <AdminMediaField
          label="Open Graph image"
          description="1200×630 PNG or JPG. Used for Facebook, LinkedIn, and WhatsApp previews."
          src={seo.ogImage}
          kind="image"
          accept="image/png,image/jpeg,image/webp"
          disabled={busy}
          onPick={onUploadOg}
        />
        <label>
          Open Graph image URL
          <input value={seo.ogImage} onChange={(e) => onChange({ ogImage: e.target.value })} />
        </label>
        <button type="button" disabled={busy} onClick={onSave}>
          Publish SEO
        </button>
      </div>
    </section>
  );
}
