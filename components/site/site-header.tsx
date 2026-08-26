"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { BookCta, Cta } from "./cta";
import { primaryNav, utilityNav } from "@/lib/content/navigation";
import {
  SocialIconLinks,
  SocialLabelledLinks,
} from "./social-links";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Close everything on navigation.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Dismiss the desktop dropdown on outside click / Escape (no hover dependency).
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-rule bg-warm-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-warm-white/80">
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
          <BrandMark size="md" />

          <nav
            ref={navRef}
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {primaryNav.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "text-[0.8125rem] font-medium transition-colors",
                      isActive(item.href)
                        ? "text-teal"
                        : "text-slate hover:text-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = openMenu === item.label;
              const groupActive = item.children.some((c) => isActive(c.href));

              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(expanded ? null : item.label)}
                    className={cn(
                      "flex items-center gap-1 text-[0.8125rem] font-medium transition-colors",
                      groupActive || expanded
                        ? "text-teal"
                        : "text-slate hover:text-navy"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={2}
                      aria-hidden="true"
                      className={cn(
                        "transition-transform duration-200",
                        expanded && "rotate-180"
                      )}
                    />
                  </button>

                  {expanded && (
                    <div className="absolute left-1/2 top-[calc(100%+18px)] w-64 -translate-x-1/2 border border-rule bg-white p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 transition-colors hover:bg-blue-light"
                        >
                          <span className="block font-[family-name:var(--font-display)] text-base text-navy">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs leading-snug text-slate">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <SocialIconLinks />
            <span aria-hidden="true" className="h-5 w-px bg-rule" />
            {utilityNav.map((link) => (
              <Cta
                key={link.href}
                href={link.href}
                variant="outline"
                size="sm"
                className="hidden xl:inline-flex"
              >
                {link.label}
              </Cta>
            ))}
            <BookCta variant="primary" size="sm" />
          </div>

          <div className="flex items-center gap-0.5 lg:hidden">
            <SocialIconLinks />
            <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden"
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
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto border-t border-rule bg-warm-white px-5 pb-36 pt-5 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-rule py-4">
                  <p className="label-eyebrow text-slate">{item.label}</p>
                  <div className="mt-3 flex flex-col gap-3 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={isActive(child.href) ? "page" : undefined}
                        className={cn(
                          "font-[family-name:var(--font-display)] text-lg",
                          isActive(child.href) ? "text-teal" : "text-navy"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "border-b border-rule py-4 font-[family-name:var(--font-display)] text-xl",
                    isActive(item.href) ? "text-teal" : "text-navy"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/faq"
              className="border-b border-rule py-4 font-[family-name:var(--font-display)] text-xl text-navy"
            >
              FAQ
            </Link>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            {utilityNav.map((link) => (
              <Cta
                key={link.href}
                href={link.href}
                variant="outline"
                size="md"
                block
              >
                {link.label}
              </Cta>
            ))}
            <BookCta variant="primary" size="md" block />
          </div>

          <div className="mt-8 border-t border-rule pt-5">
            <p className="label-eyebrow mb-2 text-slate">Follow</p>
            <SocialLabelledLinks className="-ml-3" />
          </div>
        </div>
      )}
    </>
  );
}
