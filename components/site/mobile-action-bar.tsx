import { MessageCircle, CalendarDays } from "lucide-react";
import Link from "next/link";
import { whatsappHref, bookingHref } from "@/lib/config/site";

/**
 * Discreet sticky action bar for mobile: WhatsApp | Book Consultation.
 * Icons + short labels only — no phone number or email is ever shown.
 * Body padding (see layout) reserves space so it never obscures content.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-warm-white/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-px bg-rule">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] items-center justify-center gap-2 bg-warm-white px-3 text-sm font-medium text-teal"
        >
          <MessageCircle size={17} strokeWidth={1.9} aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          href={bookingHref()}
          className="flex min-h-[52px] items-center justify-center gap-2 bg-navy px-3 text-sm font-medium text-white"
        >
          <CalendarDays size={17} strokeWidth={1.9} aria-hidden="true" />
          Book
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-warm-white" />
    </div>
  );
}
