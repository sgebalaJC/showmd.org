import type { Metadata } from "next";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import PasswordForm from "@/components/peptides/password-form";
import { hasPeptidesAccess } from "@/lib/peptides-auth";

export const metadata: Metadata = {
  title: "Peptide Therapy — Patient Resources",
  description:
    "Patient-only resources for peptide therapy at ShowMD, including reconstitution guidance.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://showmd.org/peptides" },
};

export const dynamic = "force-dynamic";

export default async function PeptidesPage() {
  const authed = await hasPeptidesAccess();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-slate-50">
        {authed ? <Content /> : <Gate />}
      </main>
      <Footer />
    </>
  );
}

function Gate() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-md">
        <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              Patient Resources
            </h1>
            <p className="mt-3 text-slate-600 text-sm">
              This page contains information for ShowMD peptide therapy
              patients. Please enter the access code provided by Dr. Blasko or
              the ShowMD team.
            </p>
          </div>
          <div className="mt-6">
            <PasswordForm />
          </div>
          <p className="mt-6 text-xs text-slate-400 text-center">
            Don&apos;t have an access code? Contact{" "}
            <a
              className="text-primary hover:underline"
              href="mailto:barb@showmd.org"
            >
              barb@showmd.org
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
          Patient Resources
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
          Peptide Reconstitution Guide
        </h1>
        <p className="text-slate-600 text-lg">
          A short walkthrough of how to reconstitute and store your prescribed
          peptide therapy at home.
        </p>

        <div
          className="mt-10 relative w-full rounded-xl overflow-hidden shadow-xl bg-slate-900"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/A7SGjHWAa0o?rel=0"
            title="Peptide reconstitution video (placeholder)"
            loading="lazy"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-xs italic text-slate-500">
          Placeholder video — final reconstitution walkthrough to be added by
          Dr. Blasko.
        </p>

        <div className="mt-10 bg-white border border-slate-100 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Important reminders
          </h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600 text-sm">
            <li>
              Peptide therapies are prescription treatments and require medical
              evaluation.
            </li>
            <li>Follow the dosing schedule provided by Dr. Blasko exactly.</li>
            <li>
              Store reconstituted peptides refrigerated and use within the
              timeframe noted on your label.
            </li>
            <li>Contact us with any questions before injecting.</li>
          </ul>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          For questions or to schedule a follow-up, email{" "}
          <a
            className="text-primary hover:underline"
            href="mailto:barb@showmd.org"
          >
            barb@showmd.org
          </a>
          .
        </p>
      </div>
    </section>
  );
}
