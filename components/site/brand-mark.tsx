import Link from "next/link";
import Image from "next/image";
import { logo } from "@/lib/config/brand-assets";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  /** "dark" = light ground (uses the supplied artwork). "light" = navy ground. */
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  /** Show the doctor's name beneath the mark. */
  showName?: boolean;
  className?: string;
};

const SIZES = {
  sm: { img: "h-5", name: "text-[0.6875rem]", plate: "w-32" },
  md: { img: "h-6 sm:h-7", name: "text-[0.6875rem]", plate: "w-40" },
  lg: { img: "h-10", name: "text-xs", plate: "w-48" },
};

export function BrandMark({
  tone = "dark",
  size = "md",
  showName = true,
  className,
}: BrandMarkProps) {
  const s = SIZES[size];
  const { brand, doctor } = siteConfig;
  const label = `${brand.practiceName} - ${doctor.name}, home`;

  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col gap-1", className)}
      aria-label={label}
    >
      {tone === "dark" ? (
        /* Light ground: the supplied artwork, whose background matches the
           page ground exactly, so no plate is needed behind it. */
        <Image
          src={logo.horizontal.src}
          alt={brand.practiceName}
          width={logo.horizontal.width}
          height={logo.horizontal.height}
          priority
          className={cn("w-auto shrink-0", s.img)}
        />
      ) : (
        /* Navy ground: the supplied lockup is dark artwork on a warm-white
           field, so it sits on a matching plate rather than being rebuilt —
           the same file the rest of the site uses. */
        <span className={cn("block bg-warm-white px-4 py-3", s.plate)}>
          <Image
            src={logo.stacked.src}
            alt={brand.practiceName}
            width={logo.stacked.width}
            height={logo.stacked.height}
            sizes="200px"
            className="h-auto w-full"
          />
        </span>
      )}

      {showName && (
        <span
          className={cn(
            "font-[family-name:var(--font-display)] leading-none",
            s.name,
            tone === "dark" ? "text-slate" : "text-white/60"
          )}
        >
          {doctor.name}
        </span>
      )}
    </Link>
  );
}
