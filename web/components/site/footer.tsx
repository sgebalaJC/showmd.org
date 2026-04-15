import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-cream-50">
      <Container className="py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-sm text-ink-700">
          <span
            aria-hidden="true"
            className="inline-flex h-6 w-6 items-center justify-center rounded bg-ink-900 text-cream-50 text-[11px] font-bold tracking-tight"
          >
            A
          </span>
          <span>
            <strong className="text-ink-900">ShowMD</strong> — HIPAA-compliant. Patient-first.
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-600">
          <Link href="/#features" className="hover:text-ink-900">Features</Link>
          <Link href="/#security" className="hover:text-ink-900">Security</Link>
          <a href="mailto:hello@showmd.org" className="hover:text-ink-900">
            Contact
          </a>
          <Link href="/privacy" className="hover:text-ink-900">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ink-900">Terms of Service</Link>
        </nav>
        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} ShowMD
        </p>
      </Container>
    </footer>
  );
}
