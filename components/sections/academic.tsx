import Image from "next/image";
import { Section, SectionHeading } from "@/components/site/section";
import { doctorImages } from "@/lib/config/images";
import { academicStrands } from "@/lib/content/doctor-profile";

/**
 * Academic and conference work. This matters on a portfolio, so the LTSICON
 * poster photograph is kept at a readable size on mobile rather than being
 * shrunk into a side column.
 */
export function Academic() {
  const img = doctorImages.conference;

  return (
    <Section id="academic" tone="warm">
      <SectionHeading eyebrow="Academic work" title="Conference and academic engagement" />

      <div className="mt-8 grid gap-7 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 88vw, 46vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-3 text-[0.9375rem] text-slate">
            LTSICON 2025, New Delhi.
          </figcaption>
        </figure>

        <div>
          {academicStrands.map((s) => (
            <div key={s.label}>
              <h3 className="label-eyebrow text-slate">{s.label}</h3>
              <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-slate">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
