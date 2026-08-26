import Image from "next/image";
import { Placeholder } from "@/components/site/placeholder";
import { doctorImages } from "@/lib/config/images";
import {
  academicStrands,
  experience,
  education,
} from "@/lib/content/doctor-profile";

/**
 * Training, clinical practice and academic engagement.
 * Everything here is sourced from the doctor's own profile; unconfirmed
 * strands stay as visible placeholders.
 */
export function Academic() {
  const img = doctorImages.conference;

  return (
    <section id="academic" className="bg-blue-light">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <p className="label-eyebrow text-teal">
          Training, practice &amp; academic engagement
        </p>
        <h2 className="type-h2 mt-4 max-w-2xl text-navy">
          A specialist career built on general medicine
        </h2>
        <p className="type-body mt-5 max-w-2xl text-slate">
          Gastroenterology training follows several years of internal medicine
          practice — which is what makes it possible to read a digestive or
          liver problem in the context of the whole patient.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            {/* Experience */}
            <h3 className="label-eyebrow text-slate">Clinical experience</h3>
            <ol className="mt-5 border-t border-rule">
              {experience.map((e) => (
                <li
                  key={`${e.role}-${e.period}`}
                  className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[150px_1fr] sm:gap-6"
                >
                  <span className="pt-0.5 font-[family-name:var(--font-sans)] text-xs tabular-nums text-slate">
                    {e.period}
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-display)] text-lg leading-snug text-navy">
                      {e.role}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate">
                      {e.org} · {e.location}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-slate">
                      {e.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            {/* Education */}
            <h3 className="label-eyebrow mt-12 text-slate">Education</h3>
            <ol className="mt-5 border-t border-rule">
              {education.map((ed) => (
                <li
                  key={ed.award}
                  className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[150px_1fr] sm:gap-6"
                >
                  <span className="pt-0.5 text-xs tabular-nums text-slate">
                    {ed.period}
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-display)] text-lg leading-snug text-navy">
                      {ed.award}
                      {ed.inProgress && (
                        <span className="ml-2 align-middle text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-teal">
                          In training
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate">
                      {ed.org}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <figure>
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 38vw"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate">
                Case report presentation, LTSICON 2025 — 8th Annual Conference
                of the Liver Transplantation Society of India, New Delhi.
              </figcaption>
            </figure>

            <h3 className="label-eyebrow mt-10 text-slate">
              Academic engagement
            </h3>
            <dl className="mt-5 border-t border-rule">
              {academicStrands.map((s) => (
                <div
                  key={s.label}
                  className="grid gap-1.5 border-b border-rule py-4 sm:grid-cols-[110px_1fr] sm:gap-5"
                >
                  <dt className="label-eyebrow pt-1 text-slate">{s.label}</dt>
                  <dd className="text-sm leading-relaxed text-slate">
                    <Placeholder value={s.value} />
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
