"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  APPOINTMENT_REFERRALS,
  APPOINTMENT_SERVICES,
  APPOINTMENT_STUDIOS,
  type AppointmentReferral,
  type AppointmentService,
  type AppointmentStudio,
} from "@/lib/appointments/constants";

type Props = {
  open: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full rounded-xl border border-white/14 bg-[#12121a]/90 px-4 py-2.5 text-[15px] text-white outline-none transition focus:border-[#f0c43a]/55 focus:ring-2 focus:ring-[#f0c43a]/20";

export function BookAppointmentModal({ open, onClose }: Props) {
  if (!open) return null;
  return <BookAppointmentModalForm onClose={onClose} />;
}

function BookAppointmentModalForm({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"form" | "success">("form");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    whatsapp: "",
    country: "",
    city: "",
    mobile: "",
    officeEmail: "",
    studio: "" as AppointmentStudio | "",
    services: [] as AppointmentService[],
    referral: "" as AppointmentReferral | "",
    specialRequest: "",
    company_website: "",
  });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  function toggleService(service: AppointmentService) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = (await response.json()) as { error?: string };
    setBusy(false);
    if (!response.ok) {
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }
    setPhase("success");
  }

  return (
    <div className="orbit-appointment-root fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="orbit-appointment-backdrop absolute inset-0 bg-[#030308]/72 backdrop-blur-[6px]"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="orbit-appointment-panel relative z-[1] flex max-h-[92svh] w-full max-w-[640px] flex-col overflow-hidden rounded-t-[28px] border border-white/12 bg-[#0c0c14] shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:rounded-[28px]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f0c43a]/90">Global Orbit</p>
            <h2 id={titleId} className="mt-1 font-[family-name:var(--font-jakarta)] text-xl font-semibold text-white">
              Book Appointment
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-xl text-white/80 hover:bg-white/10"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {phase === "success" ? (
          <div className="orbit-appointment-success px-6 py-10 text-center sm:px-10 sm:py-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f0c43a]/15 text-2xl text-[#f0c43a]">
              ✓
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Thank you for booking with us</h3>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              Your appointment request has been received. Our customer service team will contact you shortly on WhatsApp
              to confirm your preferred time and next steps. We appreciate your trust in Global Orbit.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-[#0b0b10] hover:bg-white/90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <p className="mb-5 text-sm leading-relaxed text-white/55">
                Share your details and we will schedule a consultation at the studio you choose — USA, India, or the
                USA.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-2 block text-sm">
                  <span className="mb-1.5 block text-white/65">Full name</span>
                  <input
                    required
                    className={inputClass}
                    value={form.fullName}
                    onChange={(event) => setForm((c) => ({ ...c, fullName: event.target.value }))}
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-white/65">WhatsApp number</span>
                  <input
                    required
                    className={inputClass}
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={(event) => setForm((c) => ({ ...c, whatsapp: event.target.value }))}
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-white/65">Mobile number</span>
                  <input
                    required
                    className={inputClass}
                    inputMode="tel"
                    value={form.mobile}
                    onChange={(event) => setForm((c) => ({ ...c, mobile: event.target.value }))}
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-white/65">Country</span>
                  <input
                    required
                    className={inputClass}
                    value={form.country}
                    onChange={(event) => setForm((c) => ({ ...c, country: event.target.value }))}
                    placeholder="e.g. USA"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-white/65">City</span>
                  <input
                    required
                    className={inputClass}
                    value={form.city}
                    onChange={(event) => setForm((c) => ({ ...c, city: event.target.value }))}
                  />
                </label>
                <label className="sm:col-span-2 block text-sm">
                  <span className="mb-1.5 block text-white/65">Office email</span>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    value={form.officeEmail}
                    onChange={(event) => setForm((c) => ({ ...c, officeEmail: event.target.value }))}
                  />
                </label>
              </div>

              <fieldset className="mt-6">
                <legend className="mb-3 text-sm font-medium text-white/70">Book appointment at</legend>
                <div className="flex flex-wrap gap-2">
                  {APPOINTMENT_STUDIOS.map((studio) => (
                    <label
                      key={studio}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                        form.studio === studio
                          ? "border-[#f0c43a]/60 bg-[#f0c43a]/12 text-white"
                          : "border-white/14 text-white/75 hover:border-white/25"
                      }`}
                    >
                      <input
                        type="radio"
                        name="studio"
                        className="sr-only"
                        checked={form.studio === studio}
                        onChange={() => setForm((c) => ({ ...c, studio }))}
                      />
                      {studio}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="mb-3 text-sm font-medium text-white/70">What do you need help with?</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {APPOINTMENT_SERVICES.map((service) => (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition ${
                        form.services.includes(service)
                          ? "border-[#f0c43a]/50 bg-[#f0c43a]/10 text-white"
                          : "border-white/12 text-white/72 hover:border-white/22"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="rounded border-white/30"
                        checked={form.services.includes(service)}
                        onChange={() => toggleService(service)}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 block text-sm">
                <span className="mb-1.5 block text-white/65">How did you hear about us?</span>
                <select
                  required
                  className={inputClass}
                  value={form.referral}
                  onChange={(event) =>
                    setForm((c) => ({ ...c, referral: event.target.value as AppointmentReferral }))
                  }
                >
                  <option value="" disabled>
                    Select a source
                  </option>
                  {APPOINTMENT_REFERRALS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-4 block text-sm">
                <span className="mb-1.5 block text-white/65">Special request (optional)</span>
                <textarea
                  rows={3}
                  className={inputClass}
                  value={form.specialRequest}
                  onChange={(event) => setForm((c) => ({ ...c, specialRequest: event.target.value }))}
                />
              </label>

              <input
                type="text"
                name="company_website"
                value={form.company_website}
                onChange={(event) => setForm((c) => ({ ...c, company_website: event.target.value }))}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
            </div>

            <div className="border-t border-white/10 px-5 py-4 sm:px-6">
              <button
                type="submit"
                disabled={busy}
                className="orbit-appointment-submit inline-flex h-12 w-full items-center justify-center rounded-full bg-[#f0c43a] text-sm font-semibold text-[#14120a] transition hover:bg-[#f5cf55] disabled:opacity-60 sm:w-auto sm:px-10"
              >
                {busy ? "Sending…" : "Submit appointment request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function BookAppointmentButton({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`orbit-book-appointment-btn inline-flex h-[clamp(2.65rem,3.6vw,3.15rem)] shrink-0 items-center gap-2 rounded-full px-[clamp(1.15rem,1.6vw,1.6rem)] text-[clamp(0.92rem,1.02vw,1.08rem)] font-semibold ${className ?? ""}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
      Start a Project →
    </button>
  );
}
