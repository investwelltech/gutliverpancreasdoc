import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/config/site";

/**
 * Floating WhatsApp button, mobile first.
 *
 * It sits above the safe-area inset so it clears the iOS home indicator, and
 * is a 56px circle so it comfortably exceeds the 44px touch-target minimum.
 * The number is never rendered - only an accessible label.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Dr. Pratik Agrawal on WhatsApp"
      className="fixed right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-lg shadow-navy/20 transition-colors duration-200 hover:bg-teal-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:right-7"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      <MessageCircle size={24} strokeWidth={1.9} aria-hidden="true" />
    </a>
  );
}
