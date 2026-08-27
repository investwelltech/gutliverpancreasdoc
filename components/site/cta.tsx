import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/config/site";

/*
 * Only the plain link button remains. The WhatsApp, email and enquiry actions
 * were removed with the contact route — no contact call-to-action appears
 * anywhere on the site. The href helpers stay in lib/config/site.ts, so
 * restoring a channel means re-adding a button here, not re-finding the value.
 */

const ctaVariants = cva(
  // min-h keeps every control at a comfortable touch target on mobile.
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-navy text-white hover:bg-teal-deep",
        outline:
          "border border-navy/20 text-navy hover:border-navy/45 hover:bg-navy/[0.03]",
        /** Understated tertiary action — used for WhatsApp in the hero. */
        quiet: "text-teal hover:text-teal-deep hover:underline underline-offset-4",
        onNavy: "bg-white text-navy hover:bg-blue-soft",
        onNavyOutline:
          "border border-white/25 text-white hover:border-white/60 hover:bg-white/10",
      },
      size: {
        sm: "h-9 min-h-9 px-4",
        md: "h-11 px-5",
        lg: "h-[50px] px-6 text-[0.9375rem]",
      },
      block: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", block: false },
  }
);

type CtaProps = VariantProps<typeof ctaVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
};

export function Cta({
  href,
  children,
  variant,
  size,
  block,
  className,
  external,
  ...rest
}: CtaProps) {
  const classes = cn(ctaVariants({ variant, size, block }), className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** WhatsApp action. Renders a label, never the number. */
export function WhatsAppCta({
  children = "Message on WhatsApp",
  ...props
}: Omit<CtaProps, "href" | "children"> & { children?: React.ReactNode }) {
  return (
    <Cta href={whatsappHref()} external {...props}>
      <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
      {children}
    </Cta>
  );
}

export { ctaVariants };
