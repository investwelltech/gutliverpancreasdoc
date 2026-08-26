import { cn } from "@/lib/utils";

/**
 * Section grounds create the page rhythm:
 *   warm  → warm white (default page ground)
 *   clinical → very light clinical blue
 *   white → plain white
 *   navy  → deep navy, used sparingly for emphasis
 */
const TONES = {
  warm: "bg-warm-white text-ink",
  clinical: "bg-blue-light text-ink",
  white: "bg-white text-ink",
  navy: "bg-navy text-white",
} as const;

export function Section({
  id,
  children,
  className,
  tone = "warm",
  bleed = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof TONES;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn(TONES[tone], className)}>
      {bleed ? (
        children
      ) : (
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          {children}
        </div>
      )}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        align === "center" ? "max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "label-eyebrow",
            tone === "dark" ? "text-teal" : "text-white/55"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "type-h2 mt-4",
          tone === "dark" ? "text-navy" : "text-white"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "type-body mt-5",
            tone === "dark" ? "text-slate" : "text-white/70"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
