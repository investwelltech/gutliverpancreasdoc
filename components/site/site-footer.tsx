import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { ComingSoonBadge } from "./coming-soon";
import { footerNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/config/site";

export function SiteFooter() {
  const { doctor, social, services } = siteConfig;

  const socialLinks = [
    { label: "Instagram", href: social.instagram },
    { label: "LinkedIn", href: social.linkedin },
    { label: "YouTube", href: social.youtube },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-rule bg-navy pb-12 pt-12 text-white sm:pb-16 sm:pt-16">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          <div>
            <BrandMark tone="light" size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Gastroenterology, hepatology and pancreatic medicine.
            </p>
            <p className="mt-3 text-sm text-white/50">
              {services.statusLine}
            </p>

            {/* Only configured (non-empty) profiles are rendered. These are
                the site's only outward channels. */}
            {socialLinks.length > 0 && (
              <nav aria-label="Social profiles" className="mt-6">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
                      >
                        {s.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="label-eyebrow text-white/45">Explore</h2>
            <ul className="mt-5 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <div className="mt-10 border-t border-white/12 pt-8 sm:mt-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} {doctor.name}
            </p>
            <ComingSoonBadge tone="light" />
          </div>
        </div>
      </div>
    </footer>
  );
}
