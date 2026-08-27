import Image from "next/image";
import Link from "next/link";
import { SocialLabelledLinks } from "./social-links";
import { logo } from "@/lib/config/brand-assets";
import { siteConfig } from "@/lib/config/site";

/**
 * Deliberately minimal: identity, the three profiles, and the emergency line.
 * No navigation mirror, no consultancy messaging - both are on the page above.
 */
export function SiteFooter() {
  const { doctor, brand } = siteConfig;

  return (
    <footer className="border-t border-white/10 bg-navy px-5 pb-16 pt-12 text-white sm:px-8 sm:pb-12">
      <div className="mx-auto max-w-[1240px]">
        <Link href="/" className="inline-block bg-warm-white px-4 py-3">
          <Image
            src={logo.stacked.src}
            alt={brand.practiceName}
            width={logo.stacked.width}
            height={logo.stacked.height}
            sizes="180px"
            className="h-auto w-[140px]"
          />
        </Link>

        <p className="mt-5 font-[family-name:var(--font-display)] text-xl text-white">
          {doctor.name}
        </p>
        <p className="mt-1.5 text-[0.9375rem] text-white/65">
          Gastroenterology {brand.deviceSeparator} Hepatology{" "}
          {brand.deviceSeparator} Pancreatic Medicine
        </p>

        <SocialLabelledLinks className="-ml-3 mt-5" tone="light" withWhatsApp />

        <p className="mt-10 max-w-2xl border-t border-white/10 pt-6 text-[0.8125rem] leading-relaxed text-white/50">
          This website is a professional profile and does not provide medical
          advice. In an emergency, contact your local emergency services.
        </p>

        <p className="mt-5 text-xs text-white/40">
          © {new Date().getFullYear()} {doctor.name}
        </p>
      </div>
    </footer>
  );
}
