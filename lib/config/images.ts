/**
 * Web-ready image derivatives. Each was generated from the originals supplied
 * in public/images/doctor/ — resized and re-encoded only. No facial retouching
 * or identity alteration was applied to any photograph.
 */

export const doctorImages = {
  hero: {
    src: "/images/doctor/dr-pratik-hero.jpg",
    width: 1120,
    height: 1500,
    alt: "Dr. Pratik Agrawal in a white clinical coat at the clinic.",
    source: "pratik1.jpeg — resized and optimised, no other alteration.",
  },
  portrait: {
    src: "/images/doctor/dr-pratik-portrait.jpg",
    width: 1045,
    height: 1400,
    alt: "Portrait of Dr. Pratik Agrawal wearing a gutliverpancreasdoc branded jacket.",
    source: "pratik4.jpeg — resized and optimised, no other alteration.",
  },
  conference: {
    src: "/images/doctor/dr-pratik-conference.jpg",
    width: 1400,
    height: 1304,
    alt: "Dr. Pratik Agarwal presenting a case report poster at the LTSICON 2025 liver transplantation conference.",
    source:
      "IMG_9324.PNG — cropped to remove the Instagram location sticker and handle overlay, then optimised. Face and framing of the subject unaltered.",
  },
  endoscopySuite: {
    src: "/images/doctor/endoscopy-suite.jpg",
    width: 1600,
    height: 1200,
    alt: "An unoccupied endoscopy procedure room with monitors and anaesthetic equipment.",
    source: "IMG_9660.HEIC — converted from HEIC and optimised.",
  },
  procedureRoom: {
    src: "/images/doctor/procedure-room.jpg",
    width: 1600,
    height: 1200,
    alt: "An unoccupied interventional procedure suite with a fluoroscopy table and endoscopy tower.",
    source: "IMG_9661.HEIC — converted from HEIC and optimised.",
  },
} as const;
