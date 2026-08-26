/**
 * SINGLE SOURCE OF TRUTH for all business information.
 *
 * Rules enforced by this module:
 *  1. No contact detail, price, URL or credential may be hard-coded in a component.
 *  2. Raw phone numbers and email addresses must NEVER be rendered as visible page
 *     copy. They are consumed only as `href` values via the helpers at the bottom
 *     (whatsappHref / emailHref / phoneHref). Use a labelled button instead.
 *  3. Unconfirmed facts stay as bracketed placeholders and render through the
 *     <Placeholder /> component so they can never be mistaken for a claim.
 */

export const PLACEHOLDER_PREFIX = "[";

export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith(PLACEHOLDER_PREFIX);
}

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  /**
   * Sourced from the doctor's own LinkedIn profile, supplied by the client.
   *
   * NOTE ON SENIORITY: he is a Senior Resident in DrNB Gastroenterology — a
   * specialist in training, not yet a consultant. Do not describe him as a
   * "Consultant Gastroenterologist" or imply completed specialist
   * accreditation anywhere on the site.
   */
  doctor: {
    name: "Dr. Pratik Agrawal",
    /** Settled: his own LinkedIn and Instagram both spell it "Agrawal". */
    nameSpellingConfirmed: true,
    pronouns: "he/him",
    title: "Gastroenterology, Hepatology & Pancreatic Medicine",
    /** Accurate current role — keep this wording. */
    shortTitle: "Senior Resident, DrNB Gastroenterology",
    credentialLine: "MBBS, MD (Medicine)",
    registration: "[Medical registration number to be confirmed]",
    qualifications: [
      "MBBS — Maharashtra University of Health Sciences (MUHS), Nashik",
      "MD (Medicine) — Madhya Pradesh Medical Science University (MPMSU)",
      "DrNB (Gastroenterology) — in training",
    ],
    affiliations: ["Max Super Speciality Hospital, Saket — Max Healthcare"],
    memberships: ["[Professional memberships to be confirmed]"],
    yearsInPractice: "In clinical practice since 2020",
    location: "Saket, New Delhi, India",
  },

  brand: {
    /** Trading name, taken from the supplied logo artwork. */
    practiceName: "gutliverpancreasdoc",
    /** Strapline set beneath the mark in the stacked lockup. */
    strapline: "Digestive • Liver • Pancreas Care",
    /** Retained for eyebrows and the three-part device used in copy. */
    device: ["GUT", "LIVER", "PANCREAS"] as const,
    deviceSeparator: "•",
    heroEyebrow: "Gastroenterology • Hepatology • Pancreas",
    tagline: "Specialist Care for Gut, Liver & Pancreas Health",
  },

  contact: {
    /**
     * PRIVATE — used only to build href values. Never rendered as visible text.
     * Digits only, full international format.
     */
    whatsappNumber: "919217560183",
    whatsappUrl: "https://wa.me/919217560183",
    whatsappMessage:
      "Hello, I would like information about booking a consultation.",
    /** PRIVATE — mailto target only. Never rendered as visible text. */
    email: "aidarshna@gmail.com",
    /** PRIVATE — tel: target only. Never rendered as visible text. */
    phone: "+919217560183",
    /** Visible copy may use this instead of a street address. */
    addressLine: "[Consultation address to be confirmed]",
    /** Set true only when the client approves showing raw details publicly. */
    showRawDetails: false,
  },

  /**
   * Public profiles. Only add a link that has been confirmed as belonging to
   * the doctor — these are presented to patients as his official channels.
   * Empty strings are skipped by the footer, so unused rows can stay here.
   */
  social: {
    instagram: "https://www.instagram.com/gutliverpancreas/",
    linkedin: "https://www.linkedin.com/in/dr-pratik-agrawal-b81b88253/",
    youtube: "",
  },

  booking: {
    /**
     * CTAs point at the internal /book page rather than straight at Google, so
     * the appointment grid is wrapped in the India-time notice and the
     * after-booking WhatsApp step.
     */
    internalPath: "/book",
    externalUrl: "",
    /** Google Calendar appointment schedule (short link, for "open in Google"). */
    scheduleUrl: "https://calendar.app.google/iEU8hPMeBJEyYeom7",
    /**
     * Resolved long form. `?gv=true` is what makes Google render the embeddable
     * grid.
     *
     * NOTE: Google's appointment scheduler ignores a `ctz` parameter here — it
     * always renders slots in the VISITOR's timezone and converts from the
     * clinic's own calendar automatically. Verified in-browser: a UK visitor is
     * shown "(GMT+01:00) United Kingdom Time". Do not re-add `ctz` and do not
     * write copy claiming the grid displays IST; it does not.
     */
    scheduleEmbedUrl:
      "https://calendar.google.com/appointments/schedules/AcZssZ3uPPSEw-YktXalG4XCfGkBxPYVo4VHK29r51SH6wB5yAq3mAMwn_pnbNvqesa4fXHwQoHFRYHt?gv=true",
    /** All published availability is India Standard Time. */
    timezone: "Asia/Kolkata",
    timezoneLabel: "India Standard Time (IST)",
    /** Neutral, no clinical detail — see the WhatsApp rule in lib/content. */
    confirmMessage:
      "Hello, I have just booked an online consultation through the website and would like to confirm my appointment.",
  },

  consultation: {
    /** Pricing is deliberately not published in this phase. */
    displayPricing: false,
    currency: "[Currency to be confirmed]",
    feeNote: "Consultation fees are confirmed at the time of booking.",
    /** Reserved for a later phase. No payment provider is integrated. */
    paymentUrl: null as string | null,
  },

  positioning: {
    serviceDescriptor: "Online specialist consultation",
    /**
     * Practice is India-based (Saket, New Delhi), so the relevant regulator is
     * the National Medical Commission / Delhi Medical Council — never the GMC.
     * Whether NRI/international patients are served is still undecided.
     */
    geographyConfirmed: true,
    country: "India",
    regulator: "National Medical Commission / Delhi Medical Council",
  },
} as const;

/* ------------------------------------------------------------------ */
/* href helpers — the ONLY sanctioned way to use contact details       */
/* ------------------------------------------------------------------ */

export function whatsappHref(): string {
  const { whatsappUrl, whatsappMessage } = siteConfig.contact;
  return `${whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`;
}

export function emailHref(): string {
  return `mailto:${siteConfig.contact.email}`;
}

export function phoneHref(): string {
  return `tel:${siteConfig.contact.phone}`;
}

export function bookingHref(): string {
  return siteConfig.booking.externalUrl || siteConfig.booking.internalPath;
}

/** WhatsApp deep link for the post-booking confirmation step. */
export function bookingConfirmHref(): string {
  const { whatsappUrl } = siteConfig.contact;
  return `${whatsappUrl}?text=${encodeURIComponent(
    siteConfig.booking.confirmMessage
  )}`;
}

/* Convenience re-exports so existing imports stay short. */
export const { doctor, brand, contact, social, booking, positioning } =
  siteConfig;
export const pricing = siteConfig.consultation;
