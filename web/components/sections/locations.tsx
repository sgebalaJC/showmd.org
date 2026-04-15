const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const MAPS_QUERY = encodeURIComponent(
  "Blasko Medical Consultants, 12523 Limonite Ave, Eastvale, CA 91752",
);
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export default function Locations() {
  const mapsEmbedUrl = MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${MAPS_QUERY}&zoom=15`
    : null;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/2] bg-slate-100">
              {mapsEmbedUrl ? (
                <iframe
                  title="Blasko Medical Consultants on Google Maps"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full items-center justify-center text-sm text-slate-500 hover:text-slate-700"
                >
                  Open in Google Maps →
                </a>
              )}
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
              Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-6">
              Where to Find Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <svg
                    aria-hidden="true"
                    className="lucide lucide-map-pin h-5 w-5 text-primary"
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
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Desert International Horse Park
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Our permanent clinic location, open during the competition
                    season. Full urgent care, diagnostics, and pharmacy services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <svg
                    aria-hidden="true"
                    className="lucide lucide-activity h-5 w-5 text-primary"
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
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mobile Medical Units</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Two fully-equipped mobile clinics that travel to major horse
                    shows across the country, including new east coast locations.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-1">
                  Blasko Medical Consultants Inc
                </h4>
                <p className="text-sm text-slate-600">
                  12523 Limonite Ave, Ste #440 #144
                </p>
                <p className="text-sm text-slate-600">Eastvale, CA 91752</p>
                <p className="text-sm text-slate-500 mt-2">Fax: 262-394-0836</p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:text-primary/80"
                >
                  Get directions
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
