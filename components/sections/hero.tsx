import Image from "next/image";
import { WhatsAppCta } from "@/components/site/cta";
import { ComingSoonBadge } from "@/components/site/coming-soon";
import { VideoLoop } from "@/components/site/video-loop";
import { OrganSystem } from "@/components/visuals/organ-system";
import { motion } from "@/lib/config/brand-assets";
import { doctorImages } from "@/lib/config/images";
import { siteConfig } from "@/lib/config/site";

/**
 * Mobile-first hero. The order on a phone is the order in the brief:
 * portrait, medical animation, field, name, headline, one short line, one
 * action, then the quiet consultancy status.
 *
 * The Gut/Liver/Pancreas animation lives here rather than further down the
 * page so the medical visual is on screen early. Under reduced motion the SVG
 * diagram is shown and the video is never fetched.
 */
export function Hero() {
  const img = doctorImages.hero;
  const { brand, doctor } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-warm-white">
      {/* Calm clinical field behind the portrait side. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] bg-blue-light lg:block"
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-8 px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        {/* ---------------- Portrait + medical visual ---------------- */}
        <div className="order-1 lg:order-2">
          <div className="mx-auto max-w-[300px] sm:max-w-[380px] lg:max-w-none">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 44vw"
              className="h-auto w-full object-cover object-top"
            />
          </div>

          <VideoLoop
            src={motion.medical.src}
            label={motion.medical.label}
            className="mx-auto mt-4 aspect-video w-full max-w-[300px] overflow-hidden sm:max-w-[380px] lg:max-w-none"
            videoClassName="object-contain"
            fallback={
              <div className="mx-auto w-full max-w-[220px]">
                <OrganSystem />
              </div>
            }
          />
        </div>

        {/* ---------------- Copy ---------------- */}
        <div className="order-2 lg:order-1">
          <p className="label-eyebrow text-teal">{brand.heroEyebrow}</p>

          <p className="mt-3 font-[family-name:var(--font-display)] text-xl text-navy sm:text-2xl">
            {doctor.name}
          </p>

          <h1 className="type-hero mt-2 text-navy">
            Specialist Care for{" "}
            <span className="italic text-teal-deep">Gut, Liver &amp;</span>{" "}
            Pancreas Health
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
            {doctor.shortTitle}, Max Super Speciality Hospital, Saket.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4">
            <WhatsAppCta variant="primary" size="lg" />
            <ComingSoonBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
