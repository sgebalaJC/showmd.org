const StarIcon = () => (
  <svg
    aria-hidden="true"
    className="lucide lucide-star h-3.5 w-3.5 fill-[hsl(40,76%,48%)] text-[hsl(40,76%,48%)]"
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
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const FiveStars = () => (
  <div className="flex gap-1 mb-3">
    {[0, 1, 2, 3, 4].map((i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

// Reviews reproduced verbatim from showmd.org/reviews-1.
// The source page shows the quotes without names/roles — attributions below
// are generic placeholders so the card footer has something to render.
const reviews = [
  {
    quote:
      "\u201CI fell off the other day and was a little bit sore but a few days later, my back had really locked up. They got me right in and Dr. Barb gave me meds and got me moving again. The whole visit only took about 25 minutes and she scheduled an MRI for my back for the very next day. Highly recommend visiting show MD next time you need a doctor.\u201D",
    name: "ShowMD Patient",
    role: "Desert International Horse Park",
    wide: true,
  },
  {
    quote:
      "\u201CDog bite\u2026staff was efficient, caring and very personable. Dr Barb was great with my many stitches!\u201D",
    name: "ShowMD Patient",
    role: "Desert International Horse Park",
    wide: false,
  },
  {
    quote:
      "\u201CSo kind and helpful! Helped me with my lower back strain and relieved my pain. Very glad I made this connection.\u201D",
    name: "ShowMD Patient",
    role: "Equestrian Competitor",
    wide: false,
  },
  {
    quote:
      "\u201CI needed to be check for a tooth apses and got that done and prescribed antibiotics. Right here at the horse show were I have to work. Save my life.\u201D",
    name: "ShowMD Patient",
    role: "Horse Show Professional",
    wide: false,
  },
  {
    quote:
      "\u201CSo convenient to have ShowMD on grounds at DIHP. Great experience and care. Thank you Barb.\u201D",
    name: "ShowMD Patient",
    role: "Desert International Horse Park",
    wide: false,
  },
  {
    quote:
      "\u201CFrom walking into the clinic, checking in, to exam, the staff provided excellent and speedy service.\u201D",
    name: "ShowMD Patient",
    role: "Walk-In Patient",
    wide: false,
  },
  {
    quote:
      "\u201CVery helpful and kind Easy check in and check out No waiting\u201D",
    name: "ShowMD Patient",
    role: "Walk-In Patient",
    wide: false,
  },
  {
    quote:
      "\u201CWhat a brilliant service! Kind and professional staff. Easy in and out.\u201D",
    name: "ShowMD Patient",
    role: "Equestrian Community",
    wide: false,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
            What Our Customers Say
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
            Real Reviews from Real Patients
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col${
                review.wide ? " lg:col-span-2 md:col-span-2" : ""
              }`}
            >
              <FiveStars />
              <p className="text-slate-600 leading-relaxed mb-4 italic text-sm flex-1">
                {review.quote}
              </p>
              <div className="border-t border-slate-100 pt-3">
                <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                <p className="text-xs text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
