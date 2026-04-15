export default function Invest() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[hsl(0,65%,32%)] via-[hsl(0,55%,25%)] to-[hsl(0,45%,18%)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[hsl(40,76%,48%)]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[hsl(40,76%,48%)]/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[hsl(40,76%,60%)] uppercase tracking-wider">
            The Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
            Invest in the Human Half of Your Team
          </h2>
          <p className="text-lg text-white/70">
            There are two athletes on your team. Equestrians are notorious for
            spoiling their horses with every possible prevention, therapy and
            treatment. It&apos;s time to invest in your own health the same way.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-8 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 mx-auto bg-[hsl(40,76%,48%)]/20 rounded-full flex items-center justify-center mb-4">
              <svg
                aria-hidden="true"
                className="lucide lucide-clock h-7 w-7 text-[hsl(40,76%,60%)]"
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
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Walk-Ins Welcome</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              No appointment needed for urgent care. We&apos;re flexible to suit
              the fast-paced horse show life.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-8 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 mx-auto bg-[hsl(40,76%,48%)]/20 rounded-full flex items-center justify-center mb-4">
              <svg
                aria-hidden="true"
                className="lucide lucide-shield h-7 w-7 text-[hsl(40,76%,60%)]"
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
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Full Medical Clinic</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Same equipment and technology you&apos;d find in any clinic —
              diagnostic imaging, lab work, X-rays.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-8 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 mx-auto bg-[hsl(40,76%,48%)]/20 rounded-full flex items-center justify-center mb-4">
              <svg
                aria-hidden="true"
                className="lucide lucide-heart h-7 w-7 text-[hsl(40,76%,60%)]"
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
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">We Understand You</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Our staff is trained in the language and culture of equestrian
              athletes. We get it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
