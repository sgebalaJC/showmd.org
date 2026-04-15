"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = { kind: "idle" } | { kind: "ok"; msg: string } | { kind: "err"; msg: string };

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [practice, setPractice] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const trimmedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus({ kind: "err", msg: "Please enter a valid email." });
      return;
    }
    if (!message.trim()) {
      setStatus({ kind: "err", msg: "Let us know what you'd like to discuss." });
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      if (fd.get("website")) return; // honeypot
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: trimmedEmail,
          practice: practice.trim() || null,
          message: message.trim(),
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setStatus({ kind: "ok", msg: "Thanks — we'll reply within one business day." });
      setName("");
      setEmail("");
      setPractice("");
      setMessage("");
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Email hello@showmd.org directly and we'll respond.";
      setStatus({ kind: "err", msg });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200";

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-ink-700">Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-ink-700">Work email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-medium text-ink-700">
          Practice <span className="text-ink-400">(optional)</span>
        </span>
        <input
          type="text"
          name="practice"
          autoComplete="organization"
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className="text-xs font-medium text-ink-700">What can we help with?</span>
        <textarea
          required
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Send message"}
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
    </form>
  );
}
