/**
 * Document types patients will eventually be able to upload.
 * Phase 1 is a UI preview only — no upload endpoint, no storage, no database.
 */

export const reportTypes = [
  "Blood reports",
  "Liver function tests",
  "Ultrasound",
  "CT / MRI",
  "Endoscopy reports",
  "Biopsy / pathology",
  "Previous prescriptions",
  "Referral letters",
  "Previous consultation reports",
];

export const privacyAssurances = [
  {
    title: "Private by default",
    description:
      "Medical documents are never placed in public storage. Access is restricted to your own consultation record.",
  },
  {
    title: "Encrypted in transit and at rest",
    description:
      "Files are encrypted on upload and remain encrypted while stored.",
  },
  {
    title: "Shared only with your consulting doctor",
    description:
      "Your reports are not sold, shared with third parties or used for marketing.",
  },
  {
    title: "Consent before anything is stored",
    description:
      "You will be asked to give explicit consent before any document is uploaded or retained.",
  },
];

/** Phase 1 flag — flip to true only once secure storage is live in Phase 2. */
export const uploadEnabled = false;
