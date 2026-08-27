/**
 * FAQ content. Answers deliberately avoid clinical claims, pricing and any
 * statement about medical registration or jurisdiction until confirmed.
 *
 * NOTE: consulting is not open yet and this site has no booking or upload
 * feature, so no answer may describe booking a slot or sending documents
 * through the website. See `services` in lib/config/site.ts.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What will an online consultation involve?",
    answer:
      "Consultations are being prepared and are not open yet. Once they are, an appointment will be a private video consultation spent discussing your symptoms, going through your results together and talking through the options available to you.",
  },
  {
    question: "Will I need to have reports first?",
    answer:
      "No. Reports are helpful where they exist, but they are not required. Please do not send medical documents through this website — there is no upload facility here, and how reports will be shared securely will be set out before consultations open.",
  },
  {
    question: "Can I get a second opinion if I already have a diagnosis?",
    answer:
      "Yes. A second opinion is an independent review of your existing diagnosis, investigations and proposed plan. It is intended to support the care you are already receiving, not to replace your treating doctor.",
  },
  {
    question: "Will an online consultation suit my problem?",
    answer:
      "Many gut, liver and pancreatic concerns can be discussed effectively online, particularly where the main need is interpretation of results or a specialist opinion. Some situations require a physical examination or in-person procedure, and where that applies it will be explained to you clearly.",
  },
  {
    question: "How will my medical documents be handled?",
    answer:
      "This website does not collect, store or receive medical documents. When consultations open, documents will be treated as confidential medical records and you will be asked for explicit consent before anything is retained.",
  },
  {
    question: "What are the consultation fees?",
    answer:
      "Fees have not been published. They will be set out here before consultations open.",
  },
  {
    question: "Can I use this service from outside the country?",
    answer:
      "The arrangements available to patients consulting from abroad are still being confirmed, and will be set out clearly before consultations open.",
  },
  {
    question: "Is this suitable in an emergency?",
    answer:
      "No. This website is not for emergencies. If you have severe abdominal pain, vomiting blood, black stools, or any other symptom that concerns you urgently, contact your local emergency services or attend your nearest emergency department.",
  },
];
