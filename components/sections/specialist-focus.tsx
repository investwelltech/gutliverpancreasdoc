import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrganSystem } from "@/components/visuals/organ-system";
import { VideoLoop } from "@/components/site/video-loop";
import { motion } from "@/lib/config/brand-assets";
import { expertiseAreas } from "@/lib/content/expertise";
import { cn } from "@/lib/utils";

/** Text entries pulse in step with the SVG cycle: gut → liver → pancreas. */
const SYNC_DELAY: Record<string, string> = {
  gut: "organ-delay-0",
  liver: "organ-delay-1",
  pancreas: "organ-delay-2",
};

export function SpecialistFocus() {
  return (
    // Warm-white ground (not clinical blue) so the supplied animation, which is
    // authored on the same #FAF9F5, blends instead of reading as a plate. A
    // hairline keeps it separated from the hero above.
    <section
      id="specialist-focus"
      className="border-t border-rule bg-warm-white"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-20 lg:py-24">
        <p className="label-eyebrow text-teal">Our specialist focus</p>

        <div className="mt-6 grid gap-8 sm:mt-10 sm:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          {/* Supplied medical animation. Under reduced motion the SVG diagram
              is shown instead and the video is never downloaded. */}
          <div className="mx-auto w-full max-w-[460px] lg:max-w-none">
            <VideoLoop
              src={motion.medical.src}
              label={motion.medical.label}
              className="aspect-video w-full overflow-hidden"
              videoClassName="object-contain"
              fallback={
                <div className="mx-auto w-full max-w-[360px]">
                  <OrganSystem />
                </div>
              }
            />
          </div>

          {/* Editorial entries — not cards */}
          <div>
            <h2 className="type-h2 max-w-xl text-navy">
              Three connected systems, assessed together
            </h2>
            <p className="mt-4 hidden max-w-xl text-[0.9375rem] leading-relaxed text-slate sm:block">
              Gut, liver and pancreatic conditions frequently overlap. Reviewing
              them as one system — rather than in isolation — is what a focused
              specialist opinion offers.
            </p>

            <div className="mt-6 divide-y divide-rule border-t border-rule sm:mt-10">
              {expertiseAreas.map((area) => (
                <Link
                  key={area.id}
                  href={area.href}
                  className="group flex items-baseline gap-4 py-4 transition-colors hover:bg-white/70 sm:gap-7 sm:py-6"
                >
                  <span
                    className={cn(
                      "organ-label w-6 shrink-0 font-[family-name:var(--font-display)] text-sm text-teal",
                      SYNC_DELAY[area.id]
                    )}
                    aria-hidden="true"
                  >
                    {area.numeral}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-[family-name:var(--font-display)] text-xl text-navy sm:text-[1.375rem]">
                      {area.label}
                    </span>
                    <span className="mt-1.5 hidden text-sm leading-relaxed text-slate sm:block">
                      {area.focusLine}
                    </span>
                  </span>

                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-teal transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
