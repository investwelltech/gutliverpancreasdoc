import { Section, SectionHeading } from "@/components/site/section";
import { journeySteps } from "@/lib/content/journey";

export function Journey() {
  return (
    <Section id="how-it-works" tone="warm">
      <SectionHeading
        eyebrow="How online consultation works"
        title="Six steps, and you know what happens at each one"
        lead="The appointment itself is only part of it. Most of the value comes from what is prepared before, and what you are left with afterwards."
      />

      {/* Numbered because this genuinely is an ordered sequence */}
      <ol className="mt-14 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {journeySteps.map((s) => (
          <li
            key={s.step}
            className="group relative bg-warm-white p-7 transition-colors duration-200 hover:bg-blue-light lg:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-display)] text-[2.5rem] leading-none text-teal/22 transition-colors duration-200 group-hover:text-teal/40">
                {String(s.step).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-rule"
              />
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl leading-snug text-navy">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              {s.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-xs italic text-slate">
        Booking, scheduling and secure upload are in development. Availability
        will be published here once they are live.
      </p>
    </Section>
  );
}
