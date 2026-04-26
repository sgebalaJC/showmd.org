"use client";

import Image from "next/image";
import { useState } from "react";

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: React.ReactNode;
};

const services: Service[] = [
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
    details: (
      <>
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 mb-4">
          <Image
            src="/images/showmd-xray.jpg"
            alt="On-site digital X-ray at the ShowMD clinic"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Falls, sprains, fractures, and lacerations</li>
          <li>Digital X-ray on-site</li>
          <li>Stitches, splinting, and wound care</li>
          <li>Acute illness assessment and treatment</li>
          <li>Rapid diagnostics &mdash; results without leaving the grounds</li>
        </ul>
        <a
          href={APPOINTMENT_URL}
          rel="noopener noreferrer"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] text-white px-4 py-2 bg-primary hover:bg-primary/90"
        >
          Book an Appointment
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
      </>
    ),
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
    details: (
      <>
        <p>
          Physician-led weight management designed for the demands of
          equestrian sport &mdash; performance, endurance, recovery, and
          confidence in the saddle.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>Personalized nutrition and lifestyle guidance</li>
          <li>Metabolic health evaluation</li>
          <li>GLP-1&ndash;based therapies for appropriate patients</li>
          <li>Ongoing physician oversight and adjustments</li>
        </ul>
        <p className="mt-3">
          <a
            href="#health-wellness"
            className="text-primary font-semibold hover:underline"
          >
            See the full program &rarr;
          </a>
        </p>
      </>
    ),
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
    details: (
      <>
        <p>
          IV vitamin therapy delivers fluids, electrolytes, and nutrients
          directly to your bloodstream &mdash; 100% absorption, immediately
          available for cellular use.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>Pre-show prep and post-show recovery</li>
          <li>Hydration and electrolyte repletion</li>
          <li>Energy, immunity, and recovery formulas</li>
          <li>Administered by licensed RNs &mdash; 30 to 60 minutes</li>
        </ul>
      </>
    ),
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
      "On-site dispensing of antibiotics, non-narcotic pain relief, muscle relaxers, and OTC medications — plus electronic Rx transmission and pain-management injections without leaving the show grounds.",
    details: (
      <>
        <p>
          Get what you need&mdash;fast. We offer on-site dispensing of
          antibiotics, non-narcotic pain relief, muscle relaxers, and OTC
          medications, along with electronic prescriptions and pain-management
          injections&mdash;all without leaving the show grounds.
        </p>
        <p className="mt-3">
          Our clinics carry the most common over-the-counter products for
          acute illness, so you can skip the pharmacy and get back to riding.
        </p>
      </>
    ),
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
    details: (
      <>
        <p>
          Looking for a physician who is truly accessible&mdash;and care that
          fits your life?
        </p>
        <p className="mt-3">
          ShowMD Concierge Care offers direct access to your doctor in person,
          via telemedicine, or by phone. You and your family receive the time,
          attention, and personalized care you deserve&mdash;without crowded
          waiting rooms or rushed visits.
        </p>
        <p className="mt-3">
          Dr. Barb Blasko is a board-certified Emergency Medicine physician
          with over 20 years of experience, as well as a lifelong equestrian
          who understands the unique demands of the sport and the lifestyle it
          requires.
        </p>
        <p className="mt-3">
          Concierge care allows her to practice medicine differently&mdash;
          focusing on relationships, not time limits. No 15-minute visits. No
          rushed conversations. Just thoughtful, comprehensive care tailored to
          you as a person, rider, and athlete.
        </p>
        <p className="mt-3">
          Together, we address your medical, physical, and nutritional needs
          using a personalized approach to help you feel and perform at your
          best.
        </p>
        <p className="mt-3 font-medium text-slate-800">
          ShowMD was built to bring this level of care to people like you.
        </p>
      </>
    ),
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
    details: (
      <>
        <p>
          Our secure telemedicine services make it easy to stay connected to
          your provider without interrupting your routine. Whether you&rsquo;re
          at home, at the barn, or traveling on the show circuit, your care
          travels with you.
        </p>
        <p className="mt-3 font-semibold text-slate-800">
          Common conditions and services include:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Minor illnesses (cold, flu, sinus infections, UTIs)</li>
          <li>Skin concerns (rashes, infections, minor injuries)</li>
          <li>Medication management and refills</li>
          <li>Follow-up visits and care coordination</li>
          <li>Wellness consultations and preventive care</li>
          <li>Injury assessment and guidance</li>
          <li>Travel-related health needs</li>
        </ul>
      </>
    ),
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
    details: (
      <>
        <p>
          At ShowMD, Dr. Barb takes a personalized approach to peptide therapy:
          helping you understand your options and creating a plan tailored to
          your goals and lifestyle. We offer different peptides matched to what
          you need, for example:
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <span className="font-semibold text-slate-800">BPC-157:</span>{" "}
            supports tissue repair and recovery
          </li>
          <li>
            <span className="font-semibold text-slate-800">TB-500:</span>{" "}
            promotes healing and reduces inflammation
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              CJC-1295 / Ipamorelin:
            </span>{" "}
            supports growth hormone release for recovery and lean muscle
            development
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              Semaglutide / Tirzepatide:
            </span>{" "}
            helps regulate appetite and metabolic function
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              AOD 9604 (5 mg):
            </span>{" "}
            supports fat metabolism and may aid in targeted weight loss
          </li>
          <li>
            <span className="font-semibold text-slate-800">Glow Blend:</span>{" "}
            promotes skin health, hydration, and overall radiance from within
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              NAD+ (500 mg):
            </span>{" "}
            supports cellular energy production, cognitive function, and
            anti-aging processes
          </li>
          <li>
            <span className="font-semibold text-slate-800">GHK-Cu:</span>{" "}
            supports skin rejuvenation, healing, and collagen production
          </li>
          <li>
            <span className="font-semibold text-slate-800">Semax (30):</span>{" "}
            supports cognitive function, focus, and mental clarity
          </li>
          <li>
            <span className="font-semibold text-slate-800">MOTS-C:</span>{" "}
            supports metabolic function, energy regulation, and fat utilization
          </li>
          <li>
            <span className="font-semibold text-slate-800">BPC/TB Blend:</span>{" "}
            combines healing and anti-inflammatory benefits to support
            accelerated recovery
          </li>
        </ul>
        <p className="mt-3 italic text-slate-500 text-xs">
          Peptide therapies are prescription treatments and require medical
          evaluation.
        </p>
      </>
    ),
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="group bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {service.icon}
        </div>
        <svg
          aria-hidden="true"
          className={`h-5 w-5 text-slate-400 shrink-0 mt-3 transition-transform duration-200${
            open ? " rotate-180" : ""
          }`}
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {service.description}
      </p>
      {open && (
        <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
          {service.details}
        </div>
      )}
      {!open && (
        <p className="mt-3 text-xs font-semibold text-primary/80 group-hover:text-primary transition-colors">
          Click to learn more
        </p>
      )}
    </button>
  );
}

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
