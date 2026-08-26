import { BookCta, WhatsAppCta } from "./cta";
import { brand } from "@/lib/config/site";

/**
 * Shared shell for the Phase 1 inner pages. These routes exist so navigation
 * resolves and the SEO structure is in place; their content is written in a
 * later phase.
 */
export function PageShell({
  eyebrow,
  title,
  lead,
  children,
  phaseNote = true,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
  phaseNote?: boolean;
}) {
  return (
    <>
      <header className="border-b border-rule bg-blue-light">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="label-eyebrow text-teal">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem] lg:text-[3rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-slate">
            {lead}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20">
        {children}

        {phaseNote && (
          <div className="mt-4 border border-dashed border-rule bg-blue-light/40 p-7">
            <p className="label-eyebrow text-slate">Content in preparation</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              This page is part of the approved structure and is reserved for
              content that has not yet been written or confirmed. Nothing is
              published here until it has been reviewed.
            </p>
          </div>
        )}

        <div className="mt-12 flex flex-col gap-3 border-t border-rule pt-10 sm:flex-row">
          <BookCta variant="primary" size="lg" />
          <WhatsAppCta variant="outline" size="lg" />
        </div>

        <p className="mt-8 label-eyebrow text-slate">
          {brand.device.join(` ${brand.deviceSeparator} `)}
        </p>
      </div>
    </>
  );
}
