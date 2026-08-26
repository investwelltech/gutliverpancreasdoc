import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/config/site";

/**
 * Desktop-only floating WhatsApp entry point. Below `lg` the sticky mobile
 * action bar covers this, so the float is hidden to avoid two competing CTAs.
 * The number is never rendered — only an accessible label.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask a question on WhatsApp"
      className="fixed bottom-7 right-7 z-40 hidden h-13 w-13 items-center justify-center rounded-full border border-teal/25 bg-white text-teal transition-colors duration-200 hover:bg-teal hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:inline-flex lg:h-12 lg:w-12"
    >
      <MessageCircle size={21} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}
