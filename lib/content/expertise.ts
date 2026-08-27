/**
 * The three organ systems the practice is built around.
 * Descriptive only — these describe reasons people seek a specialist opinion,
 * not treatments offered or outcomes claimed.
 */

export type ExpertiseArea = {
  id: "gut" | "liver" | "pancreas";
  label: string;
  numeral: string;
  /** One-line summary used beside the anatomical diagram. */
  focusLine: string;
  /** The short line shown on the homepage expertise card - client's wording. */
  cardLine: string;
  headline: string;
  description: string;
  concerns: string[];
  href: string;
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "gut",
    label: "Gut",
    numeral: "I",
    focusLine:
      "Digestive disorders and gastrointestinal concerns, from reflux to altered bowel habit.",
    cardLine: "Digestive and gastrointestinal health.",
    headline: "Digestive and bowel concerns",
    description:
      "Ongoing digestive symptoms are common, and they are often difficult to interpret without a specialist review of your history, examination and investigations together.",
    concerns: [
      "Acid reflux and heartburn",
      "Bloating and abdominal discomfort",
      "Altered bowel habit",
      "Irritable bowel syndrome",
      "Difficulty swallowing",
      "Unexplained weight loss",
    ],
    href: "/gut",
  },
  {
    id: "liver",
    label: "Liver",
    numeral: "II",
    focusLine:
      "Assessment and specialist review of liver-related conditions and abnormal results.",
    cardLine:
      "Specialist assessment of liver conditions and abnormal results.",
    headline: "Liver health and abnormal results",
    description:
      "Liver problems are frequently picked up through routine blood tests or scans before any symptoms appear, which makes careful interpretation especially important.",
    concerns: [
      "Abnormal liver function tests",
      "Fatty liver disease",
      "Hepatitis B and C",
      "Jaundice",
      "Cirrhosis and its complications",
      "Liver lesions found on imaging",
    ],
    href: "/liver",
  },
  {
    id: "pancreas",
    label: "Pancreas",
    numeral: "III",
    focusLine:
      "Specialist evaluation of pancreatic concerns, including unclear imaging findings.",
    cardLine: "Evaluation and management of pancreatic concerns.",
    headline: "Pancreatic conditions",
    description:
      "Pancreatic conditions can be complex and often benefit from a focused specialist opinion, particularly where imaging or enzyme results are unclear.",
    concerns: [
      "Acute and chronic pancreatitis",
      "Pancreatic cysts",
      "Abnormal pancreatic enzymes",
      "Pancreatic lesions on imaging",
      "Difficulty digesting fats",
      "Persistent upper abdominal pain",
    ],
    href: "/pancreas",
  },
];

/** Additional capability areas shown as a secondary row, not as competing cards. */
export const supportingAreas = [
  {
    label: "Endoscopy & Procedures",
    description:
      "Guidance on whether an endoscopic procedure is appropriate, how to prepare, and how to interpret a report you already have.",
  },
  {
    label: "Complex & Overlapping Conditions",
    description:
      "Cases involving more than one organ system, or where previous investigations have not produced a clear answer.",
  },
];
