import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { MobileActionBar } from "@/components/site/mobile-action-bar";
import { brand, doctor } from "@/lib/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#10283A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${brand.tagline} | ${doctor.name}`,
    template: `%s | ${doctor.name}`,
  },
  description:
    "Online specialist consultation for gut, liver and pancreatic health. Initial consultations, second opinions, follow-up appointments and medical report review with a gastroenterology and hepatology specialist.",
  keywords: [
    "gastroenterologist",
    "gut specialist",
    "liver specialist",
    "hepatologist",
    "pancreas specialist",
    "online gastroenterology consultation",
    "gastroenterology second opinion",
  ],
  authors: [{ name: doctor.name }],
  openGraph: {
    type: "website",
    title: `${brand.tagline} | ${doctor.name}`,
    description:
      "Expert online consultation, second opinions and personalised specialist guidance for digestive, liver and pancreatic concerns.",
    siteName: doctor.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.tagline} | ${doctor.name}`,
    description:
      "Expert online consultation, second opinions and personalised specialist guidance for digestive, liver and pancreatic concerns.",
  },
  robots: {
    // Phase 1 is an unapproved preview — do not index until content is confirmed.
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", inter.variable, fraunces.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <MobileActionBar />
      </body>
    </html>
  );
}
