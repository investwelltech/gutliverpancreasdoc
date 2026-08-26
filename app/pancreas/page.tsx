import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { expertiseAreas } from "@/lib/content/expertise";

export const metadata: Metadata = {
  title: "Pancreatic Conditions",
  description:
    "Specialist online consultation for pancreatitis, pancreatic cysts and abnormal pancreatic enzymes.",
};

const area = expertiseAreas.find((a) => a.id === "pancreas")!;

export default function Page() {
  return (
    <PageShell
      eyebrow="Pancreas"
      title="Focused specialist opinion on pancreatic conditions"
      lead="Pancreatic conditions can be complex and often benefit from a focused specialist opinion, particularly where imaging or enzyme results are unclear."
    >
      <h2 className="label-eyebrow text-slate">
        Reasons patients seek this consultation
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
