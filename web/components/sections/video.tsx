export default function Video() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Meet ShowMD
          </h2>
          <p className="mt-3 text-slate-600 text-lg">
            A two-minute look at how we bring urgent care to the horse show.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-slate-900" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/A7SGjHWAa0o?rel=0"
              title="Show MD Video Business Card"
              loading="lazy"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
