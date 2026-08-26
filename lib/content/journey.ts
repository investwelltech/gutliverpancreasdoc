/**
 * The six-step consultation experience — the main differentiator on the homepage.
 * Phase 1 renders this as UI only; no booking, storage or scheduling is wired up.
 */

export type JourneyStep = {
  step: number;
  title: string;
  description: string;
};

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Choose Consultation",
    description:
      "Select the consultation that fits your situation — a new concern, a second opinion, a follow-up or a report review.",
  },
  {
    step: 2,
    title: "Select Date & Time",
    description:
      "Pick from available appointment slots, including times that suit patients consulting from a different time zone.",
  },
  {
    step: 3,
    title: "Tell Us About Your Concern",
    description:
      "Share a short history — your main symptoms, how long they have been present and any current medication.",
  },
  {
    step: 4,
    title: "Upload Reports",
    description:
      "Add existing blood tests, scans and reports in advance so the appointment can be spent on your questions rather than gathering information.",
  },
  {
    step: 5,
    title: "Online Consultation",
    description:
      "Meet over a private video consultation to discuss your history, review your results together and talk through the options.",
  },
  {
    step: 6,
    title: "Recommended Next Steps",
    description:
      "Receive a written summary setting out what was discussed and the suggested next steps for you and your treating doctor.",
  },
];
