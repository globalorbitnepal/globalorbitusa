"use client";

import { useEffect, useId, useState } from "react";
import { BRAND_LOGO_ADMIN, brandAssetUrl } from "@/lib/brand-assets";

const FEATURES = [
  {
    title: "Website Management",
    text: "Edit and manage your website content.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 8.2h16M8 15h4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Content Control",
    text: "Keep your website information organized.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4.5h7.2L19 9.2V19a1.6 1.6 0 0 1-1.6 1.6H7A1.6 1.6 0 0 1 5.4 19V6.1A1.6 1.6 0 0 1 7 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14.1 4.7V9H19M8.5 13h7M8.5 16.2h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Inquiry Management",
    text: "Manage customer inquiries in one place.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.2h14v9.4H8.4L5 18.8V6.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.4 10h7.2M8.4 13h4.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Secure Access",
    text: "Protect your administrative workspace.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 11V8.4a4.8 4.8 0 0 1 9.6 0V11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="5.5" y="11" width="13" height="8.4" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
] as const;

export function AdminLogin() {
  const userId = useId();
  const passId = useId();
  const rememberId = useId();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.classList.add("go-login-open");
    return () => document.body.classList.remove("go-login-open");
  }, []);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    const response = await fetch("/api/orbit/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, remember }),
    });
    const data = (await response.json()) as { error?: string };
    if (!response.ok) {
      setBusy(false);
      setError(data.error || "Invalid username or password");
      return;
    }
    window.location.assign("/admin");
  }

  return (
    <div className="go-login">
      <div className="go-login-sky" aria-hidden="true">
        <picture>
          <source srcSet="/brand/admin-login-earth.webp" type="image/webp" />
                  <img src="/brand/admin-login-earth.jpg" alt="" decoding="async" />
        </picture>
      </div>
      <div className="go-login-veil" aria-hidden="true" />

      <div className="go-login-shell">
        <section className="go-login-brand">
          <img
            src={brandAssetUrl(BRAND_LOGO_ADMIN)}
            alt="Global Orbit Pvt Ltd"
            className="go-login-logo"
            width={522}
            height={116}
            decoding="async"
          />
          <p className="go-login-kicker">Administration portal</p>
          <h1 className="go-login-title">
            Welcome <em>Back</em>
          </h1>
          <p className="go-login-lede">
            Manage your websites, content, inquiries and business operations from one secure dashboard.
          </p>
          <ul className="go-login-features">
            {FEATURES.map((item) => (
              <li key={item.title}>
                <span className="go-login-feature-icon">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="go-login-panel" aria-labelledby="go-login-heading">
          <p className="go-login-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.6 18.4 6v5.4c0 4.2-2.8 7.4-6.4 8.8C8.4 18.8 5.6 15.6 5.6 11.4V6L12 3.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <path d="M9.6 12.1 11.3 13.8 14.6 10.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Secure Administration
          </p>
          <p className="go-login-eyebrow">Admin login</p>
          <h2 id="go-login-heading">Welcome Back</h2>
          <p className="go-login-sub">Sign in to access your administration dashboard.</p>

          <form className="go-login-form" onSubmit={onSubmit} noValidate>
            <div className="go-login-field">
              <label htmlFor={userId}>Email Address / Username</label>
              <div className="go-login-control">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.6" y="6" width="16.8" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <input
                  id={userId}
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="Enter your email or username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  aria-invalid={Boolean(error)}
                />
              </div>
            </div>

            <div className="go-login-field">
              <label htmlFor={passId}>Password</label>
              <div className="go-login-control">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="10.4" width="14" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8.2 10.4V8.2a3.8 3.8 0 0 1 7.6 0v2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <input
                  id={passId}
                  name="password"
                  type={show ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={Boolean(error)}
                />
                <button
                  type="button"
                  className="go-login-eye"
                  onClick={() => setShow((value) => !value)}
                  aria-pressed={show}
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 12s3.2-6 8-6 8 6 8 6-3.2 6-8 6-8-6-8-6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="12" cy="12" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.7" />
                      <path d="m5 19 14-14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 12s3.2-6 8-6 8 6 8 6-3.2 6-8 6-8-6-8-6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="12" cy="12" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <label className="go-login-remember" htmlFor={rememberId}>
              <input
                id={rememberId}
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              Remember me
            </label>

            <button type="submit" className="go-login-submit" disabled={busy}>
              {busy ? "Signing in…" : "Sign In"}
              <span aria-hidden="true">→</span>
            </button>

            {error ? (
              <p className="go-login-error" role="alert">
                {error}
              </p>
            ) : null}
          </form>

          <p className="go-login-foot">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10.4" width="14" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8.2 10.4V8.2a3.8 3.8 0 0 1 7.6 0v2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Only authorized personnel can access this area.
          </p>
        </section>
      </div>
    </div>
  );
}
