"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#story", label: "Story" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center" href="/">
          <Image
            src="/images/showmd-logo.png"
            alt="ShowMD"
            width={240}
            height={68}
            priority
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] text-primary-foreground border border-primary/30 min-h-9 px-4 py-2 hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white">
              <svg
                aria-hidden="true"
                className="lucide lucide-phone h-4 w-4 mr-2"
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
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              Appointment
            </button>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
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
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-primary transition-colors py-1"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer bg-primary hover:bg-primary/90 text-white min-h-9 px-4 py-2">
              Book an Appointment
            </button>
          </a>
        </div>
      )}
    </header>
  );
}
