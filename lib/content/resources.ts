/**
 * Educational article placeholders. No article bodies have been written —
 * these render as an "in preparation" state, never as fake previews.
 */

export type Resource = {
  slug: string;
  title: string;
  topic: "Gut" | "Liver" | "Pancreas" | "Procedures";
  summary: string;
  published: boolean;
};

export const resources: Resource[] = [
  {
    slug: "gut-health",
    title: "Understanding Gut Health",
    topic: "Gut",
    summary:
      "What the term actually covers, and which symptoms are worth investigating further.",
    published: false,
  },
  {
    slug: "fatty-liver",
    title: "Fatty Liver Explained",
    topic: "Liver",
    summary:
      "Why it is found so often on routine scans, and what it does and does not mean.",
    published: false,
  },
  {
    slug: "abnormal-liver-tests",
    title: "Making Sense of Abnormal Liver Tests",
    topic: "Liver",
    summary:
      "How to read a liver function test, and which patterns prompt further review.",
    published: false,
  },
  {
    slug: "acid-reflux",
    title: "Acid Reflux and Heartburn",
    topic: "Gut",
    summary:
      "Common triggers, when reflux is worth investigating, and what treatment usually involves.",
    published: false,
  },
  {
    slug: "ibs",
    title: "Irritable Bowel Syndrome",
    topic: "Gut",
    summary:
      "How IBS is recognised, and why it is a diagnosis that still requires careful assessment.",
    published: false,
  },
  {
    slug: "pancreatic-conditions",
    title: "Pancreatic Conditions",
    topic: "Pancreas",
    summary:
      "An introduction to pancreatitis, pancreatic cysts and how they are monitored.",
    published: false,
  },
  {
    slug: "endoscopy-preparation",
    title: "Preparing for an Endoscopy",
    topic: "Procedures",
    summary:
      "What to expect before, during and after the procedure, and how to prepare properly.",
    published: false,
  },
];
