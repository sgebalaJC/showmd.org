import Image from "next/image";

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,65%,32%)] via-[hsl(0,55%,25%)] to-[hsl(0,45%,18%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,151,58,0.2)_0%,_transparent_60%)]" />
      <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <svg
                aria-hidden="true"
                className="lucide lucide-map-pin h-4 w-4 text-[hsl(40,76%,60%)]"
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
              <span className="text-sm font-medium text-white/90">
                Now at Desert International Horse Park
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6">
              Horse Show
              <br />
              <span className="text-[hsl(40,76%,60%)]">Health Care</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
              Onsite Urgent Care and Concierge Medical Service for the equestrian
              community. The same equipment and technology found in any clinic —
              right at the horse show.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={APPOINTMENT_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] border border-transparent min-h-10 rounded-md text-base h-12 px-8 bg-[hsl(40,76%,48%)] hover:bg-[hsl(40,76%,42%)] text-white w-full sm:w-auto">
                  Book an Appointment
                  <svg
                    aria-hidden="true"
                    className="lucide lucide-arrow-right ml-2 h-4 w-4"
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </a>
              <a href="#services">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] border min-h-10 rounded-md text-base h-12 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto">
                  View Our Services
                </button>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block pb-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/showmd-hero.jpg"
                alt="ShowMD Mobile Medical Unit"
                width={600}
                height={420}
                className="w-full h-[420px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-2 left-4 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-white/60 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="lucide lucide-shield h-5 w-5 text-primary/80"
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
              <div>
                <p className="font-semibold text-slate-800 text-sm">Full Medical Clinic</p>
                <p className="text-xs text-slate-500">X-Ray, Lab, Pharmacy On-Site</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "10+", label: "Years Serving Equestrians" },
              { value: "500+", label: "Horse Shows Covered" },
              { value: "5,000+", label: "Patients Treated" },
              { value: "2", label: "Mobile Medical Units" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[hsl(40,76%,60%)]">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
