import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-language articles on gut, liver and pancreatic health.",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Educational resources"
      lead="Short, practical articles on the questions patients ask most often. These are in preparation and will be published here."
    />
  );
}
