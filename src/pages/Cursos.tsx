import { motion } from "framer-motion";
import { BookOpen, Zap, CheckCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Cursos = () => (
  <>
    {/* Hero */}
    <section className="bg-primary py-16 text-center md:py-24" aria-labelledby="cursos-title">
      <div className="container">
        <motion.h1 id="cursos-title" className="text-3xl font-extrabold text-primary-foreground md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Nossos Cursos
        </motion.h1>
        <motion.p className="mx-auto mt-4 max-w-lg text-primary-foreground/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Duas opções pensadas para diferentes rotinas e objetivos — ambas com a mesma qualidade Hotspot.
        </motion.p>
      </div>
    </section>

    {/* Cards */}
    <section className="py-16 md:py-24" aria-labelledby="cursos-catalog">
      <h2 id="cursos-catalog" className="sr-only">Catálogo de cursos</h2>
      <div className="container mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <CourseCard
          icon={<BookOpen className="h-8 w-8 text-primary" />}
          title="Curso Regular"
          subtitle="2× por semana"
          desc="Ideal para quem busca constância e evolução semanal. Aulas com foco em comunicação, vocabulário contextualizado e muita prática oral."
          audience="Crianças (4+) e adolescentes até 18 anos"
          benefits={["Constância e evolução progressiva", "Prática oral todas as aulas", "Material atualizado e dinâmico", "Turmas por faixa etária"]}
          delay={0}
        />
        <CourseCard
          icon={<Zap className="h-8 w-8 text-secondary" />}
          title="Curso Imersivo"
          subtitle="Contraturno escolar"
          desc="Mais horas de exposição ao idioma. O aluno vive o inglês no contraturno, com atividades variadas que simulam o uso real da língua."
          audience="Crianças e adolescentes com disponibilidade no contraturno"
          benefits={["Maior exposição ao idioma", "Atividades variadas e dinâmicas", "Acelera a fluência", "Ideal para quem quer mais prática"]}
          delay={1}
        />
      </div>
    </section>

    {/* Como escolher */}
    <section className="section-warm py-16 md:py-24" aria-labelledby="escolher-title">
      <div className="container mx-auto max-w-2xl">
        <motion.h2 id="escolher-title" className="text-center text-2xl font-extrabold md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          Como escolher o curso ideal?
        </motion.h2>
        <motion.ul className="mt-8 space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          {[
            "Seu filho tem pouco tempo livre? → Curso Regular (2×/semana)",
            "Quer mais exposição e resultado acelerado? → Curso Imersivo",
            "Não tem certeza? Agende uma aula demonstrativa + tour — a gente ajuda!",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm">
              <CheckCircle className="h-5 w-5 shrink-0 text-whatsapp mt-0.5" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center md:py-24">
      <div className="container">
        <h2 className="text-2xl font-extrabold md:text-3xl">Ficou com alguma dúvida?</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">Fale com a gente pelo WhatsApp e agende uma aula demonstrativa + tour pela escola.</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-base font-bold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
          aria-label="Agendar aula demonstrativa no WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Agendar aula demonstrativa + tour
        </a>
      </div>
    </section>
  </>
);

const CourseCard = ({ icon, title, subtitle, desc, audience, benefits, delay }: {
  icon: React.ReactNode; title: string; subtitle: string; desc: string; audience: string; benefits: string[]; delay: number;
}) => (
  <motion.div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={delay}>
    <div className="mb-4 flex items-center gap-3">
      {icon}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm font-semibold text-muted-foreground">{subtitle}</p>
      </div>
    </div>
    <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
    <p className="mt-4 text-xs font-bold text-secondary">Para quem: <span className="font-normal text-muted-foreground">{audience}</span></p>
    <ul className="mt-4 flex-1 space-y-2">
      {benefits.map((b, i) => (
        <li key={i} className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 shrink-0 text-primary" /> {b}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Cursos;
