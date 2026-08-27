import { Section, SectionHeading } from "@/components/site/section";
import { reasonsToConsult } from "@/lib/content/reasons";

export function Reasons() {
  return (
    <Section id="reasons" tone="navy">
      <SectionHeading
        eyebrow="Reasons to consult"
        tone="light"
        title="You may recognise one of these situations"
        lead="Most people seek a specialist opinion for a reason that has less to do with a diagnosis and more to do with an unanswered question."
      />

      {/* On a phone the titles alone carry this section — the descriptions are
          elaboration, so they appear from `sm` up. */}
      <ul className="mt-8 grid gap-x-12 gap-y-5 sm:mt-14 sm:gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {reasonsToConsult.map((r) => (
          <li key={r.title} className="border-t border-white/18 pt-4 sm:pt-5">
            <h3 className="font-[family-name:var(--font-display)] text-base leading-snug text-white sm:text-lg">
              {r.title}
            </h3>
            <p className="mt-2.5 hidden text-sm leading-relaxed text-white/65 sm:block">
              {r.description}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-white/50 sm:mt-12 sm:text-sm">
        This information supports the care you already receive. It does not
        replace your treating doctor and is not for emergencies.
      </p>
    </Section>
  );
}
