import type { Metadata } from "next";
import { MessageCircle, Mail, CalendarDays } from "lucide-react";
import { BookCta, WhatsAppCta, EmailCta } from "@/components/site/cta";
import { Placeholder } from "@/components/site/placeholder";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about an online specialist consultation for gut, liver or pancreatic health.",
};

/**
 * Contact details are deliberately NOT printed on this page. Every route to the
 * clinic is a labelled action whose href comes from siteConfig.
 */
const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail:
      "The fastest way to ask whether an online consultation is right for your situation.",
    action: <WhatsAppCta variant="primary" size="md" withIcon />,
  },
  {
    icon: Mail,
    title: "Email the clinic",
    detail:
      "For longer enquiries, or if you would prefer to write rather than message.",
    action: <EmailCta variant="outline" size="md" />,
  },
  {
    icon: CalendarDays,
    title: "Book a consultation",
    detail:
      "Ready to go ahead? Start the booking process and choose the consultation that fits.",
    action: <BookCta variant="outline" size="md" />,
  },
];

export default function Page() {
  return (
    <>
      <header className="border-b border-rule bg-blue-light">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <p className="label-eyebrow text-teal">Contact</p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem] lg:text-[3rem]">
            Get in touch
          </h1>
          <p className="type-body mt-5 max-w-2xl text-slate">
            For questions about whether an online consultation is right for your
            situation, send a message and it will be answered directly.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-px border border-rule bg-rule sm:grid-cols-3">
          {channels.map((c) => (
            <div
              key={c.title}
              className="flex flex-col bg-white p-7 lg:p-8"
            >
              <c.icon
                size={20}
                strokeWidth={1.6}
                aria-hidden="true"
                className="text-teal"
              />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-xl text-navy">
                {c.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">
                {c.detail}
              </p>
              <div className="mt-auto pt-7">{c.action}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-rule pt-10 sm:grid-cols-2">
          <div>
            <h2 className="label-eyebrow text-slate">Consultation address</h2>
            <p className="mt-3 text-sm text-slate">
              <Placeholder value={siteConfig.contact.addressLine} />
            </p>
          </div>
          <div>
            <h2 className="label-eyebrow text-slate">Response times</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">
              Enquiries are answered during working hours. This service is not
              monitored continuously and must not be used for emergencies.
            </p>
          </div>
        </div>

        <div className="mt-10 border-l-2 border-teal bg-blue-light/60 py-5 pl-6 pr-5">
          <p className="max-w-3xl text-sm leading-relaxed text-navy">
            <strong className="font-semibold">In an emergency,</strong> do not
            use this website or WhatsApp. Contact your local emergency services
            or attend your nearest emergency department.
          </p>
        </div>
      </div>
    </>
  );
}
