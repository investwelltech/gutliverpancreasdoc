import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { expertiseAreas } from "@/lib/content/expertise";

export const metadata: Metadata = {
  title: "Gut & Digestive Health",
  description:
    "Online specialist consultation for reflux, bloating, altered bowel habit, IBS and other digestive concerns.",
};

const area = expertiseAreas.find((a) => a.id === "gut")!;

export default function Page() {
  return (
    <PageShell
      eyebrow="Gut & Digestive Health"
      title="Specialist assessment for digestive and bowel concerns"
      lead="Ongoing digestive symptoms are common and often difficult to interpret without reviewing your history, examination and investigations together."
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
