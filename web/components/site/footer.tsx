import Image from "next/image";
import Link from "next/link";
import SubscriptionForm from "@/components/forms/subscription-form";

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,45%,14%)] py-12 border-t border-[hsl(0,30%,20%)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/showmd-logo.png"
            alt="ShowMD"
            width={160}
            height={46}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <p className="text-white/50 text-sm font-medium">
            Horse Show Health Care — Onsite Urgent Care &amp; Concierge Medical
          </p>
          <div className="w-full flex flex-col items-center gap-3 pt-2">
            <p className="text-white/60 text-sm">Stay in the loop — get updates from ShowMD.</p>
            <SubscriptionForm />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-white/40 text-sm pt-4 border-t border-white/10 w-full max-w-xl justify-center">
            <span>© 2026 Blasko Medical Consultants Inc. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <Link
              className="text-white/50 hover:text-white/80 transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
