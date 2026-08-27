import { BrandBand } from "@/components/sections/brand-band";
import { Hero } from "@/components/sections/hero";
import { SpecialistFocus } from "@/components/sections/specialist-focus";
import { MeetDoctor } from "@/components/sections/meet-doctor";
import { Reasons } from "@/components/sections/reasons";
import { ConsultationTypes } from "@/components/sections/consultation-types";
import { Academic } from "@/components/sections/academic";
import { Resources } from "@/components/sections/resources";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

/**
 * This is a PORTFOLIO site. There is no booking flow and no report upload —
 * the six-step booking journey and the upload section were removed with them.
 * Consulting is presented as "coming soon" (see `services` in lib/config/site).
 *
 * Section ground rhythm (see components/site/section.tsx):
 *   brand band  warm white      ← supplied logo animation, opens the page
 *   hero        warm white
 *   focus       warm white      ← anatomical animation
 *   doctor      white
 *   reasons     navy            ← the one dark moment
 *   consults    clinical blue   ← carries the "coming soon" notice
 *   academic    clinical blue
 *   resources   warm white
 *   faq         white
 *   final CTA   navy photograph
 */
export default function Home() {
  return (
    <>
      <BrandBand />
      <Hero />
      <SpecialistFocus />
      <MeetDoctor />
      <Reasons />
      <ConsultationTypes />
      <Academic />
      <Resources />
      <Faq />
      <FinalCta />
    </>
  );
}
