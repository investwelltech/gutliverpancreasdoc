import Image from "next/image";
import { doctorImages } from "@/lib/config/images";
import { siteConfig } from "@/lib/config/site";
import {
  profileFields,
  specialistAreas,
} from "@/lib/content/doctor-profile";

/**
 * "About Dr. Pratik Agrawal" - the navy suit portrait and a short set of facts.
 * Career history is deliberately NOT repeated here; it appears once, in the
 * Experience section below.
 *
 * MOBILE order is heading, specialisms, photograph, then the credential list.
 * DESKTOP puts the photograph beside the copy. As in the hero, the swap is done
 * with `order-*` and explicit grid placement so nothing is duplicated.
 */
export function MeetDoctor() {
  const portrait = doctorImages.portrait;
  const { doctor } = siteConfig;

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid gap-y-7 sm:gap-y-9 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-start lg:gap-x-16">
          {/* Heading and specialisms - first on mobile, right column on desktop. */}
          <div className="order-1 lg:col-start-2 lg:row-start-1">
            <p className="label-eyebrow text-teal">About</p>

            <h2 className="type-h2 mt-3 font-[family-name:var(--font-display)] text-navy sm:mt-4">
              {doctor.name}
            </h2>

            {/* Specialisms - typography, not badges. Separators sit after each
                item so a wrapped line never starts with a dangling slash. */}
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {specialistAreas.map((area, i) => (
                <li key={area} className="text-base text-slate">
                  {area}
                  {i < specialistAreas.length - 1 && (
                    <span aria-hidden="true" className="ml-3 text-rule">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Photograph - second on mobile, left column spanning both rows. */}
          <div className="order-2 mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:max-w-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 34vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>

          {/* Credentials - last on mobile, under the heading on desktop. */}
          <div className="order-3 lg:col-start-2 lg:row-start-2">
            <dl className="border-t border-rule">
              {profileFields.map((f) => (
                <div
                  key={f.label}
                  className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="label-eyebrow pt-1 text-slate">{f.label}</dt>
                  <dd className="max-w-[62ch] text-base leading-relaxed text-slate">
                    {f.value}
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
