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

export const profileIntro = [
  "Patients usually arrive with a folder of results and a question nobody has fully answered: what does this actually mean, and what should happen next.",
  "This practice is built around that question. It focuses on the gut, the liver and the pancreas — three closely connected systems where symptoms overlap, results are easy to misread, and a considered specialist opinion makes a genuine difference.",
];

export const philosophyOfCare =
  "Clear explanation first. Investigations where they change the plan, not by default. And a written summary you can take back to your own doctor, so the care you already receive stays joined up.";

/**
 * Editable profile fields shown in "Meet your specialist".
 * Bracketed values render with a visibly pending treatment.
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
  {
    label: "Professional experience",
    value:
      "In clinical practice since 2020, including a year as a Consultant Physician in general medicine before beginning gastroenterology training.",
  },
  {
    label: "Academic activity",
    value:
      "Case report presented at LTSICON 2025; ongoing interest in collaborative research.",
  },
  {
    label: "Memberships",
    value: "[Professional memberships to be confirmed]",
  },
  {
    label: "Medical registration",
    value: "[Medical registration number to be confirmed]",
  },
];

/** Career timeline, most recent first. */
export const experience = [
  {
    role: "Senior Resident — Gastroenterology",
    org: "Max Healthcare, Saket",
    location: "New Delhi",
    period: "Jun 2025 — Present",
    detail:
      "DrNB Gastroenterology training, with a focus on advanced endoscopy, hepatology and metabolic liver disease.",
  },
  {
    role: "Consultant Physician",
    org: "Kasturba Hospital",
    location: "Mumbai",
    period: "Jun 2024 — Jun 2025",
    detail: "General internal medicine.",
  },
  {
    role: "Resident Doctor",
    org: "Netaji Subhash Chandra Bose Medical College",
    location: "Jabalpur",
    period: "Aug 2020 — Jul 2023",
    detail: "Internal medicine residency.",
  },
  {
    role: "Internship",
    org: "Indira Gandhi Government Medical College",
    location: "Nagpur",
    period: "Feb 2019 — Mar 2020",
    detail: "Rotating clinical internship.",
  },
];

/** Education, most recent first. */
export const education = [
  {
    award: "DrNB, Gastroenterology",
    org: "National Board of Examinations in Medical Sciences (NBEMS)",
    period: "Jun 2025 — Present",
    inProgress: true,
  },
  {
    award: "MD, Medicine",
    org: "Madhya Pradesh Medical Science University (MPMSU)",
    period: "Aug 2020 — Jun 2023",
    inProgress: false,
  },
  {
    award: "MBBS",
    org: "Maharashtra University of Health Sciences (MUHS), Nashik",
    period: "Sep 2014 — Mar 2020",
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

export const academicStrands = [
  {
    label: "Conferences",
    value:
      "Case report presented at LTSICON 2025, the 8th Annual Conference of the Liver Transplantation Society of India.",
  },
  { label: "Publications", value: "[Publications to be confirmed]" },
  { label: "Research", value: "[Research activity to be confirmed]" },
  { label: "Teaching", value: "[Teaching activity to be confirmed]" },
];

export const researchPlaceholder = "[Publications and research to be confirmed]";
