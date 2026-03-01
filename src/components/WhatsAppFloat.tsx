import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./Header";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-soft transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
    aria-label="Chamar no WhatsApp"
  >
    <WhatsAppIcon className="h-7 w-7" />
  </a>
);

export default WhatsAppFloat;
