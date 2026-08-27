import { ComingSoonNotice } from "./coming-soon";
import { brand } from "@/lib/config/site";

/**
 * Shared shell for the inner portfolio pages. These routes exist so navigation
 * resolves and the structure is in place; their content is written later.
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
  /** Optional — a page with nothing verified to say simply omits it. */
  lead?: string;
  children?: React.ReactNode;
  phaseNote?: boolean;
}) {
  return (
    <>
      <header className="border-b border-rule bg-blue-light">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-20 lg:py-24">
          <p className="label-eyebrow text-teal">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem] lg:text-[3rem]">
            {title}
          </h1>
          {lead && (
            <p className="mt-4 hidden max-w-2xl text-[1.0625rem] leading-relaxed text-slate sm:mt-5 sm:block">
              {lead}
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-20">
        {children}

        {phaseNote && (
          <div className="mt-4 border border-dashed border-rule bg-blue-light/40 p-7">
            <p className="label-eyebrow text-slate">More to follow</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              This section of the portfolio is still being written. It will be
              filled in as material is prepared.
            </p>
          </div>
        )}

        <ComingSoonNotice className="mt-12" />

        <p className="mt-10 border-t border-rule pt-8 label-eyebrow text-slate">
          {brand.device.join(` ${brand.deviceSeparator} `)}
        </p>
      </div>
    </>
  );
}
