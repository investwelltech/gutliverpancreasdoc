import Image from "next/image";
import { Cta, WhatsAppCta } from "@/components/site/cta";
import { ComingSoonNotice } from "@/components/site/coming-soon";
import { doctorImages } from "@/lib/config/images";
import { brand } from "@/lib/config/site";

/**
 * Closing panel. Nothing here books anything — the two routes offered are the
 * two that work today, with the "coming soon" status stated above them.
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
            Have a question about your gut, liver or pancreas?
          </h2>
          <p className="mt-4 hidden max-w-xl text-[1.0625rem] leading-relaxed text-white/70 sm:mt-6 sm:block">
            Send a message and it will be answered directly. You will also be
            told as soon as consultations open.
          </p>

          <ComingSoonNotice tone="light" className="mt-6 sm:mt-8" />

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <WhatsAppCta variant="onNavy" size="lg" withIcon>
              Enquire on WhatsApp
            </WhatsAppCta>
            <Cta href="/contact" variant="onNavyOutline" size="lg">
              Contact
            </Cta>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-white/45 sm:mt-8">
            Not for emergencies. If your symptoms are severe or worsening
            quickly, contact your local emergency services.
          </p>
        </div>
      </div>
    </section>
  );
}
