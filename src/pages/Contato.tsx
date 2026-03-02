import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, ADDRESS, INSTAGRAM_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contato = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder: integrate with Formspree by setting form action to https://formspree.io/f/xgoljark
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 text-center md:py-24" aria-labelledby="contato-title">
        <div className="container">
          <motion.h1 id="contato-title" className="text-3xl font-extrabold text-primary-foreground md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Fale Conosco
          </motion.h1>
          <motion.p className="mx-auto mt-4 max-w-lg text-primary-foreground/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Estamos prontos para tirar suas dúvidas e agendar uma visita.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl font-extrabold md:text-3xl">Informações de contato</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Endereço</p>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-bold text-sm">WhatsApp</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{WHATSAPP_NUMBER}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-bold text-sm">E-mail</p>
                  <p className="text-sm text-muted-foreground">hotspot.english@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Instagram</p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">@hotspotenglish.itapema</a>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-7 py-3.5 text-base font-bold text-whatsapp-foreground shadow-md transition-transform hover:scale-105"
              aria-label="Chamar no WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chamar no WhatsApp
            </a>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Localização Hotspot English School"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.0!2d-48.6031672!3d-27.1365893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8af481a0262dd%3A0x80d7e28205e7e72c!2sHotspot%20English%20School!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="text-2xl font-extrabold md:text-3xl">Envie uma mensagem</h2>
            {submitted ? (
              <div className="mt-6 rounded-xl border border-whatsapp bg-whatsapp/10 p-6 text-center">
                <p className="text-lg font-bold text-whatsapp">Mensagem enviada!</p>
                <p className="mt-2 text-sm text-muted-foreground">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-bold">Nome *</label>
                  <input id="name" name="name" type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-2 focus:outline-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-bold">E-mail *</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-2 focus:outline-primary" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="mb-1 block text-sm font-bold">WhatsApp *</label>
                  <input id="whatsapp" name="whatsapp" type="tel" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-2 focus:outline-primary" />
                </div>
                <div>
                  <label htmlFor="age" className="mb-1 block text-sm font-bold">Idade do aluno *</label>
                  <input id="age" name="age" type="number" min="4" max="18" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-2 focus:outline-primary" />
                </div>
                <div>
                  <label htmlFor="course" className="mb-1 block text-sm font-bold">Curso de interesse *</label>
                  <select id="course" name="course" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-2 focus:outline-primary">
                    <option value="">Selecione...</option>
                    <option value="regular">Curso Regular</option>
                    <option value="imersivo">Curso Imersivo</option>
                    <option value="nao-sei">Não sei ainda</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-bold">Mensagem *</label>
                  <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-2 focus:outline-primary" />
                </div>
                <div className="flex items-start gap-2">
                  <input id="lgpd" name="lgpd" type="checkbox" required className="mt-1 h-4 w-4 rounded border-input accent-primary" />
                  <label htmlFor="lgpd" className="text-xs text-muted-foreground">Concordo em ser contatado(a) pela Hotspot English School. *</label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-primary"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contato;
