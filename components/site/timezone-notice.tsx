"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

/**
 * The clinic works to India Standard Time, but Google's appointment grid below
 * always renders slots in the VISITOR's own timezone and converts from the
 * clinic calendar itself — it ignores a `ctz` override. This notice therefore
 * describes what the grid actually does, and shows the current time in both
 * places so a patient abroad can sanity-check the slot they pick.
 *
 * The comparison only appears once the client has resolved the timezone; the
 * server cannot know it, and guessing would be worse than a brief absence.
 */
export function TimezoneNotice() {
  const { timezone, timezoneLabel } = siteConfig.booking;
  const [local, setLocal] = useState<{
    zone: string;
    clinicTime: string;
    localTime: string;
  } | null>(null);

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    const fmt = (tz: string) =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: tz,
      }).format(now);

    setLocal({
      zone,
      clinicTime: fmt(timezone),
      localTime: fmt(zone),
    });
  }, [timezone]);

  const differs = local && local.zone !== timezone;

  return (
    <div className="flex items-start gap-3 border-l-2 border-teal bg-blue-light/70 py-4 pl-5 pr-4">
      <Clock
        size={17}
        strokeWidth={1.8}
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-teal"
      />
      <div className="text-sm leading-relaxed text-navy">
        <p>
          <strong className="font-semibold">
            The calendar shows times in your own timezone.
          </strong>{" "}
          The clinic works to {timezoneLabel}, and slots are converted for you
          automatically.
        </p>

        {differs && (
          <p className="mt-1.5 text-slate">
            Your device is set to{" "}
            <span className="font-medium text-navy">
              {local.zone.replace(/_/g, " ")}
            </span>
            . It is currently{" "}
            <span className="font-medium tabular-nums text-navy">
              {local.localTime}
            </span>{" "}
            where you are and{" "}
            <span className="font-medium tabular-nums text-navy">
              {local.clinicTime}
            </span>{" "}
            at the clinic — worth checking the slot you pick falls at a sensible
            hour for both of you.
          </p>
        )}
      </div>
    </div>
  );
}
