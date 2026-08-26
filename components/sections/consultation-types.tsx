import { Section, SectionHeading } from "@/components/site/section";
import { BookCta } from "@/components/site/cta";
import { consultationTypes } from "@/lib/content/consultations";
import { pricing } from "@/lib/config/site";

export function ConsultationTypes() {
  return (
    <Section id="consultations" tone="clinical">
      <SectionHeading
        eyebrow="Consultation types"
        title="Choose the consultation that matches your situation"
        lead="Each option is built around a different starting point. If you are unsure which applies, the initial consultation is the right place to begin."
      />

      {/* A decision aid, not four price cards */}
      <div className="mt-14 grid gap-px bg-navy/12 sm:grid-cols-2">
        {consultationTypes.map((c) => (
          <article
            key={c.id}
            className="flex flex-col bg-blue-light p-7 lg:p-9"
          >
            <h3 className="font-[family-name:var(--font-display)] text-[1.375rem] leading-snug text-navy">
              {c.name}
            </h3>

            <p className="mt-4 border-l-2 border-teal pl-4 text-sm leading-relaxed text-navy">
              {c.suitableFor}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate">
              {c.detail}
            </p>

            <div className="mt-auto pt-7">
              {pricing.displayPricing && c.price ? (
                <p className="font-[family-name:var(--font-display)] text-lg text-navy">
                  {c.price}
                </p>
              ) : (
                <p className="text-xs italic text-slate">{pricing.feeNote}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <BookCta variant="primary" size="lg" />
      </div>
    </Section>
  );
}
