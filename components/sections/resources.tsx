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

      <ul className="mt-8 grid gap-x-10 gap-y-5 sm:mt-14 sm:gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <li key={r.slug} className="border-t border-navy/12 pt-4 sm:pt-5">
            <p className="label-eyebrow text-teal">{r.topic}</p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg leading-snug text-navy sm:mt-3 sm:text-xl">
              {r.title}
            </h3>
            {/* Summaries are held back on phones — six of them stacked is what
                made this section read as a wall of text. */}
            <p className="mt-2.5 hidden text-sm leading-relaxed text-slate sm:block">
              {r.summary}
            </p>
            <p className="mt-2 text-xs italic text-slate sm:mt-4">
              {r.published ? "Read article" : "In preparation"}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
