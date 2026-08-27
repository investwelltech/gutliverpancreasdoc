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
      "Hello, I would like to enquire about a specialist consultation.",
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

  /**
   * PHASE 1 IS A PORTFOLIO SITE. There is no booking engine, no appointment
   * calendar and no report upload — those were removed at the client's request.
   * Every consultation CTA now resolves to this "coming soon" status plus a
   * WhatsApp/contact route. Do not re-introduce a scheduler, an embedded
   * calendar or an upload dropzone without explicit approval.
   */
  services: {
    /** Master switch. Flip to true only when consulting is genuinely live. */
    available: false,
    /** Short label used on badges and buttons. */
    statusLabel: "Coming soon",
    /** One line shown wherever a booking CTA used to sit. */
    statusLine: "Consulting services coming soon.",
    /** Longer explanation for section-level notices. */
    statusNote:
      "Online consultations are not open for booking yet. Enquiries are welcome in the meantime — send a message and you will be told as soon as appointments open.",
  },

  consultation: {
    /** Pricing is deliberately not published in this phase. */
    displayPricing: false,
    currency: "[Currency to be confirmed]",
    feeNote: "Consultation fees will be published when consulting services open.",
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


/* Convenience re-exports so existing imports stay short. */
export const { doctor, brand, contact, social, services, positioning } =
  siteConfig;
export const pricing = siteConfig.consultation;
