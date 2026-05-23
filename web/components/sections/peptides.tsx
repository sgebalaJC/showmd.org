import Link from "next/link";

export default function Peptides() {
  return (
    <section className="py-20 md:py-28 bg-slate-50" id="peptides">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5">
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
          <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
            For Peptide Therapy Patients
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3">
            Peptide Reconstitution Guide
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            A short, patient-only video walking through how to safely
            reconstitute your prescribed peptides at home. Access requires a
            code provided by Dr. Blasko or the ShowMD team.
          </p>
          <Link
            href="/peptides"
            className="mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] text-white px-6 py-3 bg-primary hover:bg-primary/90"
          >
            Watch the video
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
