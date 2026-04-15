export default function Franchise() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <span className="text-xs font-semibold text-[hsl(40,76%,40%)] uppercase tracking-wider">
              Partnerships
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-2 mb-3">
              Bring ShowMD to your venue
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Franchise and management opportunities are available. If you run
              a show grounds, circuit, or equestrian venue and want on-site
              medical presence, Dr. Blasko would love to talk.
            </p>
          </div>
          <a
            href="mailto:franchising@showmd.org?subject=ShowMD%20Franchise%20Inquiry"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            Send franchise inquiry
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
          </a>
        </div>
      </div>
    </section>
  );
}
