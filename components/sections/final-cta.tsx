import Image from "next/image";
import { ComingSoonNotice } from "@/components/site/coming-soon";
import { doctorImages } from "@/lib/config/images";
import { brand } from "@/lib/config/site";

/**
 * Closing panel. It states the status and the emergency caveat and offers no
 * action: the site carries no contact route while consulting is not open.
 */
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
      <div aria-hidden="true" className="absolute inset-0 bg-navy/70" />

      <div className="relative mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="label-eyebrow text-teal/85">
            {brand.device.join(` ${brand.deviceSeparator} `)}
          </p>
          <h2 className="mt-4 text-[1.75rem] leading-[1.12] text-white sm:mt-5 sm:text-[2.5rem] lg:text-[3rem]">
            Gut, liver and pancreatic medicine.
          </h2>

          <ComingSoonNotice tone="light" className="mt-6 sm:mt-8" />

          <p className="mt-6 text-xs leading-relaxed text-white/45 sm:mt-8">
            Not for emergencies. If your symptoms are severe or worsening
            quickly, contact your local emergency services.
          </p>
        </div>
      </div>
    </section>
  );
}
