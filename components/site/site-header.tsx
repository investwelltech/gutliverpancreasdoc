"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { WhatsAppCta } from "./cta";
import { primaryNav } from "@/lib/content/navigation";
import { SocialIconLinks, SocialLabelledLinks } from "./social-links";
import { cn } from "@/lib/utils";

/**
 * Simple hamburger on mobile, a flat row of anchors from `lg`.
 *
 * The nav is entirely homepage anchors, so a click does not change the
 * pathname - the sheet therefore closes on click rather than on navigation.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Lock scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-rule bg-warm-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-warm-white/80">
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
          <BrandMark size="md" />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <SocialIconLinks />
          </div>

          <div className="flex items-center gap-0.5 lg:hidden">
            <SocialIconLinks />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-navy"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of <header>: the header's backdrop-blur would otherwise become
          the containing block for this fixed panel and clip it to header height. */}
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto border-t border-rule bg-warm-white px-5 pb-24 pt-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-14 items-center border-b border-rule",
                  "font-[family-name:var(--font-display)] text-xl text-navy"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <WhatsAppCta variant="primary" size="lg" block />
          </div>

          <div className="mt-8 border-t border-rule pt-5">
            <SocialLabelledLinks className="-ml-3" />
          </div>
        </div>
      )}
    </>
  );
}
