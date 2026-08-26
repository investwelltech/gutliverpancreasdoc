import { cn } from "@/lib/utils";

/**
 * The three-bar mark, rebuilt in SVG from the supplied logo artwork.
 *
 * Used only where the raster lockup cannot go — principally the navy footer,
 * where the artwork's dark navy wordmark would disappear into the ground.
 * Colours are sampled directly from the supplied file.
 *
 * Decorative: the surrounding link supplies the accessible name.
 */
const BRAND = {
  navy: "#17293D",
  teal: "#1B6566",
  light: "#7AB1B4",
} as const;

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  /* On navy the darkest bar is swapped for white so all three stay legible. */
  const bars =
    tone === "dark"
      ? [BRAND.navy, BRAND.teal, BRAND.light]
      : ["#FFFFFF", "#4E9B99", BRAND.light];

  return (
    <svg
      viewBox="0 0 62 74"
      aria-hidden="true"
      focusable="false"
      className={cn("block w-auto shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="16" height="74" rx="8" fill={bars[0]} />
      <rect x="23" y="8" width="16" height="66" rx="8" fill={bars[1]} />
      <rect x="46" y="20" width="16" height="54" rx="8" fill={bars[2]} />
    </svg>
  );
}
