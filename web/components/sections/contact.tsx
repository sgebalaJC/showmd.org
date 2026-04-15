import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-br from-[hsl(0,65%,32%)] to-[hsl(0,45%,20%)] text-white text-center relative"
      id="contact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,151,58,0.15)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Questions for the ShowMD Team?
        </h2>
        <p className="text-xl text-white/80 mb-10 leading-relaxed">
          Whether you&apos;d like to inquire about Concierge Care, patient
          services, or follow up on previous care — we&apos;d love to hear from
          you.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
