"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = { kind: "idle" } | { kind: "ok"; msg: string } | { kind: "err"; msg: string };

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [practice, setPractice] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus({ kind: "err", msg: "Please enter a valid email." });
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      if (fd.get("website")) return; // honeypot
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, practice: practice.trim() || null }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setStatus({ kind: "ok", msg: "You're on the list — we'll be in touch soon." });
      setEmail("");
      setPractice("");
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Email hello@showmd.org and we'll add you.";
      setStatus({ kind: "err", msg });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <label className="block">
        <span className="text-xs font-medium text-ink-700">Work email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@practice.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200"
        />
      </label>
      <label className="block">
        <span className="text-xs font-medium text-ink-700">
          Practice name <span className="text-ink-400">(optional)</span>
        </span>
        <input
          type="text"
          name="practice"
          autoComplete="organization"
          placeholder="Acme Primary Care"
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
          className="mt-1 w-full rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200"
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
      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? "Joining…" : "Join waitlist"}
      </Button>
      {status.kind !== "idle" && (
        <p
          className={
            "text-sm " +
            (status.kind === "ok" ? "text-gold-700" : "text-red-700")
          }
        >
          {status.msg}
        </p>
      )}
      <p className="text-xs text-ink-500">
        By joining you agree to our{" "}
        <a href="/privacy" className="underline hover:text-ink-700">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
