import Link from "next/link";
import Image from "next/image";
import { Logo } from "./logo";
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
  sm: { img: "h-5", name: "text-[0.6875rem]", mark: "h-5", word: "text-sm" },
  md: { img: "h-7", name: "text-[0.6875rem]", mark: "h-6", word: "text-base" },
  lg: { img: "h-10", name: "text-xs", mark: "h-8", word: "text-xl" },
};

export function BrandMark({
  tone = "dark",
  size = "md",
  showName = true,
  className,
}: BrandMarkProps) {
  const s = SIZES[size];
  const { brand, doctor } = siteConfig;
  const label = `${brand.practiceName} — ${doctor.name}, home`;

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
          className={cn("w-auto", s.img)}
        />
      ) : (
        /* Navy ground: the artwork's wordmark is dark navy and would disappear,
           so the mark is rebuilt from brand colours with the wordmark in type. */
        <span className="inline-flex items-center gap-2.5">
          <Logo tone="light" className={s.mark} />
          <span
            className={cn(
              "font-medium lowercase tracking-tight text-white",
              s.word
            )}
          >
            gutliverpancreas
            <span className="text-[#7AB1B4]">doc</span>
          </span>
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
