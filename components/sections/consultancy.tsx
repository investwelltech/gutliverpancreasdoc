import { Section, SectionHeading } from "@/components/site/section";
import { ComingSoonNotice } from "@/components/site/coming-soon";
import { services } from "@/lib/config/site";

/**
 * Private consultancy - a status, not an offer.
 *
 * There is no booking button, no appointment grid and no document upload. The
 * consultation-type cards that used to sit here were removed with them; do not
 * re-introduce any of it without explicit approval.
 */
export function Consultancy() {
  return (
    <Section id="consultancy" tone="white">
      <SectionHeading eyebrow="Consultancy" title={services.sectionTitle} />
      <ComingSoonNotice className="mt-6 sm:mt-8" />
    </Section>
  );
}
