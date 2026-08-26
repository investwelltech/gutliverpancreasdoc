import { isPlaceholder } from "@/lib/config/site";
import { cn } from "@/lib/utils";

/**
 * Renders unconfirmed information so it can never be mistaken for a claim.
 * Confirmed values render as plain text; bracketed values render as a visibly
 * pending field. Replace the value in lib/config or lib/content and the
 * treatment disappears on its own.
 */
export function Placeholder({
  value,
  tone = "dark",
  className,
}: {
  value: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  if (!isPlaceholder(value)) {
    return <span className={className}>{value}</span>;
  }

  const label = value.replace(/^\[|\]$/g, "");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-dashed px-2 py-0.5 text-[0.8125rem] italic",
        tone === "dark"
          ? "border-rule text-slate"
          : "border-white/25 text-white/55",
        className
      )}
      title="This information has not been confirmed and is not published as fact."
    >
      {label}
    </span>
  );
}
