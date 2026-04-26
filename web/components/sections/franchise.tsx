export default function Franchise() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
          <span className="text-xs font-semibold text-[hsl(40,76%,40%)] uppercase tracking-wider">
            Franchising
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-2 mb-4">
            Bring ShowMD to your venue
          </h2>
          <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
            <p>
              ShowMD is exploring future expansion through franchising. We
              anticipate offering franchise opportunities later this year to
              qualified individuals who share our passion for
              equestrian-focused, patient-centered care.
            </p>
            <p className="italic text-slate-500">
              This is not an offer to sell a franchise. Any offer will be made
              only through a Franchise Disclosure Document (FDD) and in
              compliance with applicable federal and state laws.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="mailto:franchising@showmd.org?subject=ShowMD%20Franchise%20Inquiry"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
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
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect height="16" rx="2" width="20" x="2" y="4" />
              </svg>
              franchising@showmd.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
