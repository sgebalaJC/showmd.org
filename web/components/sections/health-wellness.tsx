"use client";

import { useState } from "react";

type Block = {
  title: string;
  body: React.ReactNode;
};

const blocks: Block[] = [
  {
    title: "A Smarter Approach to Weight Management",
    body: (
      <>
        <p>
          Our program goes beyond traditional dieting. We take a comprehensive,
          medical approach that may include:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>Personalized nutrition and lifestyle guidance</li>
          <li>Metabolic health evaluation</li>
          <li>Physician-supervised treatment plans</li>
          <li>
            Advanced therapies that support appetite regulation and energy
            balance
          </li>
        </ul>
        <p className="mt-3">
          For appropriate patients, treatment may include medications from a
          class known as GLP-1 receptor agonists, which are used to support
          weight loss and metabolic health.
        </p>
      </>
    ),
  },
  {
    title: "What Are GLP-1–Based Therapies?",
    body: (
      <>
        <p>
          GLP-1–based medications are FDA-approved treatments originally
          developed for diabetes and now widely used in medical weight
          management. They work by:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>Supporting appetite control</li>
          <li>Slowing gastric emptying</li>
          <li>Improving insulin response</li>
          <li>Helping patients feel full longer</li>
        </ul>
        <p className="mt-3">
          When combined with proper medical oversight and lifestyle support,
          these therapies can help patients achieve sustainable results.
        </p>
      </>
    ),
  },
  {
    title: "Who Is This For?",
    body: (
      <>
        <p>This program may be appropriate for individuals who:</p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>Are looking for medically supervised weight loss</li>
          <li>Struggle with appetite control or metabolic resistance</li>
          <li>Want to improve performance, stamina, and recovery</li>
          <li>Prefer a structured, physician-guided approach</li>
        </ul>
        <p className="mt-3">
          All patients undergo a thorough medical evaluation to determine if
          treatment is appropriate.
        </p>
      </>
    ),
  },
  {
    title: "The ShowMD Difference",
    body: (
      <>
        <p>
          Unlike traditional clinics, ShowMD is built by riders, for riders. We
          understand:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>The physical demands of long show days</li>
          <li>The importance of strength, balance, and endurance</li>
          <li>The culture and lifestyle of equestrian sport</li>
        </ul>
        <p className="mt-3">
          Our goal is not just weight loss&mdash;it&rsquo;s helping you feel
          ring-ready.
        </p>
      </>
    ),
  },
  {
    title: "What to Expect",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Initial consultation and medical assessment</li>
        <li>Customized treatment plan</li>
        <li>Ongoing monitoring and support</li>
        <li>Adjustments based on your goals and response</li>
      </ul>
    ),
  },
  {
    title: "Disclaimer",
    body: (
      <p className="italic text-slate-500">
        GLP-1&ndash;based medications are prescription therapies and are not
        appropriate for everyone. Treatment is provided only after evaluation
        by a licensed medical professional. Results vary. Potential side
        effects and risks will be discussed during your consultation.
      </p>
    ),
  },
];

function BlockItem({ block }: { block: Block }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors pr-4">
          {block.title}
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
          {block.body}
        </div>
      )}
    </div>
  );
}

export default function HealthWellness() {
  return (
    <section className="py-20 md:py-28 bg-white" id="health-wellness">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div>
            <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
              Health &amp; Wellness
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
              Medical Weight Management for Equestrian Athletes
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Feel stronger, ride better, and get back to the ring with
              confidence.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              At ShowMD, we understand that optimal health isn&rsquo;t just
              about numbers on a scale&mdash;it&rsquo;s about performance,
              endurance, recovery, and confidence in and out of the saddle. Our
              physician-led weight management program is designed specifically
              for the needs of equestrian athletes and active individuals.
            </p>
            <a href="mailto:barb@showmd.org?subject=Weight%20Management%20Consultation">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] text-white border border-primary/30 min-h-9 px-4 py-2 bg-primary hover:bg-primary/90">
                Learn more
              </button>
            </a>
          </div>

          <div className="border-t border-slate-200">
            {blocks.map((block) => (
              <BlockItem key={block.title} block={block} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
