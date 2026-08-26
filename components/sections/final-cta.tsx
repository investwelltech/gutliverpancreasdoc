import Image from "next/image";
import { BookCta, Cta, WhatsAppCta } from "@/components/site/cta";
import { doctorImages } from "@/lib/config/images";
import { brand } from "@/lib/config/site";

export function FinalCta() {
  const img = doctorImages.endoscopySuite;

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={img.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.13]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-navy/70"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="label-eyebrow text-teal/85">
            {brand.device.join(` ${brand.deviceSeparator} `)}
          </p>
          <h2 className="mt-5 text-[2rem] leading-[1.12] text-white sm:text-[2.5rem] lg:text-[3rem]">
            Bring your questions, and your reports.
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/70">
            Book an online consultation for a considered specialist opinion on
            your gut, liver or pancreatic health — or send a message first if
            you would like to check whether it is the right fit.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookCta variant="onNavy" size="lg" />
            <Cta href="/upload-reports" variant="onNavyOutline" size="lg">
              Send Your Reports
            </Cta>
            <WhatsAppCta variant="onNavyOutline" size="lg" />
          </div>

          <p className="mt-8 text-xs leading-relaxed text-white/45">
            Not for emergencies. If your symptoms are severe or worsening
            quickly, contact your local emergency services.
          </p>
        </div>
      </div>
    </section>
  );
}
