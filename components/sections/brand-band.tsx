import Image from "next/image";
import { VideoLoop } from "@/components/site/video-loop";
import { motion, logo } from "@/lib/config/brand-assets";

/**
 * Opening brand moment — the first thing on the homepage, directly under the
 * header. The supplied logo animation plays here.
 *
 * It sits at the top rather than in the sticky header (which is on screen the
 * whole visit) and rather than at the foot of the page, where it was before.
 * Kept deliberately small at every width so it never pushes the hero copy down
 * the page: the brief asks that the doctor's name and speciality be legible
 * within the first screen, and the header already carries the wordmark.
 *
 * Under reduced motion the static stacked lockup is shown and the ~1.7 MB
 * video is never fetched.
 */
export function BrandBand() {
  return (
    <section
      aria-label="Practice brand"
      className="border-b border-rule bg-warm-white"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center px-5 py-4 sm:px-8 sm:py-6">
        <VideoLoop
          src={motion.logo.src}
          poster={motion.logo.poster}
          label={motion.logo.label}
          className="aspect-video w-full max-w-[220px] overflow-hidden sm:max-w-[300px] lg:max-w-[340px]"
          videoClassName="object-contain"
          fallback={
            <Image
              src={logo.stacked.src}
              alt={logo.stacked.alt}
              width={logo.stacked.width}
              height={logo.stacked.height}
              priority
              sizes="(max-width: 640px) 180px, 260px"
              className="mx-auto h-auto w-full max-w-[180px] sm:max-w-[260px]"
            />
          }
        />
      </div>
    </section>
  );
}
