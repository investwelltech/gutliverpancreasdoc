/**
 * FAQ content. Answers deliberately avoid clinical claims, pricing and any
 * statement about medical registration or jurisdiction until confirmed.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What happens during an online consultation?",
    answer:
      "You join a private video appointment at your chosen time. Your history and any reports you have uploaded are reviewed beforehand, so the appointment itself is spent discussing your symptoms, going through your results together and talking through the options available to you.",
  },
  {
    question: "Do I need to have reports before booking?",
    answer:
      "No. Reports are helpful where they exist, but they are not required. If you have had recent blood tests or scans, sharing them in advance makes the consultation more useful. If you have not, that can be discussed during the appointment.",
  },
  {
    question: "Can I get a second opinion if I already have a diagnosis?",
    answer:
      "Yes. A second opinion is an independent review of your existing diagnosis, investigations and proposed plan. It is intended to support the care you are already receiving, not to replace your treating doctor.",
  },
  {
    question: "Is an online consultation suitable for my problem?",
    answer:
      "Many gut, liver and pancreatic concerns can be discussed effectively online, particularly where the main need is interpretation of results or a specialist opinion. Some situations require a physical examination or in-person procedure, and where that applies it will be explained to you clearly.",
  },
  {
    question: "How are my medical documents handled?",
    answer:
      "Documents are treated as confidential medical records. They are stored privately, encrypted, and made available only in connection with your own consultation. You will be asked for explicit consent before anything is uploaded or retained.",
  },
  {
    question: "What are the consultation fees?",
    answer:
      "Fees are confirmed at the time of booking, so that the appropriate consultation type can be selected for your situation first.",
  },
  {
    question: "Can I use this service from outside the country?",
    answer:
      "Online consultations can be arranged across time zones. The precise arrangements available to patients consulting from abroad are being confirmed, and will be set out clearly before you book.",
  },
  {
    question: "Is this service suitable in an emergency?",
    answer:
      "No. This service is not for emergencies. If you have severe abdominal pain, vomiting blood, black stools, or any other symptom that concerns you urgently, contact your local emergency services or attend your nearest emergency department.",
  },
];
