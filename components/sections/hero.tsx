import Image from "next/image";
import { BookCta, Cta, WhatsAppCta } from "@/components/site/cta";
import { doctorImages } from "@/lib/config/images";
import { siteConfig } from "@/lib/config/site";

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-px w-[46%] bg-rule lg:block"
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pb-16 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        {/* ---------------- Copy ---------------- */}
        <div className="order-1">
          <p className="label-eyebrow text-teal">{brand.heroEyebrow}</p>

          <h1 className="type-hero mt-5 text-navy">
            Specialist Care for{" "}
            <span className="italic text-teal-deep">Gut, Liver &amp;</span>{" "}
            Pancreas Health
          </h1>

          <p className="type-body mt-6 max-w-xl text-slate">
            Expert specialist consultation, second opinions and personalised
            guidance for digestive, liver and pancreatic concerns.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BookCta variant="primary" size="lg" />
            <Cta href="/upload-reports" variant="outline" size="lg">
              Send Your Reports
            </Cta>
            <WhatsAppCta variant="quiet" size="lg" withIcon />
          </div>

          {/* Understated credibility strip — typography, not badges. */}
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-rule pt-6">
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

        {/* ---------------- Portrait ---------------- */}
        <div className="order-2">
          <div className="relative mx-auto max-w-[420px] lg:max-w-none">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 44vw"
              className="h-auto w-full object-cover object-top"
            />
          </div>

          <p className="mt-4 text-center text-xs text-slate lg:text-left">
            {doctor.name} — {doctor.shortTitle}
          </p>
        </div>
      </div>
    </section>
  );
}
