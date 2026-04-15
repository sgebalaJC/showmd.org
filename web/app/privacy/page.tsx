import type { Metadata } from "next";
import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ShowMD Privacy Policy.",
  alternates: { canonical: "https://showmd.org/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
          ShowMD Privacy Policy
        </h1>
        <div className="space-y-2 text-sm text-slate-500 mb-10">
          <p>Effective Date: January 1, 2022</p>
          <p>Last Updated: January 1, 2026</p>
        </div>
        <div className="prose prose-slate max-w-none space-y-8">
          <p className="text-slate-700 leading-relaxed">
            ShowMD (&ldquo;ShowMD,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) is committed to protecting your privacy and
            safeguarding your personal information. This Privacy Policy explains
            how we collect, use, disclose, and protect information when you
            interact with our website, services, and communications, including
            SMS and MMS messaging.
          </p>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              1. Information We Collect
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong>Information You Provide:</strong> Name, email address,
                phone number, organization or affiliation, and information
                submitted through forms or inquiries.
              </p>
              <p>
                <strong>Communications Data:</strong> SMS/MMS opt-in status and
                message interaction data.
              </p>
              <p>
                <strong>Website Usage Information:</strong> IP address, browser
                type, device information, and pages visited.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We use your information to provide and operate ShowMD services,
              respond to inquiries, send service-related communications including
              SMS/MMS, improve website functionality, and comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              3. SMS / MMS Communications &amp; Opt-In Disclosure
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                By opting in to receive SMS or MMS messages from ShowMD, you
                consent to receive messages related to our services, operations,
                and informational updates.
              </p>
              <p>
                <strong>SMS Opt-In Disclosure:</strong> By opting in, you agree
                to receive SMS/MMS messages from ShowMD. Message and data rates
                may apply. Your information will not be sold or shared for
                marketing purposes. Reply STOP to opt out. ShowMD does not sell,
                rent, or share personal information for marketing or promotional
                purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              4. Sharing of Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Information may be shared with trusted service providers, to comply
              with laws, or to protect rights and safety. Service providers are
              required to safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              5. Data Security
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We use reasonable administrative, technical, and physical safeguards
              to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              6. Data Retention
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Personal information is retained only as long as necessary or
              legally required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              7. Your Choices and Rights
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You may opt out of SMS/MMS at any time and request access,
              correction, or deletion of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              8. Third-Party Links
            </h2>
            <p className="text-slate-700 leading-relaxed">
              ShowMD is not responsible for the privacy practices of third-party
              websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Updates will be posted with a revised date. Continued use
              constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              10. Contact Us
            </h2>
            <div className="text-slate-700 leading-relaxed">
              <p>ShowMD</p>
              <p>
                Email:{" "}
                <a
                  className="text-primary hover:underline"
                  href="mailto:kaitlyn@showmd.org"
                >
                  kaitlyn@showmd.org
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
