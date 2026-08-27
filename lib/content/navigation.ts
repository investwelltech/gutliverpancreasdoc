export type NavLink = { label: string; href: string; description?: string };

export type NavItem = NavLink & { children?: NavLink[] };

/** Desktop header. "Conditions" groups the three organ-system pages. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Conditions",
    href: "/conditions",
    children: [
      {
        label: "Gut",
        href: "/gut",
        description: "Digestive and gastrointestinal concerns",
      },
      {
        label: "Liver",
        href: "/liver",
        description: "Liver health and abnormal results",
      },
      {
        label: "Pancreas",
        href: "/pancreas",
        description: "Specialist pancreatic evaluation",
      },
    ],
  },
  { label: "Consultations", href: "/consultations" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

/** Flat list used by the footer. */
export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gut", href: "/gut" },
  { label: "Liver", href: "/liver" },
  { label: "Pancreas", href: "/pancreas" },
  { label: "Consultations", href: "/consultations" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" },
  { label: "Data Processing", href: "/legal/data-processing" },
  { label: "Patient Consent", href: "/legal/patient-consent" },
];
