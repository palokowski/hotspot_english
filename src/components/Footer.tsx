import { Link } from "react-router-dom";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, ADDRESS, INSTAGRAM_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./Header";
import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="mb-3 text-xl font-heading font-bold text-primary">Hotspot English School</h3>
          <p className="text-sm leading-relaxed opacity-80">
            Inglês para crianças e adolescentes de 4 a 18 anos em Itapema/SC. Metodologia lúdica e comunicativa.
          </p>
          <p className="mt-3 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary inline-block">
            Atendemos exclusivamente de 4 a 18 anos
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider opacity-60">Navegação</h4>
          <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
            <Link to="/" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Início</Link>
            <Link to="/cursos" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Cursos</Link>
            <Link to="/valores-horarios" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Valores & Horários</Link>
            <Link to="/contato" className="text-sm opacity-80 hover:text-primary hover:opacity-100 transition-colors">Contato</Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider opacity-60">Contato</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:text-primary hover:opacity-100 transition-colors">
              <Phone className="h-4 w-4 shrink-0" /> {WHATSAPP_NUMBER}
            </a>
            <div className="flex items-start gap-2 opacity-80">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {ADDRESS}
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:text-primary hover:opacity-100 transition-colors" aria-label="Instagram da Hotspot English School">
              <Instagram className="h-4 w-4" /> @hotspotenglish.itapema
            </a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-bold text-whatsapp-foreground transition-transform hover:scale-105"
            aria-label="Chamar no WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Hotspot English School — Itapema/SC. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
