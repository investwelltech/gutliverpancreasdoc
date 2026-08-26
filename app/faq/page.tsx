import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about online specialist gastroenterology and hepatology consultations.",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Questions"
      title="Frequently asked questions"
      lead="Practical answers about how online consultations work, what to prepare, and how your medical documents are handled."
    />
  );
}
