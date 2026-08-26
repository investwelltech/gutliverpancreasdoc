import Image from "next/image";
import { Lock, ShieldCheck, FileText, Check } from "lucide-react";
import { SectionHeading } from "@/components/site/section";
import { reportTypes, privacyAssurances, uploadEnabled } from "@/lib/content/reports";
import { preparationChecklist } from "@/lib/content/reasons";
import { doctorImages } from "@/lib/config/images";

export function Reports() {
  const img = doctorImages.procedureRoom;

  return (
    <section id="upload-reports" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Prepare &amp; upload reports"
          title="Arrive with your results already reviewed"
          lead="Sharing reports in advance means the consultation is spent interpreting them with you, rather than collecting them from you."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Upload preview */}
          <div>
            <h3 className="label-eyebrow text-slate">
              Documents you will be able to share
            </h3>

            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {reportTypes.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2.5 border-b border-rule py-2 text-sm text-slate"
                >
                  <FileText
                    size={15}
                    className="shrink-0 text-teal"
                    strokeWidth={1.7}
                  />
                  {t}
                </li>
              ))}
            </ul>

            {/* Dropzone preview — deliberately inert in Phase 1 */}
            <div
              aria-disabled="true"
              className="mt-8 border border-dashed border-navy/25 bg-blue-light/60 px-6 py-10 text-center"
            >
              <Lock
                size={22}
                strokeWidth={1.6}
                className="mx-auto text-teal"
              />
              <p className="mt-4 font-[family-name:var(--font-display)] text-lg text-navy">
                Secure upload opens with online booking
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate">
                {uploadEnabled
                  ? "Drag your files here, or browse to select them."
                  : "This is a preview of the upload step. Secure storage is not yet active, so please do not send medical documents through this website yet."}
              </p>
              <p className="mt-4 text-xs text-slate">
                PDF, JPG and PNG · up to 20 MB per file
              </p>
            </div>
          </div>

          {/* Privacy + preparation */}
          <div>
            <div className="border-l-2 border-success pl-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  size={18}
                  className="text-success"
                  strokeWidth={1.8}
                />
                <h3 className="label-eyebrow text-navy">
                  How your documents are protected
                </h3>
              </div>
              <dl className="mt-5 space-y-5">
                {privacyAssurances.map((a) => (
                  <div key={a.title}>
                    <dt className="text-sm font-semibold text-navy">
                      {a.title}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate">
                      {a.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="label-eyebrow text-slate">
                What to prepare before booking
              </h3>
              <ul className="mt-5 space-y-2.5">
                {preparationChecklist.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-slate">
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-teal"
                      strokeWidth={2}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 1024px) 92vw, 42vw"
              className="mt-10 h-56 w-full object-cover lg:h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
