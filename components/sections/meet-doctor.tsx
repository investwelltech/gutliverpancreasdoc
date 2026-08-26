import Image from "next/image";
import { Cta } from "@/components/site/cta";
import { Placeholder } from "@/components/site/placeholder";
import { doctorImages } from "@/lib/config/images";
import { siteConfig } from "@/lib/config/site";
import {
  profileIntro,
  profileFields,
  philosophyOfCare,
  specialistAreas,
} from "@/lib/content/doctor-profile";

export function MeetDoctor() {
  const portrait = doctorImages.portrait;
  const { doctor } = siteConfig;

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Image ~40% / content ~60% */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          {/* Portrait */}
          <div className="lg:sticky lg:top-24">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              loading="lazy"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 38vw"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="label-eyebrow text-teal">Meet your specialist</p>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[1.1] text-navy sm:text-[2.5rem]">
              {doctor.name}
            </h2>

            {/* Specialist areas — typography, not badges */}
            {/* Separators sit after each item so a wrapped line never starts
                with a dangling slash. */}
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {specialistAreas.map((area, i) => (
                <li key={area} className="text-[0.8125rem] text-slate">
                  {area}
                  {i < specialistAreas.length - 1 && (
                    <span aria-hidden="true" className="ml-3 text-rule">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-5">
              {profileIntro.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="type-body max-w-2xl text-slate"
                >
                  {p}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-teal pl-6">
              <p className="font-[family-name:var(--font-display)] text-lg italic leading-relaxed text-navy">
                {philosophyOfCare}
              </p>
              <footer className="label-eyebrow mt-3 text-slate">
                Philosophy of care
              </footer>
            </blockquote>

            {/* Editable profile fields */}
            <dl className="mt-10 border-t border-rule">
              {profileFields.map((f) => (
                <div
                  key={f.label}
                  className="grid gap-1.5 border-b border-rule py-4 sm:grid-cols-[190px_1fr] sm:gap-6"
                >
                  <dt className="label-eyebrow pt-1 text-slate">{f.label}</dt>
                  <dd className="text-sm leading-relaxed text-slate">
                    <Placeholder value={f.value} />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9">
              <Cta href="/about" variant="outline" size="md">
                Read full profile
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
