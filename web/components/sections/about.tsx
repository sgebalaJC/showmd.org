import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative pb-8 lg:pb-10">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/showmd-doctor.jpg"
                alt="Dr. Barbara Blasko"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-2 right-4 lg:-right-4 bg-primary text-white rounded-xl shadow-lg p-5 max-w-[220px]">
              <svg
                aria-hidden="true"
                className="lucide lucide-heart h-6 w-6 text-[hsl(40,76%,60%)] mb-2"
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
              <p className="text-sm font-medium leading-relaxed">
                {'"Two athletes on your team — invest in the human half."'}
              </p>
              <p className="text-xs text-white/70 mt-2">— Dr. Blasko</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-[hsl(40,76%,48%)] uppercase tracking-wider">
              Meet Dr. Blasko
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-3 mb-3">
              A Doctor Who Speaks Equestrian
            </h2>
            <p className="text-sm font-medium text-slate-500 mb-6">
              Meet the doctor who knows how important it is to get you back to
              feeling ring-ready&mdash;because she&rsquo;s headed there too.
            </p>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Dr. Barb Blasko is a board-certified Emergency Medicine
                physician with over 20 years of experience practicing in
                Emergency Departments across the United States. Her expertise
                includes Emergency Medicine, Telemedicine, Utilization
                Management, and Biomedical Informatics.
              </p>
              <p>
                But Dr. Blasko isn&rsquo;t just a physician&mdash;she&rsquo;s a
                fellow competitor. An amateur horsewoman and active
                show-jumping competitor on the West Coast hunter/jumper
                circuit, she splits her time between the emergency department
                and the jumper ring with her mare, Dior.
              </p>
              <p>
                She founded ShowMD to combine those two worlds&mdash;creating a
                medical service designed specifically for equestrian athletes,
                staffed by providers who understand both medicine and riding.
              </p>
              <p>
                At ShowMD, we prioritize patient comfort, continuity of care,
                and a team trained to understand the unique needs, demands, and
                language of the equestrian community.
              </p>
              <p className="font-medium text-slate-800">
                When you tell anyone at ShowMD, &ldquo;my horse did a two in
                the one,&rdquo; you won&rsquo;t need to explain&mdash;we
                already understand.
              </p>
              <dl className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Certification
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-800">
                    Board-Certified ER
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Experience
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-800">
                    22+ years
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Discipline
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-800">
                    Hunter / Jumper
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
