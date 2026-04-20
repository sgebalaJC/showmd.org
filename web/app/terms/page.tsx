import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for showmd.org.",
  alternates: { canonical: "https://showmd.org/terms" },
};

export default function TermsPage() {
  return (
    <article className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: April 2026</p>

        <div className="mt-8 space-y-3 text-ink-700 leading-relaxed
                        [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink-950
                        [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1
                        [&_a]:text-gold-700 [&_a]:underline hover:[&_a]:text-gold-900">

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of showmd.org (the &quot;Site&quot;),
            operated by ShowMD (&quot;we&quot;, &quot;us&quot;). By using the Site, you agree to these
            Terms. If you do not agree, please do not use the Site.
          </p>
          <p>
            The Site is a public marketing website. It is <strong>not</strong> the ShowMD software product.
            Access to the ShowMD product by a medical practice is governed by a separate Master Services
            Agreement and Business Associate Agreement (&quot;BAA&quot;) signed at onboarding.
          </p>

          <h2>1. Use of the Site</h2>
          <p>We grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Site for your own lawful, non-commercial purposes. You agree not to:</p>
          <ul>
            <li>Use the Site in a way that violates any law or regulation.</li>
            <li>Attempt to gain unauthorized access to the Site or its underlying systems.</li>
            <li>Interfere with, disrupt, or overload the Site.</li>
            <li>Reverse engineer or attempt to derive source code from any component of the Site.</li>
            <li>Use the Site to transmit protected health information (&quot;PHI&quot;). The Site is not a HIPAA-covered environment.</li>
          </ul>

          <h2>2. Medical disclaimer</h2>
          <p>ShowMD is an operations platform for medical practices. The Site and the ShowMD product do not provide medical advice, diagnosis, or treatment, and are not a substitute for the professional judgment of a licensed clinician.</p>

          <h2>3. Waitlist and demos</h2>
          <p>Joining the waitlist or requesting a demo does not constitute an offer, contract, or commitment by ShowMD to provide services, and does not guarantee access, availability, pricing, timing, or any specific feature set.</p>

          <h2>4. Intellectual property</h2>
          <p>The Site, its content, design, layout, code, graphics, text, logos, and the &quot;ShowMD&quot; name and marks are the property of ShowMD or its licensors and are protected by U.S. and international intellectual-property laws.</p>

          <h2>5. Third-party services and links</h2>
          <p>The Site may reference or link to third-party services (for example, DrChrono, SignalWire, Twilio, Stripe, Google Workspace, Slack). We do not control those services, and their inclusion does not imply endorsement.</p>

          <h2>6. Changes to the Site and these Terms</h2>
          <p>We may modify, suspend, or discontinue any part of the Site at any time without notice. We may also revise these Terms from time to time.</p>

          <h2>7. Privacy</h2>
          <p>Your use of the Site is also governed by our <Link href="/privacy">Privacy Policy</Link>.</p>

          <h2>8. Disclaimers</h2>
          <p>THE SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHOWMD MD DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED.</p>

          <h2>9. Limitation of liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHOWMD MD WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. IN ANY EVENT, OUR TOTAL LIABILITY WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100).</p>

          <h2>10. Governing law</h2>
          <p>These Terms are governed by the laws of the State of California, excluding its conflict-of-laws rules. Any dispute will be resolved in the state or federal courts located in San Francisco County, California.</p>

          <h2>11. Severability &amp; entire agreement</h2>
          <p>If any provision of these Terms is held unenforceable, the remaining provisions will remain in effect. These Terms, together with the Privacy Policy, constitute the entire agreement between you and ShowMD regarding the Site.</p>

          <h2>12. Contact</h2>
          <p>Questions? Email <a href="mailto:barb@showmd.org">barb@showmd.org</a>.</p>
        </div>

        <div className="mt-12 border-t border-ink-100 pt-6 text-sm">
          <Link href="/" className="text-ink-600 hover:text-ink-900">← Back to home</Link>
        </div>
      </Container>
    </article>
  );
}
