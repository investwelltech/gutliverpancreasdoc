import { Clock } from "lucide-react";
import { services } from "@/lib/config/site";
import { cn } from "@/lib/utils";

/**
 * Consultancy is not open yet. Both of these read their copy from `services`
 * in lib/config/site.ts, so when it opens the wording changes in one file.
 */

/** Quiet inline marker - used beside the hero action. */
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
        "inline-flex items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em]",
        tone === "dark" ? "text-teal" : "text-white/70",
        className
      )}
    >
      <Clock size={12} strokeWidth={2} aria-hidden="true" />
      {services.statusLabel}
    </span>
  );
}

/** Section-level notice: the status line and nothing else. */
export function ComingSoonNotice({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
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
    </div>
  );
}
