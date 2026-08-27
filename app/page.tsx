import { BrandBand } from "@/components/sections/brand-band";
import { Hero } from "@/components/sections/hero";
import { SpecialistFocus } from "@/components/sections/specialist-focus";
import { MeetDoctor } from "@/components/sections/meet-doctor";
import { Experience } from "@/components/sections/experience";
import { Academic } from "@/components/sections/academic";
import { Consultancy } from "@/components/sections/consultancy";
import { FinalCta } from "@/components/sections/final-cta";

/**
 * A mobile-first professional portfolio, not a consultation product.
 *
 * Order (this is the brief's order, and the mobile reading order):
 *   brand band   warm white   - logo animation
 *   hero         warm white   - portrait + medical animation, one action
 *   expertise    warm white   - three organ cards
 *   about        white        - navy suit portrait, short fact list
 *   experience   clinical     - clinical experience and education timelines
 *   academic     warm white   - LTSICON conference work
 *   consultancy  white        - "coming soon", no booking of any kind
 *   contact      navy         - WhatsApp and social profiles
 *
 * Deliberately absent: reasons-to-consult, consultation types, resources,
 * FAQ, booking, appointment calendar and document upload.
 */
export default function Home() {
  return (
    <>
      <BrandBand />
      <Hero />
      <SpecialistFocus />
      <MeetDoctor />
      <Experience />
      <Academic />
      <Consultancy />
      <FinalCta />
    </>
  );
}
