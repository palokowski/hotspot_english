import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Shield, MessageCircle, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/Header";
import heroImage from "@/assets/hero-image.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Crianças aprendendo inglês em sala de aula" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(30, 95%, 50%, 0.88) 0%, hsla(180, 70%, 45%, 0.82) 100%)" }} />
        </div>
        <div className="container relative z-10 py-20 text-center md:py-32">
          <motion.h1
            id="hero-title"
            className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Inglês para crianças e adolescentes em Itapema
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/90 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Metodologia lúdica e comunicativa para destravar a conversação — de 4+ até 18 anos.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-whatsapp-foreground"
              aria-label="Agendar aula demonstrativa e tour no WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar aula demonstrativa + tour
            </a>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/60 px-7 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-primary-foreground"
            >
              Ver cursos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-warm py-16 md:py-24" aria-labelledby="target-title">
        <div className="container text-center">
          <motion.h2 id="target-title" className="text-2xl font-extrabold md:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Para quem é a Hotspot?
          </motion.h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <TargetCard icon={<Users className="h-8 w-8 text-primary" />} title="Crianças a partir de 4 anos" desc="Ensino lúdico que respeita o ritmo de cada criança e transforma o aprendizado em diversão." delay={1} />
            <TargetCard icon={<BookOpen className="h-8 w-8 text-secondary" />} title="Adolescentes até 18 anos" desc="Conversação, desinibição e fluência para conquistar o mundo." delay={2} />
          </div>
          <motion.p className="mt-8 text-sm font-semibold text-muted-foreground" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            ⚠️ Não atendemos adultos. Nosso foco é 100% em crianças e adolescentes.
          </motion.p>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 md:py-24" aria-labelledby="method-title">
        <div className="container">
          <motion.h2 id="method-title" className="text-center text-2xl font-extrabold md:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Nossa Metodologia
          </motion.h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { icon: <MessageCircle className="h-6 w-6 text-primary" />, title: "Vivência do idioma", text: "A criança aprende ouvindo, falando, brincando e repetindo com sentido — não só preenchendo exercício." },
              { icon: <Shield className="h-6 w-6 text-secondary" />, title: "Ambiente seguro para errar", text: "Errar faz parte. Aqui, cada tentativa é celebrada e fortalece a confiança." },
              { icon: <Star className="h-6 w-6 text-accent" />, title: "Lúdico + comunicativo", text: "Jogos, músicas e situações reais: o inglês vira parte do dia a dia, não matéria chata." },
              { icon: <BookOpen className="h-6 w-6 text-primary" />, title: "Foco em comunicação", text: "Usar o inglês no dia a dia, não só na prova. Destravar a conversação é o nosso maior objetivo." },
            ].map((item, i) => (
              <motion.div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <div className="mb-3 flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-cool py-16 md:py-24" aria-labelledby="diff-title">
        <div className="container text-center">
          <motion.h2 id="diff-title" className="text-2xl font-extrabold md:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Nossos Diferenciais
          </motion.h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Curso Regular", desc: "2× por semana: constância e evolução contínua." },
              { label: "Curso Imersivo", desc: "Contraturno: mais exposição e prática intensiva." },
              { label: "Turmas por faixa etária", desc: "Cada idade no seu ritmo, com atividades adequadas." },
              { label: "Acompanhamento próximo", desc: "Comunicação constante com os pais sobre o progresso." },
            ].map((d, i) => (
              <motion.div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <h3 className="mb-2 text-base font-bold text-primary">{d.label}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24" aria-labelledby="testimonials-title">
        <div className="container text-center">
          <motion.h2 id="testimonials-title" className="text-2xl font-extrabold md:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            O que dizem sobre nós
          </motion.h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { name: "Fernanda M.", role: "Mãe de aluno, 7 anos", text: "Meu filho não queria nem ouvir falar de inglês. Em dois meses, já chegava em casa cantando músicas em inglês!" },
              { name: "Ricardo S.", role: "Pai de aluna, 12 anos", text: "O diferencial é o carinho e a paciência. Minha filha ganhou confiança e hoje conversa em inglês sem medo." },
              { name: "Luísa T.", role: "Aluna, 16 anos", text: "Eu entendia tudo mas travava na hora de falar. Na Hotspot eu destravei e agora consigo conversar naturalmente." },
            ].map((t, i) => (
              <motion.blockquote key={i} className="rounded-xl border border-border bg-card p-6 text-left shadow-sm" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <p className="text-sm italic leading-relaxed text-muted-foreground">"{t.text}"</p>
                <footer className="mt-4">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-warm py-16 md:py-24" aria-labelledby="faq-title">
        <div className="container mx-auto max-w-2xl">
          <motion.h2 id="faq-title" className="text-center text-2xl font-extrabold md:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Perguntas frequentes
          </motion.h2>
          <div className="mt-8 space-y-3">
            <FaqItem q="A partir de que idade vocês atendem?" a="A partir de 4 anos! Temos turmas especiais para os pequenos, respeitando o ritmo de cada faixa etária." />
            <FaqItem q="Vocês atendem adultos?" a="Não. Nosso foco é exclusivamente crianças e adolescentes de 4 a 18 anos." />
            <FaqItem q="Como faço para agendar?" a="Chame a gente no WhatsApp! Você agenda uma aula demonstrativa + tour pela escola, tudo sem compromisso." />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 text-center md:py-24" aria-labelledby="cta-final">
        <div className="container">
          <motion.h2 id="cta-final" className="text-2xl font-extrabold md:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Vem conhecer a Hotspot!
          </motion.h2>
          <motion.p className="mx-auto mt-4 max-w-lg text-muted-foreground" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Agende uma aula demonstrativa gratuita + tour pela escola. Venha ver de perto como funciona a nossa metodologia.
          </motion.p>
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            aria-label="Agendar aula demonstrativa no WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar aula demonstrativa + tour
          </motion.a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hotspot English School",
            address: { "@type": "PostalAddress", streetAddress: "Rua 276, 505", addressLocality: "Itapema", addressRegion: "SC", postalCode: "88220-000", addressCountry: "BR" },
            geo: { "@type": "GeoCoordinates", latitude: -27.1365893, longitude: -48.6031672 },
            telephone: "+5547988116413",
            url: "https://hotspotenglish.com.br",
            sameAs: ["https://www.instagram.com/hotspotenglish.itapema/"],
            openingHours: ["Mo-Fr 08:00-18:00"],
            description: "Escola de inglês para crianças e adolescentes de 4 a 18 anos em Itapema/SC.",
          }),
        }}
      />
    </>
  );
};

const TargetCard = ({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) => (
  <motion.div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 shadow-sm text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={delay}>
    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-muted">{icon}</div>
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </motion.div>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-4 text-left text-sm font-bold hover:bg-muted/50 transition-colors focus-visible:outline-2 focus-visible:outline-primary" aria-expanded={open}>
        {q}
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && <div className="border-t border-border px-4 pb-4 pt-3 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
};

export default Index;
