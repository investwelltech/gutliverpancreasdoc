export type NavLink = { label: string; href: string; description?: string };

export type NavItem = NavLink & { children?: NavLink[] };

/** Desktop header. "Conditions" groups the three organ-system pages. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  /* Anchors the homepage's "Meet your specialist" section — there is no
     separate About page. */
  { label: "About", href: "/#about" },
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
  { label: "Resources", href: "/resources" },
];

/** Flat list used by the footer. */
export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Gut", href: "/gut" },
  { label: "Liver", href: "/liver" },
  { label: "Pancreas", href: "/pancreas" },
  { label: "Resources", href: "/resources" },
];

/*
 * There is no legal navigation. The policy placeholders (privacy, cookies,
 * terms, data processing, patient consent) and their routes were removed at
 * the client's request: none was in force, and a portfolio site that collects
 * nothing has nothing for them to govern. Add them back only alongside real,
 * reviewed policy documents.
 */
