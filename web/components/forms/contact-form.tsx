"use client";

// TODO: wire to /api/contact

const APPOINTMENT_URL =
  "https://www.solvhealth.com/r/book-online/pjOB6G/z932VQKdg6inEA26IqgU0/slots/today";

export default function ContactForm() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href={APPOINTMENT_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] border border-transparent min-h-10 rounded-md h-14 px-8 text-lg font-bold bg-[hsl(40,76%,48%)] hover:bg-[hsl(40,76%,42%)] text-white w-full sm:w-auto">
          Book an Appointment
          <svg
            aria-hidden="true"
            className="lucide lucide-arrow-right ml-2 h-5 w-5"
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
      <a
        className="flex items-center gap-2 text-white hover:text-[hsl(40,76%,60%)] font-medium transition-colors p-4"
        href="mailto:franchising@showmd.org"
      >
        <svg
          aria-hidden="true"
          className="lucide lucide-mail h-5 w-5"
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
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect height="16" rx="2" width="20" x="2" y="4" />
        </svg>
        franchising@showmd.org
      </a>
    </div>
  );
}
