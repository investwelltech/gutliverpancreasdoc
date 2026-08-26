/**
 * The four consultation types. Pricing is intentionally omitted — see
 * `pricing` in lib/config/site.ts to enable it once fees are confirmed.
 */

export type ConsultationType = {
  id: string;
  name: string;
  suitableFor: string;
  detail: string;
  /** Filled in only when pricing is confirmed and pricing.display is true. */
  price: string | null;
};

export const consultationTypes: ConsultationType[] = [
  {
    id: "initial",
    name: "Initial Specialist Consultation",
    suitableFor:
      "For a new gut, liver or pancreatic concern you have not discussed with a specialist before.",
    detail:
      "A full review of your symptoms, history and any existing results, followed by a clear explanation of what may be happening and what to consider next.",
    price: null,
  },
  {
    id: "second-opinion",
    name: "Second Opinion",
    suitableFor:
      "For patients who already have a diagnosis or proposed plan and want an independent specialist view.",
    detail:
      "An independent review of your existing diagnosis, investigations and recommended plan, so you can make a decision with more confidence.",
    price: null,
  },
  {
    id: "follow-up",
    name: "Follow-up Consultation",
    suitableFor:
      "For patients previously seen who need to review progress, results or an ongoing plan.",
    detail:
      "A shorter appointment to discuss how you have responded so far, review any new results and adjust the plan where needed.",
    price: null,
  },
  {
    id: "report-review",
    name: "Medical Report Review",
    suitableFor:
      "For patients who mainly need existing scans, blood tests or reports explained.",
    detail:
      "A focused review of the reports you already hold, with a written summary of what they show and which findings warrant attention.",
    price: null,
  },
];
