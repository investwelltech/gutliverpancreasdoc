import Image from "next/image";
import { WhatsAppCta } from "@/components/site/cta";
import { VideoLoop } from "@/components/site/video-loop";
import { OrganSystem } from "@/components/visuals/organ-system";
import { motion } from "@/lib/config/brand-assets";
import { doctorImages } from "@/lib/config/images";
import { services, siteConfig } from "@/lib/config/site";

/**
 * Hero.
 *
 * MOBILE reads text first, then image: field, headline, name, role, one
 * supporting line, then the photograph, the animation and the consultancy
 * status. Nobody should have to scroll past a full-height portrait to find out
 * whose site this is.
 *
 * DESKTOP is two columns, 55/45. The columns are top-aligned rather than
 * centred: the copy block is shorter than the image column, so starting both
 * at the same line leaves the text sitting against the upper-middle of the
 * photograph with no dead space above it.
 *
 * The order swap is done with `order-*` on the two wrappers, so there is one
 * copy of every element in the DOM.
 */
export function Hero() {
  const img = doctorImages.hero;
  const { brand, doctor } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-warm-white">
      {/* Calm clinical field behind the portrait side. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-blue-light lg:block"
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-y-8 px-5 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-x-14 lg:gap-y-7 lg:px-8 lg:pb-24 lg:pt-20">
        {/* ---------------- Copy ---------------- */}
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <p className="label-eyebrow text-teal">{brand.heroEyebrow}</p>

          <h1 className="type-hero mt-4 max-w-[15ch] text-navy">
            Specialist Care for{" "}
            <span className="italic text-teal-deep">Gut, Liver &amp;</span>{" "}
            Pancreas Health
          </h1>

          <p className="type-name mt-6 font-[family-name:var(--font-display)] text-navy">
            {doctor.name}
          </p>
          <p className="mt-1 text-base text-slate">{doctor.shortTitle}</p>

          <p className="type-lead mt-5 max-w-[62ch] text-slate">
            Specialist assessment and guidance for digestive, liver and
            pancreatic concerns.
          </p>

          <div className="mt-7">
            <WhatsAppCta variant="primary" size="lg" />
          </div>
        </div>

        {/* ---------------- Portrait + medical visual ---------------- */}
        <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {/* Fixed 3:4 box with object-cover: the photograph is cropped, never
              stretched, and object-position keeps the face in frame. */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-sm sm:max-w-[340px] lg:max-w-[420px]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 420px"
              className="object-cover object-[50%_18%]"
            />
          </div>

          {/* Kept deliberately narrower than the portrait so it supports the
              photograph rather than competing with it. */}
          <VideoLoop
            src={motion.medical.src}
            label={motion.medical.label}
            className="mx-auto mt-5 aspect-video w-full max-w-[240px] overflow-hidden sm:max-w-[280px] lg:max-w-[320px]"
            videoClassName="object-contain"
            fallback={
              <div className="mx-auto w-full max-w-[190px]">
                <OrganSystem />
              </div>
            }
          />
        </div>

        {/* Last on mobile, foot of the left column on desktop. */}
        <p className="order-3 text-[0.8125rem] uppercase tracking-[0.14em] text-teal lg:col-start-1 lg:row-start-2">
          {services.sectionTitle} - {services.statusLabel}
        </p>
      </div>
    </section>
  );
}
