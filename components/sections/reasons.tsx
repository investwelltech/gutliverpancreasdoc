import { Section, SectionHeading } from "@/components/site/section";
import { reasonsToConsult } from "@/lib/content/reasons";

export function Reasons() {
  return (
    <Section id="reasons" tone="navy">
      <SectionHeading
        eyebrow="Reasons to consult"
        tone="light"
        title="You may recognise one of these situations"
        lead="Most patients book for a reason that has less to do with a diagnosis and more to do with an unanswered question."
      />

      <ul className="mt-14 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {reasonsToConsult.map((r) => (
          <li key={r.title} className="border-t border-white/18 pt-5">
            <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-white">
              {r.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-white/65">
              {r.description}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-white/50">
        This service supports the care you already receive. It does not replace
        your treating doctor, and it is not appropriate for emergencies.
      </p>
    </Section>
  );
}
