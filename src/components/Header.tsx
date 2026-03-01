import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/assets/logo-hotspot.png";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Cursos", to: "/cursos" },
  { label: "Valores & Horários", to: "/valores-horarios" },
  { label: "Contato", to: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Hotspot English School — Página inicial">
          <img src={logo} alt="Logo Hotspot English School" className="h-12 w-auto md:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-md px-4 py-2 text-sm font-semibold font-heading transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary ${
                pathname === item.to ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-bold text-whatsapp-foreground shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-whatsapp"
            aria-label="Chamar no WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground md:hidden focus-visible:outline-2 focus-visible:outline-primary"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-4 py-3 text-base font-semibold font-heading transition-colors hover:bg-muted ${
                pathname === item.to ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-base font-bold text-whatsapp-foreground"
            aria-label="Chamar no WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default Header;
