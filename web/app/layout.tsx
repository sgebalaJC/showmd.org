import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/json-ld";
import {
  organizationSchema,
  physicianSchema,
  websiteSchema,
} from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://showmd.org"),
  title: {
    default: "ShowMD — Onsite Urgent Care for Equestrians",
    template: "%s — ShowMD",
  },
  description:
    "Onsite urgent care, X-ray, labs, IV hydration, pharmacy and concierge medicine at the horse show. Founded by Dr. Barbara Blasko.",
  openGraph: {
    type: "website",
    url: "https://showmd.org/",
    siteName: "ShowMD",
    title: "ShowMD — Onsite Urgent Care for Equestrians",
    description:
      "Onsite urgent care, X-ray, labs, IV hydration and concierge medicine at the horse show. Same equipment as any clinic, right at the show grounds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShowMD — Onsite Urgent Care for Equestrians",
    description:
      "Onsite urgent care, X-ray, labs, IV hydration and concierge medicine at the horse show.",
  },
  alternates: { canonical: "https://showmd.org/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-slate-900 antialiased">
        <JsonLd id="ld-organization" data={organizationSchema} />
        <JsonLd id="ld-website" data={websiteSchema} />
        <JsonLd id="ld-physician" data={physicianSchema} />
        {children}
      </body>
    </html>
  );
}
