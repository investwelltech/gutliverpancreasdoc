import { services } from "@/lib/config/site";
import { cn } from "@/lib/utils";

/**
 * Consultancy is not open yet. This notice reads its copy from `services` in
 * lib/config/site.ts, so when it opens the wording changes in one file.
 *
 * A compact badge variant lived here too. It has been removed from the hero
 * and the footer in turn and now has no callers: the status is stated once, in
 * the consultancy section, rather than repeated as page furniture.
 */
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
