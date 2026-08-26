/**
 * Supplied brand assets.
 *
 * The logo artwork ships on a flat #FAF9F5 ground, which is why the site's
 * `--warm-white` token is set to exactly that value — the lockup then sits on
 * the header and page ground with no visible plate behind it. If the ground
 * colour changes, either change it back or supply a transparent PNG/SVG.
 */

export const logo = {
  horizontal: {
    src: "/images/brand/logo-horizontal.jpg",
    width: 900,
    height: 142,
    alt: "gutliverpancreasdoc",
    source: "logo1.jpeg — cropped to the lockup and optimised.",
  },
  stacked: {
    src: "/images/brand/logo-stacked.jpg",
    width: 760,
    height: 406,
    alt: "gutliverpancreasdoc — digestive, liver and pancreas care",
    source: "logo.jpeg — cropped to the lockup and optimised.",
  },
} as const;

/**
 * Supplied motion assets. Both are H.264/AAC MP4, roughly 1.7 MB each, so they
 * are loaded only when scrolled near (see components/site/video-loop.tsx) and
 * are never fetched at all for visitors who prefer reduced motion.
 */
export const motion = {
  logo: {
    src: "/images/Logo_animation.mp4",
    /**
     * Static frame shown before play. The stacked lockup is used rather than
     * the horizontal one because its proportions sit far closer to the 16:9
     * video box, so the poster does not letterbox awkwardly.
     */
    poster: logo.stacked.src,
    label: "Animated gutliverpancreasdoc logo.",
  },
  medical: {
    src: "/images/doctor/Medical_animation.mp4",
    poster: null,
    label:
      "Animated medical illustration of the gut, liver and pancreas.",
  },
} as const;
