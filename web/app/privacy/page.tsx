import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for showmd.org.",
  alternates: { canonical: "https://showmd.org/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: April 2026</p>

        <div className="mt-8 space-y-3 text-ink-700 leading-relaxed
                        [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink-950
                        [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink-950
                        [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1
                        [&_a]:text-gold-700 [&_a]:underline hover:[&_a]:text-gold-900">

          <p>
            This Privacy Policy describes how ShowMD (&quot;we&quot;, &quot;us&quot;) collects and uses
            information on showmd.org (the &quot;Site&quot;), our public marketing website. The Site is not the
            ShowMD product. If you are a patient or clinician using an ShowMD-powered product deployment
            at your practice, a separate notice of privacy practices applies to that deployment and supersedes
            this policy for protected health information (&quot;PHI&quot;).
          </p>

          <h2>1. Information we collect</h2>
          <p>We collect information you provide directly to us and a limited amount of information automatically.</p>
          <h3>1.1 Information you provide</h3>
          <ul>
            <li><strong>Waitlist signups.</strong> When you join the waitlist, we collect your email address and, if you share it, your practice name.</li>
            <li><strong>Contact form submissions.</strong> When you message us, we collect your name, email, practice, and the content of the message.</li>
            <li><strong>Communications.</strong> If you email us or book a demo, we keep that correspondence.</li>
          </ul>
          <h3>1.2 Information collected automatically</h3>
          <ul>
            <li><strong>Request metadata.</strong> When you submit a form, we record the submission timestamp and the browser user-agent string so we can filter abuse.</li>
            <li><strong>Server and CDN logs.</strong> Our hosting provider logs standard HTTP metadata (IP address, referer, user-agent) for operational and security purposes.</li>
            <li><strong>Analytics.</strong> The Site may use privacy-respecting, cookieless analytics to measure aggregate traffic. We do not track individuals across sites.</li>
          </ul>
          <p>We do <strong>not</strong> collect patient health information through this Site. Please do not send PHI by email or through any form on this Site.</p>

          <h2>2. How we use information</h2>
          <ul>
            <li>To notify you about early access, product launches, and material updates.</li>
            <li>To respond to inquiries you send us.</li>
            <li>To operate, secure, and improve the Site.</li>
            <li>To comply with our legal obligations.</li>
          </ul>
          <p>We do not sell your information. We do not use it for third-party advertising.</p>

          <h2>3. How we share information</h2>
          <p>We share information only with service providers acting on our behalf and only to the extent needed for them to perform their role:</p>
          <ul>
            <li><strong>Google Cloud / Firebase</strong> — hosting, database (Firestore), and edge delivery. Covered by Google&apos;s security commitments.</li>
            <li><strong>Email providers</strong> — to send replies and updates you&apos;ve opted into.</li>
          </ul>
          <p>We may also disclose information if required by law, to enforce our terms, or to protect the rights, property, or safety of ShowMD or others.</p>

          <h2>4. Data security</h2>
          <p>We use commercially reasonable safeguards to protect the information we collect, including encryption in transit (HTTPS), database-layer access rules that restrict who can read or modify submission data, and PII redaction in application logs.</p>

          <h2>5. Data retention</h2>
          <p>We keep waitlist and inquiry data for as long as necessary to operate the Site, respond to you, and comply with legal obligations. You can request deletion at any time.</p>

          <h2>6. Your rights</h2>
          <p>You can request to access, correct, or delete the information we hold about you. Email us at <a href="mailto:privacy@showmd.org">privacy@showmd.org</a>.</p>

          <h2>7. Children</h2>
          <p>The Site is not directed to children under 13, and we do not knowingly collect information from them.</p>

          <h2>8. International users</h2>
          <p>The Site is operated from the United States. If you access it from outside the U.S., your information will be transferred to, stored, and processed in the U.S.</p>

          <h2>9. Cookies</h2>
          <p>The Site does not set first-party tracking cookies. If we introduce analytics that use cookies, we will update this policy and — where required — request your consent.</p>

          <h2>10. HIPAA &amp; protected health information</h2>
          <p>The ShowMD marketing site is not a HIPAA-covered service and does not process PHI. The ShowMD product, deployed to a practice under a Business Associate Agreement (&quot;BAA&quot;), is designed to operate as a HIPAA business associate for that practice.</p>

          <h2>11. Changes to this policy</h2>
          <p>We may update this policy from time to time. The &quot;Last updated&quot; date reflects the most recent revision.</p>

          <h2>12. Contact us</h2>
          <p>
            Questions? Email <a href="mailto:privacy@showmd.org">privacy@showmd.org</a> or{" "}
            <a href="mailto:hello@showmd.org">hello@showmd.org</a>.
          </p>
        </div>

        <div className="mt-12 border-t border-ink-100 pt-6 text-sm">
          <Link href="/" className="text-ink-600 hover:text-ink-900">← Back to home</Link>
        </div>
      </Container>
    </article>
  );
}
