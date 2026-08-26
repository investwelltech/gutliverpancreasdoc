import type { Metadata } from "next";
import { ExternalLink, MessageCircle } from "lucide-react";
import { Cta } from "@/components/site/cta";
import { TimezoneNotice } from "@/components/site/timezone-notice";
import { siteConfig, bookingConfirmHref } from "@/lib/config/site";
import { consultationTypes } from "@/lib/content/consultations";

export const metadata: Metadata = {
  title: "Book Consultation",
  description:
    "Check live availability and book an online specialist consultation for gut, liver or pancreatic health.",
};

const { booking, consultation } = siteConfig;

export default function Page() {
  return (
    <>
      <header className="border-b border-rule bg-blue-light">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
          <p className="label-eyebrow text-teal">Book consultation</p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2rem] leading-[1.12] text-navy sm:text-[2.5rem] lg:text-[3rem]">
            Check availability and book
          </h1>
          <p className="type-body mt-5 max-w-2xl text-slate">
            Choose a time that suits you from the live calendar below. Slots
            update automatically, so anything you can select is genuinely free.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          {/* Live availability */}
          <div>
            <TimezoneNotice />

            <div className="mt-6 overflow-hidden border border-rule bg-white">
              <iframe
                src={booking.scheduleEmbedUrl}
                title="Appointment availability calendar"
                loading="lazy"
                className="h-[680px] w-full border-0 sm:h-[720px]"
              />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate">
              The calendar is provided by Google Calendar. If it does not load —
              for example if your browser blocks third-party content — use the
              direct link below instead.
            </p>

            <a
              href={booking.scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-teal underline underline-offset-4 hover:text-teal-deep"
            >
              Open the booking calendar in a new tab
              <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>

          {/* After booking */}
          <aside className="lg:pt-2">
            <h2 className="label-eyebrow text-slate">After you book</h2>

            <ol className="mt-5 border-t border-rule">
              {[
                {
                  n: "01",
                  t: "Google sends your confirmation",
                  d: "You will receive a calendar invitation and email confirmation with the appointment link.",
                },
                {
                  n: "02",
                  t: "Message the clinic on WhatsApp",
                  d: "Send a quick confirmation so your booking is acknowledged directly and you have a channel for any questions.",
                },
                {
                  n: "03",
                  t: "Prepare your reports",
                  d: "Gather recent blood tests, scans and previous consultation notes ahead of the appointment.",
                },
              ].map((s) => (
                <li key={s.n} className="border-b border-rule py-4">
                  <div className="flex gap-3">
                    <span className="font-[family-name:var(--font-display)] text-sm text-teal">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy">{s.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={bookingConfirmHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-navy px-5 text-sm font-medium text-white transition-colors hover:bg-teal-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
              Confirm on WhatsApp
            </a>

            <p className="mt-3 text-xs leading-relaxed text-slate">
              {consultation.feeNote}
            </p>

            <h2 className="label-eyebrow mt-10 text-slate">
              Consultation types
            </h2>
            <ul className="mt-4 space-y-2.5">
              {consultationTypes.map((c) => (
                <li key={c.id} className="text-sm text-slate">
                  {c.name}
                </li>
              ))}
            </ul>
            <Cta
              href="/consultations"
              variant="outline"
              size="sm"
              className="mt-5"
            >
              Compare consultation types
            </Cta>
          </aside>
        </div>

        <div className="mt-12 border-l-2 border-teal bg-blue-light/60 py-5 pl-6 pr-5">
          <p className="max-w-3xl text-sm leading-relaxed text-navy">
            <strong className="font-semibold">Not for emergencies.</strong> If
            you have severe abdominal pain, are vomiting blood, passing black
            stools, or have any symptom that concerns you urgently, do not wait
            for an appointment — contact your local emergency services or attend
            your nearest emergency department.
          </p>
        </div>
      </div>
    </>
  );
}
