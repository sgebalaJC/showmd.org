import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
    default:
      "ShowMD — Onsite Urgent Care & Concierge Medical for the Equestrian Community",
    template: "%s — ShowMD",
  },
  description:
    "ShowMD brings urgent care, diagnostics, X-rays, IV hydration, pharmacy, and concierge medical services directly to the horse show. Founded by Dr. Barbara Blasko.",
  openGraph: {
    type: "website",
    url: "https://showmd.org/",
    siteName: "ShowMD",
    title: "ShowMD — Horse Show Health Care",
    description:
      "Onsite Urgent Care and Concierge Medical Service for the equestrian community. Same medical equipment as any clinic, right at the horse show.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShowMD — Horse Show Health Care",
    description:
      "Onsite Urgent Care and Concierge Medical Service for the equestrian community.",
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
        {children}
      </body>
    </html>
  );
}
