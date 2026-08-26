import { InstagramIcon, LinkedInIcon } from "./social-icons";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

/** Only configured (non-empty) profiles are rendered. */
export function socialProfiles() {
  const { social } = siteConfig;
  return [
    { label: "Instagram", href: social.instagram, Icon: InstagramIcon },
    { label: "LinkedIn", href: social.linkedin, Icon: LinkedInIcon },
  ].filter((s) => s.href);
}

/**
 * Compact icon row for the header. Icon-only to keep the top bar quiet, with
 * the profile name carried in `aria-label` for screen readers and as a native
 * tooltip for sighted users.
 */
export function SocialIconLinks({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const profiles = socialProfiles();
  if (!profiles.length) return null;

  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {profiles.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
              tone === "dark"
                ? "text-slate hover:bg-blue-light hover:text-teal"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            )}
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Labelled version for the mobile sheet, where space allows words. */
export function SocialLabelledLinks({ className }: { className?: string }) {
  const profiles = socialProfiles();
  if (!profiles.length) return null;

  return (
    <ul className={cn("flex flex-wrap gap-x-2 gap-y-1", className)}>
      {profiles.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 rounded-sm px-3 text-sm font-medium text-navy transition-colors hover:bg-blue-light hover:text-teal"
          >
            <Icon size={17} />
            {label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
