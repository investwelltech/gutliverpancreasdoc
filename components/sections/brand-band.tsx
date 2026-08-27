import Image from "next/image";
import { VideoLoop } from "@/components/site/video-loop";
import { motion, logo } from "@/lib/config/brand-assets";

/**
 * Opening brand moment — the first thing on the homepage, directly under the
 * header. The supplied logo animation plays here.
 *
 * It sits at the top rather than in the sticky header (which is on screen the
 * whole visit) and rather than at the foot of the page, where it was before.
 * Kept deliberately small on mobile (260px wide, so ~146px tall at 16:9) so it
 * never pushes the hero headline below the fold.
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
      <div className="mx-auto flex max-w-[1240px] flex-col items-center px-5 py-5 sm:px-8 sm:py-10">
        <VideoLoop
          src={motion.logo.src}
          poster={motion.logo.poster}
          label={motion.logo.label}
          className="aspect-video w-full max-w-[260px] overflow-hidden sm:max-w-[440px] lg:max-w-[520px]"
          videoClassName="object-contain"
          fallback={
            <Image
              src={logo.stacked.src}
              alt={logo.stacked.alt}
              width={logo.stacked.width}
              height={logo.stacked.height}
              priority
              className="mx-auto h-auto w-full max-w-[220px] sm:max-w-[320px]"
            />
          }
        />
      </div>
    </section>
  );
}
