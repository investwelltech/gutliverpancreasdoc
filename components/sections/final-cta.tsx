import Image from "next/image";
import { WhatsAppCta } from "@/components/site/cta";
import { SocialLabelledLinks } from "@/components/site/social-links";
import { doctorImages } from "@/lib/config/images";

/**
 * Contact. WhatsApp is the only channel - no email address, no form and no
 * booking. The number itself is never rendered, only the labelled action.
 */
export function FinalCta() {
  const img = doctorImages.endoscopySuite;

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-navy">
      <Image
        src={img.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.13]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/70" />

      <div className="relative mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <p className="label-eyebrow text-teal/85">Contact</p>

        <h2 className="mt-4 max-w-xl text-[1.75rem] leading-[1.12] text-white sm:text-[2.25rem]">
          Get in touch
        </h2>

        <div className="mt-7 flex flex-col items-start gap-6 sm:mt-8 sm:flex-row sm:items-center sm:gap-10">
          <WhatsAppCta variant="onNavy" size="lg" />
          <SocialLabelledLinks className="-ml-3" tone="light" />
        </div>
      </div>
    </section>
  );
}
