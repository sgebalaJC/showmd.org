"use client";

import { useState } from "react";

type Status = { kind: "idle" } | { kind: "ok" } | { kind: "err"; msg: string };

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setStatus({ kind: "ok" });
      setEmail("");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ kind: "err", msg });
    } finally {
      setSubmitting(false);
    }
  }

  if (status.kind === "ok") {
    return (
      <p className="text-white/80 text-sm">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
      noValidate
    >
      <label className="flex-1">
        <span className="sr-only">Email address</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[hsl(40,76%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(40,76%,60%)]/40"
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
        className="inline-flex items-center justify-center rounded-md bg-[hsl(40,76%,48%)] hover:bg-[hsl(40,76%,42%)] disabled:opacity-60 px-4 py-2 text-sm font-semibold text-white transition-colors"
      >
        {submitting ? "Joining…" : "Subscribe"}
      </button>
      {status.kind === "err" && (
        <p className="text-xs text-[hsl(40,76%,72%)] sm:w-full">{status.msg}</p>
      )}
    </form>
  );
}
