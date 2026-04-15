"use client";

import { useState } from "react";

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

type Status = { kind: "idle" } | { kind: "ok" } | { kind: "err"; msg: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      show: String(fd.get("show") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      website: String(fd.get("website") || ""),
    };
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setStatus({ kind: "ok" });
      e.currentTarget.reset();
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong — please email barb@showmd.org.";
      setStatus({ kind: "err", msg });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[hsl(40,76%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(40,76%,60%)]/40 backdrop-blur-sm";

  return (
    <div className="space-y-8 text-left">
      {status.kind === "ok" ? (
        <div className="rounded-lg bg-white/10 border border-white/20 p-6 text-center backdrop-blur-sm">
          <p className="text-xl font-serif text-white">
            Thank you — we&apos;ll be in touch shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Phone</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Phone (optional)"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Show or location</span>
              <input
                type="text"
                name="show"
                placeholder="Show or location (optional)"
                className={inputClass}
              />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="How can we help?"
              className={inputClass + " resize-y"}
            />
          </label>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] min-h-10 rounded-md h-14 px-8 text-lg font-bold bg-[hsl(40,76%,48%)] hover:bg-[hsl(40,76%,42%)] text-white w-full sm:w-auto"
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
          {status.kind === "err" && (
            <p className="text-sm text-[hsl(40,76%,72%)]">{status.msg}</p>
          )}
        </form>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-white/10">
        <p className="text-white/70 text-sm">Or skip the form:</p>
        <a href={APPOINTMENT_URL} rel="noopener noreferrer" target="_blank">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] border border-white/30 min-h-10 rounded-md h-12 px-6 text-base font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
            Book an Appointment
            <svg
              aria-hidden="true"
              className="ml-1 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </a>
        <a
          className="flex items-center gap-2 text-white hover:text-[hsl(40,76%,60%)] text-sm font-medium transition-colors"
          href="mailto:franchising@showmd.org"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect height="16" rx="2" width="20" x="2" y="4" />
          </svg>
          franchising@showmd.org
        </a>
      </div>
    </div>
  );
}
