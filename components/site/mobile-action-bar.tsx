import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { whatsappHref } from "@/lib/config/site";

/**
 * Discreet sticky action bar for mobile: WhatsApp | Contact.
 *
 * There is no "Book" action — consulting is not open yet (see `services` in
 * lib/config/site.ts), so the two routes offered are the two that actually
 * work. Icons and short labels only; no phone number or email is ever shown.
 * Footer padding reserves space so the bar never obscures content.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-warm-white/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-px bg-rule">
        <Link
          href="/contact"
          className="flex min-h-[52px] items-center justify-center gap-2 bg-warm-white px-3 text-sm font-medium text-navy"
        >
          <Mail size={16} strokeWidth={1.9} aria-hidden="true" />
          Contact
        </Link>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] items-center justify-center gap-2 bg-navy px-3 text-sm font-medium text-white"
        >
          <MessageCircle size={16} strokeWidth={1.9} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-warm-white" />
    </div>
  );
}
