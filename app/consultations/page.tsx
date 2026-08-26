import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Consultations",
  description:
    "Initial specialist consultation, second opinion, follow-up consultation and medical report review.",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Consultations"
      title="Consultation types and what each involves"
      lead="Each option is built around a different starting point. If you are unsure which applies, the initial consultation is the right place to begin."
    />
  );
}
