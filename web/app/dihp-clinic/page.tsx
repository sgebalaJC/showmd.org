import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import JsonLd from "@/components/seo/json-ld";
import { dihpClinicSchema } from "@/lib/structured-data";

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

const DIHP_MAPS_QUERY = encodeURIComponent(
  "Desert International Horse Park, 84-336 Avenue 51, Thermal, CA 92274",
);
const DIHP_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${DIHP_MAPS_QUERY}`;

export const metadata: Metadata = {
  title: "ShowMD Clinic at Desert International Horse Park",
  description:
    "Permanent ShowMD urgent care clinic at Desert International Horse Park in Thermal, CA. X-ray, labs, IV hydration, pharmacy and concierge medical, open Wed–Sun during Winter Circuit.",
  alternates: { canonical: "https://showmd.org/dihp-clinic" },
  openGraph: {
    type: "website",
    url: "https://showmd.org/dihp-clinic",
    title: "ShowMD Clinic at Desert International Horse Park",
    description:
      "Onsite urgent care, diagnostics and IV therapy at Desert International Horse Park during Winter Circuit.",
    images: ["/images/dihp/exterior.jpg"],
  },
};

const services = [
  "Urgent care exams",
  "Digital X-ray",
  "Ultrasound",
  "Lab testing",
  "IV hydration & vitamin therapy",
  "Onsite pharmacy",
  "Minor procedures & wound care",
  "Concierge & telemedicine",
];

const gallery = [
  {
    src: "/images/dihp/reception.jpg",
    alt: "ShowMD clinic reception area at Desert International Horse Park",
    width: 1333,
    height: 1000,
  },
  {
    src: "/images/dihp/exam-room.jpg",
    alt: "Exam room inside the ShowMD DIHP clinic",
    width: 1242,
    height: 925,
  },
  {
    src: "/images/dihp/iv-chair.jpg",
    alt: "IV hydration chair with WiFi at the ShowMD DIHP clinic",
    width: 1242,
    height: 918,
  },
  {
    src: "/images/dihp/counter.jpg",
    alt: "Front counter and pharmacy area inside the ShowMD DIHP clinic",
    width: 1242,
    height: 1631,
  },
  {
    src: "/images/dihp/massage-chair.jpg",
    alt: "Recovery massage chair at the ShowMD DIHP clinic",
    width: 1242,
    height: 1637,
  },
];

export default function DihpClinicPage() {
  return (
    <>
      <JsonLd id="ld-dihp-clinic-page" data={dihpClinicSchema} />
      <Nav />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,65%,32%)] via-[hsl(0,55%,25%)] to-[hsl(0,45%,18%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,151,58,0.2)_0%,_transparent_60%)]" />
          <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-white/60 mb-6"
            >
              <Link className="hover:text-white" href="/">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">DIHP Clinic</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white/90 mb-6">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-[hsl(40,76%,60%)]"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Thermal, California
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6">
                ShowMD Clinic at{" "}
                <span className="text-[hsl(40,76%,60%)]">
                  Desert International Horse Park
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Our first permanent clinic, in the Vendor Area across from the
                Grand Equitation Arena. Full urgent care, diagnostics, IV
                therapy and pharmacy services — open throughout Winter Circuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={APPOINTMENT_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] min-h-10 rounded-md text-base h-12 px-8 bg-[hsl(40,76%,48%)] hover:bg-[hsl(40,76%,42%)] text-white w-full sm:w-auto">
                    Book an Appointment
                    <svg
                      aria-hidden="true"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </a>
                <a
                  href={DIHP_MAPS_LINK}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] border min-h-10 rounded-md text-base h-12 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto">
                    Get Directions
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured exterior */}
        <section className="bg-white">
          <div className="container mx-auto px-4 md:px-6 -mt-10 md:-mt-16 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/images/dihp/exterior.jpg"
                alt="Exterior of the ShowMD permanent clinic at Desert International Horse Park"
                width={1333}
                height={1000}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
                  About the Clinic
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-6">
                  A real medical clinic, on the show grounds
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    In January 2024, ShowMD opened its first permanent clinic
                    inside Desert International Horse Park. The facility was
                    purpose-built for the equestrian community: a welcoming
                    reception area, two private exam rooms, a comfortable IV
                    chair with WiFi, and a recovery massage chair — the same
                    medical equipment and technology you would find in any
                    clinic, right at the horse show.
                  </p>
                  <p>
                    Walk in during show hours or book online through Solv. Our
                    team includes a board-certified emergency physician, a
                    registered nurse, and trained support staff who understand
                    both medicine and the demands of life on the road with
                    horses.
                  </p>
                </div>
              </div>

              <aside className="lg:pl-6">
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Hours
                    </h3>
                    <p className="text-slate-700 mt-2 font-medium">
                      Wed&ndash;Sun, 9am&ndash;5pm
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      During Winter Circuit. Off-season hours by appointment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Where to find us
                    </h3>
                    <p className="text-slate-700 mt-2">
                      Vendor Area, across from the Grand Equitation Arena.
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Desert International Horse Park
                      <br />
                      84-336 Avenue 51, Thermal, CA 92274
                    </p>
                    <a
                      href={DIHP_MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Open in Google Maps
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Booking
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">
                      Walk-ins welcome during show hours. Reserve a time slot
                      online.
                    </p>
                    <a
                      href={APPOINTMENT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Book via Solv
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="max-w-2xl mb-10">
              <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
                Services
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
                What we offer onsite
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Same-day care for everything that gets in the way of your week
                at the show.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-4 shadow-sm"
                >
                  <span className="w-8 h-8 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-800">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="max-w-2xl mb-10">
              <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
                Inside the Clinic
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
                A look around
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {gallery.map((img) => (
                <div
                  key={img.src}
                  className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-slate-100"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-[hsl(0,45%,14%)] text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Need care during the show?
            </h2>
            <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Stop by during show hours or book online. We&rsquo;re right
              across from the Grand Equitation Arena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={APPOINTMENT_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] min-h-10 rounded-md text-base h-12 px-8 bg-[hsl(40,76%,48%)] hover:bg-[hsl(40,76%,42%)] text-white w-full sm:w-auto">
                  Book an Appointment
                </button>
              </a>
              <Link href="/#contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] border min-h-10 rounded-md text-base h-12 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto">
                  Contact ShowMD
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
