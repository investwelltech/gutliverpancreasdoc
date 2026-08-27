export type NavLink = { label: string; href: string; description?: string };

export type NavItem = NavLink & { children?: NavLink[] };

/**
 * The homepage is the portfolio, so the primary nav is a set of anchors into
 * it rather than a set of routes. The organ pages (/gut, /liver, /pancreas)
 * are reached from the expertise cards instead of a dropdown, and /resources
 * stays out of the nav until there are published articles behind it.
 */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
