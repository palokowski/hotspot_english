import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, CalendarDays, Sparkles, Eye } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ValoresHorarios = () => (
  <>
    {/* Hero */}
    <section className="bg-secondary py-16 text-center md:py-24" aria-labelledby="vh-title">
      <div className="container">
        <motion.h1 id="vh-title" className="text-3xl font-extrabold text-secondary-foreground md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Valores, Horários & Serviços
        </motion.h1>
        <motion.p className="mx-auto mt-4 max-w-lg text-secondary-foreground/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Tudo o que você precisa saber antes de matricular seu filho(a).
        </motion.p>
      </div>
    </section>

    {/* Valores */}
    <section className="py-16 md:py-24" aria-labelledby="valores-title">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2 id="valores-title" className="text-2xl font-extrabold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          Investimento
        </motion.h2>
        <motion.p className="mx-auto mt-4 max-w-lg text-muted-foreground" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          Os valores variam de acordo com a <strong>faixa etária</strong> e o <strong>plano escolhido</strong> (Regular ou Imersivo). Para saber exatamente quanto fica para o seu caso, entre em contato:
        </motion.p>
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          aria-label="Consultar valores no WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Consultar valores
        </motion.a>
      </div>
    </section>

    {/* Horários */}
    <section className="section-warm py-16 md:py-24" aria-labelledby="horarios-title">
      <div className="container mx-auto max-w-2xl">
        <motion.h2 id="horarios-title" className="text-center text-2xl font-extrabold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <CalendarDays className="inline-block mr-2 h-7 w-7 text-primary" />
          Horários de Funcionamento
        </motion.h2>
        <motion.div className="mt-8 overflow-hidden rounded-xl border border-border bg-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-4 py-3 text-left font-bold">Dia</th>
                <th className="px-4 py-3 text-left font-bold">Horário</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Segunda a Sexta", "08:00 – 18:00"],
                ["Sábado", "08:00 – 12:00"],
                ["Domingo", "Fechado"],
              ].map(([day, hours], i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">{day}</td>
                  <td className="px-4 py-3 text-muted-foreground">{hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <p className="mt-3 text-center text-xs text-muted-foreground">* Horários sujeitos a alteração. Confirme pelo WhatsApp.</p>
      </div>
    </section>

    {/* Serviços */}
    <section className="py-16 md:py-24" aria-labelledby="servicos-title">
      <div className="container mx-auto max-w-3xl">
        <motion.h2 id="servicos-title" className="text-center text-2xl font-extrabold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <Sparkles className="inline-block mr-2 h-7 w-7 text-primary" />
          Nossos Serviços
        </motion.h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: <Eye className="h-6 w-6 text-primary" />, title: "Aula demonstrativa", desc: "Conheça a metodologia na prática, sem compromisso." },
            { icon: <Sparkles className="h-6 w-6 text-secondary" />, title: "Tour pela escola", desc: "Visite nossas instalações e conheça a equipe." },
            { icon: <CalendarDays className="h-6 w-6 text-accent-foreground" />, title: "Orientação de turma", desc: "Indicamos a melhor turma pela idade e nível do aluno." },
          ].map((s, i) => (
            <motion.div key={i} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">{s.icon}</div>
              <h3 className="text-sm font-bold">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Depoimentos */}
    <section className="section-cool py-16 md:py-24" aria-labelledby="dep-title">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 id="dep-title" className="text-2xl font-extrabold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          Depoimentos
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { name: "Carla P.", role: "Mãe de aluno, 5 anos", text: "Meu filho começou tímido e em pouco tempo já estava soltando palavras em inglês no dia a dia!" },
            { name: "Ana Luísa R.", role: "Mãe de aluna, 10 anos", text: "O acompanhamento é incrível. A professora sempre nos atualiza sobre o progresso." },
            { name: "Pedro H.", role: "Aluno, 14 anos", text: "As aulas são divertidas e eu consigo usar o inglês de verdade, não fico só decorando." },
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

    {/* FAQ */}
    <section className="py-16 md:py-24" aria-labelledby="faq-title">
      <div className="container mx-auto max-w-2xl">
        <motion.h2 id="faq-title" className="text-center text-2xl font-extrabold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          Perguntas Frequentes
        </motion.h2>
        <div className="mt-8 space-y-3">
          <FaqItem q="A partir de que idade vocês atendem?" a="A partir de 4 anos! Temos turmas adequadas para cada faixa etária." />
          <FaqItem q="Vocês atendem adultos?" a="Não. Nosso foco é exclusivamente crianças e adolescentes de 4 a 18 anos." />
          <FaqItem q="Qual curso é melhor: Regular ou Imersivo?" a="Depende da rotina e do objetivo. O Regular é ótimo para constância; o Imersivo acelera o resultado com mais horas de exposição. Converse conosco para decidir!" />
          <FaqItem q="Meu filho entende mas não fala inglês…" a="Isso é muito comum! Na Hotspot, trabalhamos exatamente esse 'destravamento'. O aluno pratica conversação em um ambiente seguro, onde errar é parte do processo." />
          <FaqItem q="Como agendo uma aula demonstrativa?" a="Pelo WhatsApp! Basta clicar no botão verde e enviar uma mensagem. A gente responde rápido." />
        </div>
      </div>
    </section>
  </>
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

export default ValoresHorarios;
