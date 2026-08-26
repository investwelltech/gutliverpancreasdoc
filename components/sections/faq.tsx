import { Section, SectionHeading } from "@/components/site/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/content/faq";

export function Faq() {
  return (
    <Section id="faq" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          eyebrow="Questions"
          title="Before you book"
          lead="If your question isn't answered here, send it over on WhatsApp and it will be answered directly."
        />

        <Accordion className="rounded-none border-x-0 border-b-0 border-t border-rule">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-rule data-open:bg-blue-light/50"
            >
              <AccordionTrigger className="p-0 py-5 font-[family-name:var(--font-display)] text-[1.0625rem] leading-snug text-navy hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 text-sm leading-relaxed text-slate">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
