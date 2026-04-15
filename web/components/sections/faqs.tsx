"use client";

import { useState } from "react";

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

const faqItems = [
  "Where are you located at Thermal?",
  "How much do appointments cost?",
  "Do you take insurance?",
  "What forms of payment do you accept?",
  "What is intravenous (IV) hydration/vitamin therapy?",
  "Is IV Hydration Therapy Safe?",
  "How Long Does an IV Infusion Take?",
  "Can I have an allergic reaction to IV Hydration?",
  "Is IV therapy safe during pregnancy?",
  "Are there any side effects associated with IV therapy?",
];

function FaqItem({ question }: { question: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <svg
          aria-hidden="true"
          className={`lucide lucide-chevron-down h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200${
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
        <div className="pb-5 text-sm text-slate-600 leading-relaxed">
          Please contact us or book an appointment for details about this question.
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
            {faqItems.map((q) => (
              <FaqItem key={q} question={q} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
