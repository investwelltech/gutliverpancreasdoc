import { Clock } from "lucide-react";
import { services } from "@/lib/config/site";
import { cn } from "@/lib/utils";

/**
 * Consulting is not open yet. Every place that would otherwise carry a booking
 * action carries one of these instead, and both read their copy from
 * `services` in lib/config/site.ts — so when consulting opens, the wording is
 * changed in one file.
 */

/** Compact inline marker — sits beside a heading or inside a card. */
export function ComingSoonBadge({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em]",
        tone === "dark"
          ? "border-teal/35 bg-teal/[0.06] text-teal"
          : "border-white/30 text-white/75",
        className
      )}
    >
      <Clock size={11} strokeWidth={2} aria-hidden="true" />
      {services.statusLabel}
    </span>
  );
}

/**
 * Section-level notice. `detail` is hidden below `sm` on purpose — the status
 * line alone is what a phone reader needs.
 */
export function ComingSoonNotice({
  tone = "dark",
  detail = true,
  className,
}: {
  tone?: "dark" | "light";
  detail?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-l-2 py-4 pl-5",
        tone === "dark"
          ? "border-teal bg-blue-light/60"
          : "border-white/40 bg-white/[0.06]",
        className
      )}
    >
      <p
        className={cn(
          "font-[family-name:var(--font-display)] text-lg",
          tone === "dark" ? "text-navy" : "text-white"
        )}
      >
        {services.statusLine}
      </p>
      {detail && (
        <p
          className={cn(
            "mt-2 hidden max-w-xl text-sm leading-relaxed sm:block",
            tone === "dark" ? "text-slate" : "text-white/65"
          )}
        >
          {services.statusNote}
        </p>
      )}
    </div>
  );
}
