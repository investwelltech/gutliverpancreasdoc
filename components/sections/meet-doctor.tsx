import Image from "next/image";
import { Placeholder } from "@/components/site/placeholder";
import { doctorImages } from "@/lib/config/images";
import { siteConfig } from "@/lib/config/site";
import {
  profileFields,
  specialistAreas,
} from "@/lib/content/doctor-profile";

export function MeetDoctor() {
  const portrait = doctorImages.portrait;
  const { doctor } = siteConfig;

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-20 lg:py-24">
        {/* Image ~40% / content ~60% */}
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          {/* Portrait */}
          <div className="mx-auto w-full max-w-[300px] sm:max-w-none lg:sticky lg:top-24">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              loading="lazy"
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 70vw, 38vw"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="label-eyebrow text-teal">Meet your specialist</p>

            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[1.75rem] leading-[1.1] text-navy sm:mt-4 sm:text-[2.5rem]">
              {doctor.name}
            </h2>

            {/* Specialist areas - typography, not badges */}
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

            {/* The profile is the sourced fields - the introduction and the
                philosophy quotation were removed with the consulting copy. */}
            <dl className="mt-6 border-t border-rule sm:mt-8">
              {profileFields.map((f) => (
                <div
                  key={f.label}
                  className="grid gap-1 border-b border-rule py-3.5 sm:grid-cols-[190px_1fr] sm:gap-6 sm:py-4"
                >
                  <dt className="label-eyebrow pt-1 text-slate">{f.label}</dt>
                  <dd className="text-sm leading-relaxed text-slate">
                    <Placeholder value={f.value} />
                  </dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </section>
  );
}
