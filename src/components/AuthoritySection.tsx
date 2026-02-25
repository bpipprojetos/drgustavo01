import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin } from "lucide-react";
import doctorImg from "@/assets/doctor-hero.png";

const AuthoritySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/10 to-navy/10 rounded-2xl blur-xl" />
              <img
                src={doctorImg}
                alt="Dr. Gustavo Mota - Especialista em Urologia"
                className="relative rounded-2xl shadow-elevated w-full object-cover max-h-[500px]"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium mb-4">
                Autoridade e Confiança
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Especialista em Performance e Saúde Urológica.
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Dr. Gustavo Mota combina alta precisão técnica com um olhar voltado para a performance masculina. Referência em Itajaí e Balneário Camboriú, seu foco é entregar mais do que cura — é entregar o retorno da autoconfiança.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">CRM-SC 18.530 | RQE 10.267</p>
                  <p className="text-sm text-muted-foreground">Urologista Especialista</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Especialista em HPB e Disfunções Miccionais</p>
                  <p className="text-sm text-muted-foreground">Membro de Sociedades Médicas</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">Itajaí e Balneário Camboriú</p>
                  <p className="text-sm text-muted-foreground">Atendimento Premium</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
