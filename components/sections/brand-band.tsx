import Image from "next/image";
import { VideoLoop } from "@/components/site/video-loop";
import { motion, logo } from "@/lib/config/brand-assets";

/**
 * Quiet brand sign-off between the closing CTA and the footer.
 *
 * The supplied logo animation plays here, where a looping mark is a considered
 * moment rather than a permanent distraction — deliberately NOT in the sticky
 * header, which is on screen the whole visit. Under reduced motion the static
 * stacked lockup is shown and the video is never fetched.
 */
export function BrandBand() {
  return (
    <section
      aria-label="Practice brand"
      className="border-t border-rule bg-warm-white"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center px-5 py-14 sm:px-8 sm:py-16">
        <VideoLoop
          src={motion.logo.src}
          poster={motion.logo.poster}
          label={motion.logo.label}
          className="aspect-video w-full max-w-[420px] overflow-hidden sm:max-w-[520px]"
          videoClassName="object-contain"
          fallback={
            <Image
              src={logo.stacked.src}
              alt={logo.stacked.alt}
              width={logo.stacked.width}
              height={logo.stacked.height}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-[320px]"
            />
          }
        />
      </div>
    </section>
  );
}
