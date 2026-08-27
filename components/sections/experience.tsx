import { Section, SectionHeading } from "@/components/site/section";
import { experience, education } from "@/lib/content/doctor-profile";

/**
 * Clinical experience and education as one compact vertical timeline.
 *
 * The per-role descriptive paragraphs are deliberately not rendered: role,
 * place and dates are the record, and the brief asks that the descriptions not
 * be repeated. The rail is a single left border with a dot per entry, which
 * stacks cleanly at 360px without a second column.
 */
function Timeline({
  items,
}: {
  items: { title: string; meta: string; period: string; note?: string }[];
}) {
  return (
    <ol className="relative mt-6 border-l border-rule pl-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="relative pb-7 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[1.8125rem] top-1.5 h-2 w-2 rounded-full bg-teal"
          />
          <p className="text-[0.8125rem] tabular-nums text-slate">
            {item.period}
          </p>
          <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg leading-snug text-navy">
            {item.title}
            {item.note && (
              <span className="ml-2 align-middle text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-teal">
                {item.note}
              </span>
            )}
          </h3>
          <p className="mt-0.5 text-base leading-relaxed text-slate">
            {item.meta}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <Section id="experience" tone="clinical">
      <SectionHeading eyebrow="Experience" title="Clinical experience and education" />

      <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="label-eyebrow text-slate">Clinical experience</h3>
          <Timeline
            items={experience.map((e) => ({
              title: e.role,
              meta: `${e.org} · ${e.location}`,
              period: e.period,
            }))}
          />
        </div>

        <div>
          <h3 className="label-eyebrow text-slate">Education</h3>
          <Timeline
            items={education.map((ed) => ({
              title: ed.award,
              meta: ed.org,
              period: ed.period,
              note: ed.inProgress ? "In training" : undefined,
            }))}
          />
        </div>
      </div>
    </Section>
  );
}
