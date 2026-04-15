const formulas = [
  {
    name: "Basic Hydration",
    tag: "Quick rehydration",
    contents: "Balanced crystalloid for quick rehydration.",
  },
  {
    name: "Myers Cocktail",
    tag: "Overall wellness",
    contents:
      "1 L fluid · Magnesium · B1, B2, B3, B5, B6, B12 · Calcium · Vitamin C",
  },
  {
    name: "Quench",
    tag: "Hydrate + combat fatigue",
    contents:
      "1 L fluid · Vit C · B1, B2, B3, B5, B6 · Magnesium · Zinc · Manganese · Copper · Selenium",
  },
  {
    name: "Get Up & Go",
    tag: "Energy + metabolism",
    contents:
      "1 L fluid · B1, B2, B3, B5, B6 · Glutamine · Arginine · Ornithine · Lysine · Citrulline · Carnitine",
  },
  {
    name: "Inner Beauty",
    tag: "Skin + anti-aging",
    contents:
      "1 L fluid · Vit C · B1, B2, B3, B5, B6 · Biotin",
  },
  {
    name: "Reboot",
    tag: "Hangover / headache / nausea",
    contents:
      "1 L fluid · Zofran · B1, B2, B3, B5, B6 · Magnesium · Zinc · Manganese · Copper · Selenium · Toradol",
  },
  {
    name: "Immunity",
    tag: "Feel better faster",
    contents:
      "1 L fluid · Vit C Booster · Multivitamin Complex · Zinc",
  },
  {
    name: "Recovery & Performance",
    tag: "Decrease recovery time",
    contents:
      "1 L fluid · Vit C · Multivitamin Complex · Amino acid blend · Mineral blend",
  },
  {
    name: "Vita-Fuse",
    tag: "Full-spectrum vitamin boost",
    contents:
      "Vit C · Vit A · Vit D3 · Vit E · Vit K · Thiamine (B1) · Riboflavin (B2) · B6 · Folic Acid · Biotin · B12",
  },
];

const injections = [
  { name: "B12", tag: "IM injection" },
  { name: "Glutathione", tag: "IM injection" },
  { name: "Fluid + Glutathione", tag: "IV add-on" },
];

export default function IVMenu() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
            IV Hydration Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
            Custom IV Therapy, Clinic-Grade
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Administered by a registered nurse, licensed and certified by the
            California Board of Nursing. Each infusion is prepared at the time
            of service and can be customized to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {formulas.map((f) => (
            <div
              key={f.name}
              className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-bold text-slate-900">{f.name}</h3>
                <span className="text-[11px] font-medium text-[hsl(40,76%,40%)] uppercase tracking-wider shrink-0">
                  {f.tag}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {f.contents}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl border border-slate-100 p-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              IM / IV Add-ons
            </h3>
            <div className="flex flex-wrap gap-2">
              {injections.map((i) => (
                <span
                  key={i.name}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 text-xs"
                >
                  <span className="font-semibold text-slate-800">{i.name}</span>
                  <span className="text-slate-500">· {i.tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          Don&apos;t see what you need? Custom infusions available on request.
        </p>
      </div>
    </section>
  );
}
