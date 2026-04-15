const milestones = [
  {
    tag: "The Beginning",
    title: "A Backpack & A Mission",
    body: "Dr. Blasko started helping the California horse show community on the fly — just a doctor with a backpack and a passion for equestrian athletes.",
    direction: "right" as const,
  },
  {
    tag: "Growth",
    title: "The Mobile Medical Unit",
    body: "ShowMD created its first Mobile Medical Unit, bringing professional-grade equipment directly to the show grounds.",
    direction: "left" as const,
  },
  {
    tag: "Expansion",
    title: "X-Ray Capability Added",
    body: "A second mobile unit was added with full X-ray capability — because equestrian injuries don't wait for office hours.",
    direction: "right" as const,
  },
  {
    tag: "Today",
    title: "Desert International Horse Park",
    body: "ShowMD celebrated the opening of its first permanent clinic location at Desert International Horse Park, with new venue builds and east coast locations on the horizon.",
    direction: "left" as const,
  },
];

export default function Story() {
  return (
    <section className="py-20 md:py-28 bg-white" id="story">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
            The ShowMD Story
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[hsl(40,76%,48%)] to-primary/20" />
            {milestones.map((m) => (
              <div
                key={m.title}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  m.direction === "left" ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow z-10" />
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    m.direction === "left"
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold text-[hsl(40,76%,48%)] uppercase tracking-wider">
                      {m.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {m.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
