import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { expertiseAreas } from "@/lib/content/expertise";

/**
 * Three expertise cards, one per organ system - stacked on mobile, three
 * across from `sm`. One short line each; the detail lives on the linked page.
 */
export function SpecialistFocus() {
  return (
    <Section id="expertise" tone="warm" className="border-t border-rule">
      <SectionHeading eyebrow="Expertise" title="Areas of specialist focus" />

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
        {expertiseAreas.map((area) => (
          <Link
            key={area.id}
            href={area.href}
            className="group flex min-h-[112px] flex-col justify-between border border-rule bg-white p-6 transition-colors duration-200 hover:border-teal/40 hover:bg-blue-light/50"
          >
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-navy">
                {area.label}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate">
                {area.cardLine}
              </p>
            </div>

            <ArrowRight
              size={17}
              strokeWidth={1.6}
              aria-hidden="true"
              className="mt-5 text-teal transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
