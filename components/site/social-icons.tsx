/**
 * Instagram and LinkedIn glyphs, authored inline.
 *
 * lucide-react v1 ships no brand marks (they were removed upstream), so these
 * are drawn in the same 24px stroke idiom as the rest of the icon set — 1.7
 * stroke, round caps — so they sit consistently beside lucide icons.
 *
 * Decorative: the wrapping link supplies the accessible name.
 */

type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.6" cy="6.4" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.2" />
      {/* i */}
      <line x1="7.6" y1="10.6" x2="7.6" y2="17" />
      <circle cx="7.6" cy="7.2" r="1.05" fill="currentColor" stroke="none" />
      {/* n */}
      <path d="M11.8 17v-6.4" />
      <path d="M11.8 13.4a2.9 2.9 0 0 1 5.8 0V17" />
    </svg>
  );
}
