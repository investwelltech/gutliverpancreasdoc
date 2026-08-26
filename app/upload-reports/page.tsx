import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Upload Reports",
  description:
    "Securely share blood tests, scans and reports ahead of your consultation.",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Upload reports"
      title="Send your reports before your consultation"
      lead="Sharing reports in advance means the appointment is spent interpreting them with you, rather than collecting them from you."
    />
  );
}
