import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/page-shell";

/**
 * Compliance placeholders. These pages exist so the structure and routing are
 * in place — none of them constitutes a policy that is in force, and the site
 * makes no claim of compliance with any data protection regime.
 */
const legalPages = {
  privacy: {
    title: "Privacy Policy",
    lead: "How patient information is collected, used and retained. This policy is in preparation and is not yet in force.",
  },
  cookies: {
    title: "Cookie Policy",
    lead: "How this website uses cookies and similar technologies. This policy is in preparation and is not yet in force.",
  },
  terms: {
    title: "Terms of Use",
    lead: "The terms on which this website and its consultation services are offered. These terms are in preparation and are not yet in force.",
  },
  "medical-disclaimer": {
    title: "Medical Disclaimer",
    lead: "The limits of the information and services provided through this website, including that it is not suitable for emergencies.",
  },
  "data-processing": {
    title: "Data Processing Information",
    lead: "How medical documents and patient data are processed, stored and protected. This information is in preparation.",
  },
  "patient-consent": {
    title: "Patient Consent",
    lead: "The consent you will be asked to give before any medical document is shared or retained. This document is in preparation.",
  },
} as const;

type Slug = keyof typeof legalPages;

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

type LegalPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug as Slug];
  if (!page) return {};
  return { title: page.title, description: page.lead };
}

export default async function Page({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalPages[slug as Slug];
  if (!page) notFound();

  return (
    <PageShell
      eyebrow="Legal"
      title={page.title}
      lead={page.lead}
      phaseNote={false}
    >
      <div className="border border-dashed border-rule bg-blue-light/40 p-7">
        <p className="label-eyebrow text-slate">Not yet in force</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
          This document has not been drafted or reviewed. The page exists so the
          structure is in place for proper compliance work to be completed
          before the website goes live. Publishing these pages does not by
          itself make the service compliant with any data protection regime.
        </p>
      </div>
    </PageShell>
  );
}
