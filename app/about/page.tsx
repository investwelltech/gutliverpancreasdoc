import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, clinical interests and philosophy of care.",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="About"
      title="About Dr. Pratik Agarwal"
      lead="A specialist practice focused on the gut, liver and pancreas — three closely connected systems where a considered opinion makes a genuine difference."
    />
  );
}
