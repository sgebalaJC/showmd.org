const services = [
  {
    icon: (
      <svg
        aria-hidden="true"
        className="lucide lucide-stethoscope h-6 w-6"
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
        <path d="M11 2v2" />
        <path d="M5 2v2" />
        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
        <path d="M8 15a6 6 0 0 0 12 0v-3" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
    title: "Acute Injury and Diagnostics",
    description:
      "Immediate care for injuries and illnesses with on-site diagnostic equipment and digital X-ray capabilities.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="lucide lucide-activity h-6 w-6"
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
    ),
    title: "Health & Wellness",
    description:
      "Comprehensive wellness services including weight management programs tailored for active equestrians.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="lucide lucide-droplets h-6 w-6"
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
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </svg>
    ),
    title: "IV Hydration",
    description:
      "Replenish and recover with customized IV hydration therapy — perfect for long competition days.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="lucide lucide-pill h-6 w-6"
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
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
    title: "RX & Pharmacy",
    description:
      "On-site dispensing of antibiotics, pain relief, muscle relaxers, and OTC medications — plus electronic Rx transmission and pain-management injections without leaving the show grounds.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="lucide lucide-user-check h-6 w-6"
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
        <path d="m16 11 2 2 4-4" />
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: "Concierge Care",
    description:
      "No 15-minute slots. A customized health-care relationship with Dr. Blasko — time to listen, and lifestyle, treatment and therapy tailored to you as a rider and athlete.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="lucide lucide-video h-6 w-6"
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
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect height="12" rx="2" width="14" x="2" y="6" />
      </svg>
    ),
    title: "Telemedicine",
    description:
      "Connect with our team remotely for follow-ups, consultations, and ongoing care — wherever you are.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
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
        <path d="M4.5 12.5 12 20l7.5-7.5a5 5 0 0 0-7-7l-.5.5-.5-.5a5 5 0 0 0-7 7Z" />
        <path d="m8 9 6 6" />
      </svg>
    ),
    title: "Peptide Injections",
    description:
      "Enhance muscle recovery, increase strength and stamina, improve joint health, and speed healing with targeted peptide therapy.",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-lg text-slate-600">
            Walk-ins welcome, appointments available. Stop by our mobile clinic
            for any of your #HorseShowHealthcare needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
