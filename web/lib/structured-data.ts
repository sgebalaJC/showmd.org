const SITE_URL = "https://showmd.org";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ShowMD",
  legalName: "Blasko Medical Consultants Inc",
  alternateName: "ShowMD by Blasko Medical Consultants",
  url: SITE_URL,
  logo: `${SITE_URL}/images/showmd-logo.png`,
  description:
    "Onsite urgent care and concierge medical service for the equestrian community.",
  founder: {
    "@type": "Person",
    name: "Barbara Blasko, MD",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12523 Limonite Ave, Ste #440 #144",
    addressLocality: "Eastvale",
    addressRegion: "CA",
    postalCode: "91752",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "barb@showmd.org",
    areaServed: "US",
  },
};

export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}/#dr-blasko`,
  name: "Barbara Blasko, MD",
  honorificPrefix: "Dr.",
  jobTitle: "Founder & Medical Director",
  medicalSpecialty: "Emergency",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  description:
    "Board-certified Emergency Medicine physician with 22+ years of experience and an active hunter/jumper competitor on the West Coast circuit.",
  knowsAbout: [
    "Emergency Medicine",
    "Telemedicine",
    "Utilization Management",
    "Biomedical Informatics",
    "Concierge Medicine",
  ],
};

export const dihpClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/dihp-clinic#clinic`,
  name: "ShowMD Clinic at Desert International Horse Park",
  url: `${SITE_URL}/dihp-clinic`,
  image: `${SITE_URL}/images/dihp/exterior.jpg`,
  description:
    "Permanent ShowMD urgent care clinic at Desert International Horse Park. X-ray, ultrasound, labs, IV hydration, pharmacy and concierge medical services during Winter Circuit.",
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "84-336 Avenue 51",
    addressLocality: "Thermal",
    addressRegion: "CA",
    postalCode: "92274",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.6308,
    longitude: -116.1647,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  paymentAccepted: ["Credit Card", "Apple Pay", "Venmo", "Zelle"],
  medicalSpecialty: ["Emergency", "PrimaryCare"],
  availableService: [
    { "@type": "MedicalProcedure", name: "Urgent care exam" },
    { "@type": "MedicalProcedure", name: "Digital X-ray" },
    { "@type": "MedicalProcedure", name: "Ultrasound" },
    { "@type": "MedicalProcedure", name: "Lab testing" },
    { "@type": "MedicalProcedure", name: "IV hydration & vitamin therapy" },
    { "@type": "MedicalProcedure", name: "Onsite pharmacy" },
    { "@type": "MedicalProcedure", name: "Wound care & minor procedures" },
    { "@type": "MedicalProcedure", name: "Telemedicine consultation" },
  ],
  physician: { "@id": `${SITE_URL}/#dr-blasko` },
};

type FaqEntry = { question: string; answer: string };

const faqEntries: FaqEntry[] = [
  {
    question: "Where are you located at Thermal?",
    answer:
      "The ShowMD Clinic at Desert International Horse Park is located in the Vendor Area, across from the Grand Equitation Arena.",
  },
  {
    question: "How much do appointments cost?",
    answer:
      "Prices vary, depending on what you need. Basic exams begin at $175. There may be additional fees for services, medications and supplies.",
  },
  {
    question: "Do you take insurance?",
    answer: "At this time, we are unable to accept insurance.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We are able to accept credit cards, Apple Pay, Venmo, and Zelle.",
  },
  {
    question: "What is intravenous (IV) hydration/vitamin therapy?",
    answer:
      "Intravenous (IV) Vitamin Therapy is a safe and effective method for delivering natural vitamins and minerals directly to your bloodstream. This allows for 100% absorption of all IV fluids and vitamins, which makes them immediately available for cellular use. Oral supplements are absorbed into the digestive tract, which only allows for up to 20% absorption of all nutrients.",
  },
  {
    question: "Is IV Hydration Therapy Safe?",
    answer:
      "Yes, IV therapy is safe. Each IV therapy is administered by a registered nurse who has the appropriate training, years of experience in medical care and IV therapy and is licensed and certified by the California Board of Nursing. All ingredients are provided by accredited pharmacies. Each IV therapy is prepared at the time of service and can be customized to each individual's needs.",
  },
  {
    question: "How long does an IV infusion take?",
    answer:
      "On average our IV therapy treatments take 30 minutes to 1 hour. Depending on the individual and the IV service provided, the time of infusion may vary. The RN will be able to provide a more accurate answer at the time of consultation.",
  },
  {
    question: "Can I have an allergic reaction to IV hydration?",
    answer:
      "Allergic reactions to IV vitamin therapy are rare, but may occur. We ask about all allergy and past health history information at consultation and at each subsequent treatment. Reactions to the vitamins themselves are unlikely since they are all naturally present in the body. Our clinic has protocols and medications to treat allergic reactions.",
  },
  {
    question: "Is IV therapy safe during pregnancy?",
    answer:
      "IV fluid replacement is the standard of care for hydration therapy for patients who are acutely dehydrated or unable to tolerate oral fluids, such as Hyperemesis Gravidarum in pregnancy. Please advise your OB/GYN if you will be or have received treatment.",
  },
  {
    question: "Are there any side effects associated with IV therapy?",
    answer:
      "Side effects are very uncommon, but may include discomfort or bruising at the injection site, a cooling sensation in the arm, a metallic taste, or a brief warm flush. Less common side effects include infection, allergic reaction, or vein inflammation. All side effects are short-lived and treatable if necessary.",
  },
];

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "ShowMD",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
