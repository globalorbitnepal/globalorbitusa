"use client";

import { useState } from "react";

type Props = {
  usernameHint?: string;
  onSignedOut: () => void;
};

export function AdminAccountPanel({ usernameHint, onSignedOut }: Props) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [nextPassword, setNextPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    setError("");
    setStatus("");
    if (nextPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }
    setBusy(true);
    const response = await fetch("/api/orbit/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, nextPassword }),
    });
    const data = (await response.json().catch(() => ({}))) as { error?: string };
    setBusy(false);
    if (!response.ok) {
      setError(data.error || "Could not update the password.");
      return;
    }
    setCurrentPassword("");
    setNextPassword("");
    setConfirmPassword("");
    setStatus("Password updated. Signing you out — use the new password to continue.");
    window.setTimeout(onSignedOut, 1200);
  }

  return (
    <div className="go-cms-stack">
      <section className="go-cms-card">
        <h2>Security</h2>
        <p className="go-cms-help">
          Change the password for this management console. Every active admin session is signed out when the password
          changes.
        </p>
        <form className="go-cms-form" onSubmit={submit} autoComplete="off">
          <label htmlFor="go-account-current">
            Current password
            <input
              id="go-account-current"
              type="password"
              value={currentPassword}
              autoComplete="current-password"
              onChange={(event) => setCurrentPassword(event.target.value)}
              required
            />
          </label>
          <label htmlFor="go-account-new">
            New password
            <input
              id="go-account-new"
              type="password"
              value={nextPassword}
              autoComplete="new-password"
              onChange={(event) => setNextPassword(event.target.value)}
              minLength={10}
              required
            />
            <small>At least 10 characters with a mix of letters, numbers, or a symbol.</small>
          </label>
          <label htmlFor="go-account-confirm">
            Confirm new password
            <input
              id="go-account-confirm"
              type="password"
              value={confirmPassword}
              autoComplete="new-password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              minLength={10}
              required
            />
          </label>
          {error ? <p className="go-cms-error">{error}</p> : null}
          {status ? <p className="go-cms-help">{status}</p> : null}
          <button type="submit" disabled={busy}>
            {busy ? "Updating…" : "Update password"}
          </button>
        </form>
      </section>

      <section className="go-cms-card">
        <h2>Session</h2>
        {usernameHint ? (
          <p className="go-cms-help">
            Signed in as <strong>{usernameHint}</strong>.
          </p>
        ) : (
          <p className="go-cms-help">Signed in to the Global Orbit management console.</p>
        )}
        <div className="go-cms-quick">
          <button type="button" onClick={onSignedOut}>
            Log out of this device
          </button>
        </div>
      </section>
    </div>
  );
}
