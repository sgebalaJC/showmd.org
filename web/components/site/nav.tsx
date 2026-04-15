import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#workers", label: "How it works" },
  { href: "/#integrations", label: "Integrations" },
  { href: "/#security", label: "Security" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100/70 glass">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded bg-ink-900 text-cream-50 text-sm font-bold tracking-tight"
          >
            S
          </span>
          <span className="font-semibold tracking-tight text-ink-900">
            ShowMD
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-600">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink-900">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LinkButton href="/#waitlist" variant="secondary" className="hidden sm:inline-flex">
            Join waitlist
          </LinkButton>
          <LinkButton href="/#demo" variant="primary">
            Book a demo
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}
