"use client";

import { useState } from "react";

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

type Faq = {
  q: string;
  a: React.ReactNode;
};

const faqs: Faq[] = [
  {
    q: "Where are you located at Thermal?",
    a: "The ShowMD Clinic at Desert International Horse Park is located in the Vendor Area, across from the Grand Equitation Arena.",
  },
  {
    q: "How much do appointments cost?",
    a: "Prices vary, depending on what you need. Basic exams begin at $175. There may be additional fees for services, medications and supplies.",
  },
  {
    q: "Do you take insurance?",
    a: "At this time, we are unable to accept insurance.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We are able to accept credit cards, Apple Pay, Venmo, and Zelle.",
  },
  {
    q: "What is intravenous (IV) hydration/vitamin therapy?",
    a: "Intravenous (IV) Vitamin Therapy is a safe and effective method for delivering natural vitamins and minerals directly to your bloodstream. This allows for 100% absorption of all IV fluids and vitamins, which makes them immediately available for cellular use. Oral supplements are absorbed into the digestive tract, which only allows for up to 20% absorption of all nutrients.",
  },
  {
    q: "Is IV Hydration Therapy Safe?",
    a: "Yes, IV therapy is safe. Each IV therapy is administered by a registered nurse who has the appropriate training, years of experience in medical care and IV therapy and is licensed and certified by the California Board of Nursing. All of our ingredients are provided by accredited pharmacies. Each individual IV therapy is prepared at the time of service and can be customized to each individual\u2019s needs.",
  },
  {
    q: "How Long Does an IV Infusion Take?",
    a: "On average our IV therapy treatments take from 30 minutes to 1 hour. Depending on the individual and the IV service provided, the time of infusion may vary. The RN will be able to provide a more accurate answer at the time of consultation.",
  },
  {
    q: "Can I have an allergic reaction to IV Hydration?",
    a: "At the time of consultation and before providing any treatments, and at each subsequent treatment, we ask about all allergy and past health history information. Allergic reactions to IV vitamin therapy are rare, but may occur. An individual may have an unknown allergy to one of the nutrients used. Reactions to the vitamins themselves are unlikely since they are all naturally present in the body. All IV compositions are reviewed at time of consultation and during infusion. Patient safety and comfort is our number one concern. Our clinic has protocols and medications to treat allergic reactions.",
  },
  {
    q: "Is IV therapy safe during pregnancy?",
    a: "IV fluid replacement is the standard of care for hydration therapy for patients acutely dehydrated and for those unable to tolerate oral fluids, such as conditions like Hyperemesis Gravidarum experienced in pregnancy. Please advise your OB/GYN if you will be/have received treatment.",
  },
  {
    q: "Are there any side effects associated with IV therapy?",
    a: (
      <>
        <p>With IV therapy side effects are very uncommon, but may occur.</p>
        <p className="mt-3 font-semibold text-slate-800">Common side effects</p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>Discomfort, bruising and pain at the site of injection.</li>
          <li>You may feel a cooling sensation in the arm from the IV fluids.</li>
          <li>You may taste the vitamins or a &ldquo;metallic&rdquo; taste in your mouth.</li>
          <li>You may experience a &ldquo;warm flush&rdquo; sensation, usually to the face.</li>
        </ul>
        <p className="mt-3 font-semibold text-slate-800">Less common side effects</p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>Infection</li>
          <li>Allergic reaction to the treatment &mdash; flushing</li>
          <li>Redness</li>
          <li>Hives</li>
          <li>Inflammation of the vein</li>
        </ul>
        <p className="mt-3 font-semibold text-slate-800">Extremely rare side effects</p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>Blood clot</li>
          <li>Infection</li>
          <li>Severe allergic reaction, anaphylaxis</li>
        </ul>
        <p className="mt-3 italic text-slate-500">
          Note: All side effects are short lived and treatable if necessary.
        </p>
      </>
    ),
  },
];

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">
          {faq.q}
        </span>
        <svg
          aria-hidden="true"
          className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200${
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
      </button>
      {open && (
        <div className="pb-5 pr-8 text-sm text-slate-600 leading-relaxed">
          {typeof faq.a === "string" ? <p>{faq.a}</p> : faq.a}
        </div>
      )}
    </div>
  );
}

export default function Faqs() {
  return (
    <section className="py-20 md:py-28 bg-white" id="faqs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div>
            <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
              FAQs
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Don&apos;t see the answer you need here? Please feel free to email
              anytime.
            </p>
            <a href={APPOINTMENT_URL} rel="noopener noreferrer" target="_blank">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] text-white border border-primary/30 min-h-9 px-4 py-2 bg-primary hover:bg-primary/90">
                Book an Appointment
              </button>
            </a>
          </div>

          <div className="border-t border-slate-200">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
