/**
 * Doctor profile content.
 *
 * SOURCE: the doctor's own LinkedIn profile, supplied by the client. Items not
 * covered there remain bracketed placeholders and render through <Placeholder />.
 *
 * SENIORITY — read before editing any copy here: he is a Senior Resident in
 * DrNB Gastroenterology, i.e. a gastroenterology specialist IN TRAINING. He
 * previously held a Consultant Physician post in general medicine. Nothing on
 * the site may describe him as a "Consultant Gastroenterologist" or imply that
 * superspecialty accreditation is complete.
 */

/** Specialist areas shown under the doctor's name. */
export const specialistAreas = [
  "Gastroenterology",
  "Hepatology",
  "Pancreas",
  "Endoscopy",
];

/*
 * The narrative introduction and the "philosophy of care" quotation were
 * removed at the client's request: both were written for a consulting
 * practice ("patients usually arrive with a folder of results...", "a written
 * summary you can take back to your own doctor"), and consulting is not open.
 * Nothing was written to replace them — the profile now stands on the sourced
 * fields below, and no biographical prose may be invented to fill the gap.
 */

/**
 * The short fact list shown under "About Dr. Pratik Agrawal".
 *
 * Career history and academic engagement are deliberately NOT here: they have
 * their own sections further down the page, and the brief asks that nothing be
 * repeated between them.
 */
export const profileFields = [
  {
    label: "Qualifications",
    value: "MBBS, MD (Medicine). Currently training in DrNB Gastroenterology.",
  },
  {
    label: "Current role",
    value:
      "Senior Resident in DrNB Gastroenterology at Max Super Speciality Hospital, Saket, New Delhi.",
  },
  {
    label: "Clinical interests",
    value:
      "Advanced endoscopy, hepatology and metabolic liver disease, alongside preventive digestive health.",
  },
  /*
   * The Memberships and Medical registration rows are held back for now at the
   * client's request - both were unconfirmed placeholders. The values still sit
   * in lib/config/site.ts (doctor.memberships, doctor.registration); add the
   * rows back here once there is a confirmed fact to publish.
   */
];

/** Career timeline, most recent first. */
export const experience = [
  {
    role: "Senior Resident - Gastroenterology",
    org: "Max Healthcare, Saket",
    location: "New Delhi",
    period: "Jun 2025 - Present",
    detail:
      "DrNB Gastroenterology training, with a focus on advanced endoscopy, hepatology and metabolic liver disease.",
  },
  {
    role: "Consultant Physician",
    org: "Kasturba Hospital",
    location: "Mumbai",
    period: "Jun 2024 - Jun 2025",
    detail: "General internal medicine.",
  },
  {
    role: "Resident Doctor",
    org: "Netaji Subhash Chandra Bose Medical College",
    location: "Jabalpur",
    period: "Aug 2020 - Jul 2023",
    detail: "Internal medicine residency.",
  },
  {
    role: "Internship",
    org: "Indira Gandhi Government Medical College",
    location: "Nagpur",
    period: "Feb 2019 - Mar 2020",
    detail: "Rotating clinical internship.",
  },
];

/** Education, most recent first. */
export const education = [
  {
    award: "DrNB, Gastroenterology",
    org: "National Board of Examinations in Medical Sciences (NBEMS)",
    period: "Jun 2025 - Present",
    inProgress: true,
  },
  {
    award: "MD, Medicine",
    org: "Madhya Pradesh Medical Science University (MPMSU)",
    period: "Aug 2020 - Jun 2023",
    inProgress: false,
  },
  {
    award: "MBBS",
    org: "Maharashtra University of Health Sciences (MUHS), Nashik",
    period: "Sep 2014 - Mar 2020",
    inProgress: false,
  },
];

/**
 * Independently corroborated: LTSICON 2025 is the 8th Annual Conference of the
 * Liver Transplantation Society of India, Hotel Pullman Aerocity, New Delhi.
 */
export const verifiedFromSuppliedMaterial = {
  academicEngagement:
    "Presented a case report at LTSICON 2025, the 8th Annual Conference of the Liver Transplantation Society of India.",
  note: "Further academic detail to be confirmed.",
};

/*
 * The Publications, Research and Teaching rows were removed at the client's
 * request — all three were unconfirmed placeholders. Only the corroborated
 * conference entry remains; add a row back here when there is a fact for it.
 */
export const academicStrands = [
  {
    label: "Conferences",
    value:
      "Case report presented at LTSICON 2025, the 8th Annual Conference of the Liver Transplantation Society of India.",
  },
];
