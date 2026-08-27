import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { WhatsAppCta, EmailCta } from "./cta";
import { ComingSoonBadge } from "./coming-soon";
import { footerNav, legalNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/config/site";

export function SiteFooter() {
  const { doctor, social, services } = siteConfig;

  const socialLinks = [
    { label: "Instagram", href: social.instagram },
    { label: "LinkedIn", href: social.linkedin },
    { label: "YouTube", href: social.youtube },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-rule bg-navy pb-28 pt-12 text-white sm:pt-16 lg:pb-16">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark tone="light" size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Specialist practice in digestive, liver and pancreatic health.
            </p>
            <p className="mt-3 text-sm text-white/50">
              {services.statusLine}
            </p>

            {/*
              Contact is offered as actions only. The configured phone number
              and email address are never rendered as visible page copy.
            */}
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppCta variant="onNavyOutline" size="sm" withIcon>
                WhatsApp Us
              </WhatsAppCta>
              <EmailCta variant="onNavyOutline" size="sm" />
            </div>

            {/* Only configured (non-empty) profiles are rendered. */}
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

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:contents">
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

          <nav aria-label="Legal">
            <h2 className="label-eyebrow text-white/45">Legal</h2>
            <ul className="mt-5 space-y-2.5">
              {legalNav.map((link) => (
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
            <p className="mt-5 text-xs leading-relaxed text-white/40">
              Policy documents are in preparation and are not yet in force.
            </p>
          </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-8 sm:mt-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <p className="max-w-3xl text-xs leading-relaxed text-white/55">
              <strong className="font-semibold text-white/80">
                Medical disclaimer.
              </strong>{" "}
              This website is a professional profile and provides general
              information only. It does not provide medical advice, does not
              create a doctor–patient relationship and is not a substitute for
              care from your own doctor. If you have urgent or severe symptoms,
              contact your local emergency services.
            </p>
            <ComingSoonBadge tone="light" />
          </div>
          <p className="mt-6 text-xs text-white/40">
            © {new Date().getFullYear()} {doctor.name}. Medical registration
            details to be confirmed prior to launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
