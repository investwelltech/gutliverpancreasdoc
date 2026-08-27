import Image from "next/image";
import { ComingSoonBadge } from "@/components/site/coming-soon";
import { doctorImages } from "@/lib/config/images";
import { siteConfig } from "@/lib/config/site";

/**
 * Mobile-first ordering: portrait, then name and headline, then the supporting
 * line and the status. The supporting paragraph and the credibility strip are
 * held back until `sm` — on a phone the portrait plus the headline is the whole
 * message, and the brand animation is already directly above.
 *
 * There are NO call-to-action buttons here. Consulting is not open and the
 * site carries no contact route (see `services` in lib/config/site.ts); the
 * badge states the status and nothing asks the reader to act.
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

      <div className="relative mx-auto grid max-w-[1240px] gap-8 px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
        {/* ---------------- Portrait (first on mobile) ---------------- */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-[280px] sm:max-w-[420px] lg:max-w-none">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 60vw, 44vw"
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </div>

        {/* ---------------- Copy ---------------- */}
        <div className="order-2 lg:order-1">
          <p className="label-eyebrow text-teal">{brand.heroEyebrow}</p>

          <h1 className="type-hero mt-3 text-navy sm:mt-5">
            Specialist Care for{" "}
            <span className="italic text-teal-deep">Gut, Liver &amp;</span>{" "}
            Pancreas Health
          </h1>

          <p className="mt-3 text-sm text-slate sm:mt-4 sm:text-base">
            {doctor.name} - {doctor.shortTitle}
          </p>

          <p className="type-body mt-5 hidden max-w-xl text-slate sm:block">
            Specialist assessment, second opinions and personalised guidance for
            digestive, liver and pancreatic concerns.
          </p>

          <ComingSoonBadge className="mt-5" />

          {/* Understated credibility strip - typography, not badges. */}
          <dl className="mt-8 hidden max-w-lg grid-cols-3 gap-4 border-t border-rule pt-6 sm:mt-10 sm:grid">
            {[
              ["Gut", "Digestive"],
              ["Liver", "Hepatology"],
              ["Pancreas", "Pancreatic"],
            ].map(([term, detail]) => (
              <div key={term}>
                <dt className="font-[family-name:var(--font-display)] text-lg text-navy">
                  {term}
                </dt>
                <dd className="mt-0.5 text-[0.6875rem] uppercase tracking-[0.12em] text-slate">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
