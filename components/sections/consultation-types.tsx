import { Section, SectionHeading } from "@/components/site/section";
import { ComingSoonNotice } from "@/components/site/coming-soon";
import { consultationTypes } from "@/lib/content/consultations";
import { pricing } from "@/lib/config/site";

/**
 * The consultation types are described here as an outline of what is being
 * prepared — NOT as something bookable. There is no booking flow and no
 * contact route, so the section closes on the "coming soon" notice alone.
 * Fees are not published and no fee note is shown.
 *
 * On mobile only the name and the "suitable for" line are shown; the longer
 * `detail` paragraph appears from `sm` up.
 */
export function ConsultationTypes() {
  return (
    <Section id="consultations" tone="clinical">
      <SectionHeading
        eyebrow="Consultation services"
        title="The consultations being prepared"
        lead="Each option is built around a different starting point. If you are unsure which applies, the initial consultation is the right place to begin."
      />

      <div className="mt-8 grid gap-px bg-navy/12 sm:mt-14 sm:grid-cols-2">
        {consultationTypes.map((c) => (
          <article
            key={c.id}
            className="flex flex-col bg-blue-light p-5 sm:p-7 lg:p-9"
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-navy sm:text-[1.375rem]">
              {c.name}
            </h3>

            <p className="mt-3 border-l-2 border-teal pl-4 text-sm leading-relaxed text-navy sm:mt-4">
              {c.suitableFor}
            </p>

            <p className="mt-4 hidden text-sm leading-relaxed text-slate sm:block">
              {c.detail}
            </p>

            {/* The fee note is stated once below the grid, not on every card. */}
            {pricing.displayPricing && c.price && (
              <div className="mt-auto pt-5 sm:pt-7">
                <p className="font-[family-name:var(--font-display)] text-lg text-navy">
                  {c.price}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      <ComingSoonNotice className="mt-8 sm:mt-10" />
    </Section>
  );
}
