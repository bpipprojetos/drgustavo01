import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, BookOpen, Globe } from "lucide-react";
import doctorPhoto from "@/assets/doctor-photo.png";
import consultationImg from "@/assets/consultation.png";

const formations = [
  "Medicina – Faculdade de Ciências Médicas de Minas Gerais, BH, MG",
  "Cirurgia Geral / Residência Médica – Hospital da Baleia, Belo Horizonte, MG",
  "Urologia / Residência Médica – Hospital Vera Cruz, Belo Horizonte, MG",
  "FellowShip em Laparoscopia – WLH / Nicholson Center, Orlando, FL, USA",
];

const memberships = [
  "Membro Titular da SBU – Sociedade Brasileira de Urologia",
  "Membro do EAU – European Association of Urology",
  "Membro da AUA – American Urological Association",
  "Membro da ICS – International Continence Society",
];

const activities = [
  "Urologista na Unimed Litoral / Hospital Unimed Litoral",
  "Urologista / Diretor Técnico no UROCenter SC",
  "Coordenação do Departamento Cirúrgico no Hospital Unimed Litoral",
  "Professor de Urologia na UNIVALI",
  "Gestão Executiva em Saúde – DRG Unimed Litoral",
];

const legacy = [
  "Coordenador do Serviço de Urologia do Hospital Municipal Ruth Cardoso (HMRC) de 2012 – 2022",
  "Coordenador do Serviço de Urologia do Hospital Unimed Litoral (2016-2020)",
  "Coordenador do Departamento Cirúrgico do Hospital Unimed Litoral (2020-2024)",
  "Diretor Técnico do UROCenter SC – Clínica Urológica referência em Balneário Camboriú e Itajaí",
  "Membro do Comitê de Ética do Hospital Unimed Litoral (2017-2019)",
  "Membro do Comitê de Ética do Hospital do Coração BC (2021-2023)",
];

const AboutDoctorSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Intro with photo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/15 to-navy/10 rounded-2xl blur-xl" />
              <img
                src={doctorPhoto}
                alt="Dr. Gustavo de Oliveira Mota – Urologista"
                className="relative rounded-2xl shadow-elevated w-full object-cover max-h-[520px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
              Conheça o Especialista
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Dr. Gustavo de Oliveira Mota
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Urologista – Titular da Sociedade Brasileira de Urologia
            </p>
            <p className="text-muted-foreground font-body font-semibold">
              CRM-SC: 18.530 / RQE: 10.267
            </p>
            <div className="h-px bg-border" />
            <div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                Especialização e Reconhecimento
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Dr. Gustavo é reconhecido na região por sua atuação na subárea das Disfunções Miccionais e do Assoalho Pélvico, à qual se dedica plenamente.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mt-3">
                A realização com excelência de exames específicos, como Estudo Urodinâmico e VideoUrodinâmico, o levou a ser o principal urologista a realizá-los na região.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mt-3">
                O tratamento de condições como a Hiperplasia Prostática Benigna (HPB), Incontinência Urinária Masculina e Feminina, e Transtornos Funcionais da Micção também são destaques em sua atuação profissional.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Formations & Memberships */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Formação Profissional</h3>
            </div>
            <ul className="space-y-3">
              {formations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground font-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Sociedades Médicas</h3>
            </div>
            <ul className="space-y-3">
              {memberships.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground font-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Activities + Consultation image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Atividades Atuais</h3>
            </div>
            <ul className="space-y-3">
              {activities.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground font-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-navy/10 to-gold/10 rounded-2xl blur-xl" />
              <img
                src={consultationImg}
                alt="Consulta médica com atendimento humanizado"
                className="relative rounded-2xl shadow-elevated w-full object-cover max-h-[400px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Legacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-navy" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">Construindo Legados em Saúde</h3>
          </div>
          <p className="text-muted-foreground font-body mb-6">
            Dr. Gustavo atuou de forma dedicada em vários serviços de saúde na região do Vale do Itajaí. Cita-se alguns:
          </p>
          <ul className="space-y-3 columns-1 md:columns-2 gap-8">
            {legacy.map((item, i) => (
              <li key={i} className="flex items-start gap-3 break-inside-avoid mb-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground font-body text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;
