import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://showmd.org"),
  title: {
    default: "ShowMD — Your practice's AI staff, ready Monday morning.",
    template: "%s — ShowMD",
  },
  description:
    "ShowMD is the AI operations layer for independent medical practices. It reads your faxes, fills your charts, answers your patients, collects your co-pays, and books your appointments — while you see patients.",
  openGraph: {
    type: "website",
    url: "https://showmd.org/",
    siteName: "ShowMD",
    title: "ShowMD — Your practice's AI staff, ready Monday morning.",
    description:
      "AI operations layer for independent medical practices. Plugs into DrChrono, Google Workspace, SignalWire, Twilio, Stripe, and Slack. HIPAA-grade from day one.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShowMD — Your practice's AI staff, ready Monday morning.",
    description:
      "AI operations layer for independent medical practices.",
  },
  alternates: { canonical: "https://showmd.org/" },
};

export const viewport: Viewport = {
  themeColor: "#fdfcf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-cream-50 text-ink-900 antialiased selection:bg-gold-200 selection:text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink-900 focus:px-3 focus:py-2 focus:text-cream-50"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
