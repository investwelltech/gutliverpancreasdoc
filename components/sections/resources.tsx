import { Section, SectionHeading } from "@/components/site/section";
import { resources } from "@/lib/content/resources";

export function Resources() {
  return (
    <Section id="resources" tone="warm">
      <SectionHeading
        eyebrow="Educational resources"
        title="Plain explanations, written by the specialist"
        lead="Short, practical articles on the questions patients ask most often. These are in preparation and will be published here."
      />

      <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <li key={r.slug} className="border-t border-navy/12 pt-5">
            <p className="label-eyebrow text-teal">{r.topic}</p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl leading-snug text-navy">
              {r.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate">
              {r.summary}
            </p>
            <p className="mt-4 text-xs italic text-slate">
              {r.published ? "Read article" : "In preparation"}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
