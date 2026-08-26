import { Hero } from "@/components/sections/hero";
import { SpecialistFocus } from "@/components/sections/specialist-focus";
import { MeetDoctor } from "@/components/sections/meet-doctor";
import { Reasons } from "@/components/sections/reasons";
import { Journey } from "@/components/sections/journey";
import { ConsultationTypes } from "@/components/sections/consultation-types";
import { Reports } from "@/components/sections/reports";
import { Academic } from "@/components/sections/academic";
import { Resources } from "@/components/sections/resources";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { BrandBand } from "@/components/sections/brand-band";

/**
 * Section ground rhythm (see components/site/section.tsx):
 *   hero        warm white
 *   focus       clinical blue   ← anatomical animation
 *   doctor      white
 *   reasons     navy            ← the one dark moment
 *   journey     warm white
 *   consults    clinical blue
 *   reports     white
 *   academic    clinical blue
 *   resources   warm white
 *   faq         white
 *   final CTA   navy photograph
 */
export default function Home() {
  return (
    <>
      <Hero />
      <SpecialistFocus />
      <MeetDoctor />
      <Reasons />
      <Journey />
      <ConsultationTypes />
      <Reports />
      <Academic />
      <Resources />
      <Faq />
      <FinalCta />
      <BrandBand />
    </>
  );
}
