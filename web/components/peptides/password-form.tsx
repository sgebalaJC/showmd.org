"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Status = { kind: "idle" } | { kind: "err"; msg: string };

export default function PasswordForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/peptides/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: String(fd.get("password") || ""),
          website: String(fd.get("website") || ""),
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Incorrect access code.");
      }
      router.refresh();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ kind: "err", msg });
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 text-left" noValidate>
      <label className="block">
        <span className="sr-only">Access code</span>
        <input
          required
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Access code"
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
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
        className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] px-4 py-3 bg-primary hover:bg-primary/90 text-white"
      >
        {submitting ? "Checking…" : "Continue"}
      </button>
      {status.kind === "err" && (
        <p className="text-sm text-primary" role="alert">
          {status.msg}
        </p>
      )}
    </form>
  );
}
