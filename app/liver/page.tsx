import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { expertiseAreas } from "@/lib/content/expertise";

export const metadata: Metadata = {
  title: "Liver & Hepatology",
  description:
    "Hepatologist-led online consultation for abnormal liver function tests, fatty liver disease, hepatitis and cirrhosis.",
};

const area = expertiseAreas.find((a) => a.id === "liver")!;

export default function Page() {
  return (
    <PageShell
      eyebrow="Liver & Hepatology"
      title="Specialist review of liver health and abnormal results"
      lead="Liver problems are frequently identified through routine blood tests or scans before symptoms appear, which makes careful interpretation especially important."
    >
      <h2 className="label-eyebrow text-slate">
        Conditions covered in this area
      </h2>
      <ul className="mt-5 grid gap-x-10 gap-y-1 sm:grid-cols-2">
        {area.concerns.map((c) => (
          <li
            key={c}
            className="border-b border-rule py-3 text-sm text-slate"
          >
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">
        {area.description}
      </p>
    </PageShell>
  );
}
