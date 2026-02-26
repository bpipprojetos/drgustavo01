import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import lifestyleMan1 from "@/assets/lifestyle-man-1.jpg";
import lifestyleMan2 from "@/assets/lifestyle-man-2.jpg";

const LifestyleSections = () => {
  return (
    <>
      {/* Section 1 — Retomar o controle */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          {/* Image */}
          <div className="relative h-[360px] lg:h-auto">
            <img
              src={lifestyleMan1}
              alt="Homem maduro saudável ao ar livre"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-deep/30 lg:bg-gradient-to-r lg:from-transparent lg:to-navy-deep/60" />
          </div>

          {/* Text */}
          <div className="bg-navy-deep flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="px-8 py-14 lg:px-16 lg:py-20 max-w-xl"
            >
              <p className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium mb-4">
                Qualidade de vida
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight mb-6">
                Viver bem não é um privilégio.{" "}
                <span className="text-gradient-gold">É uma escolha.</span>
              </h2>
              <p className="text-primary-foreground/70 font-body text-lg leading-relaxed mb-8">
                Muitos homens convivem com desconfortos que poderiam ser resolvidos. Acordar sem urgência, dormir sem interrupções e viver com liberdade — tudo isso está ao seu alcance.
              </p>
              <a
                href="https://wa.me/5547999452698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-navy-deep font-body font-semibold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Quero retomar minha qualidade de vida
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Disposição e energia */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          {/* Text (left on desktop) */}
          <div className="bg-navy flex items-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="px-8 py-14 lg:px-16 lg:py-20 max-w-xl ml-auto"
            >
              <p className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium mb-4">
                Disposição real
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight mb-6">
                Seu corpo merece a mesma atenção{" "}
                <span className="text-gradient-gold">que você dá à sua carreira.</span>
              </h2>
              <p className="text-primary-foreground/70 font-body text-lg leading-relaxed mb-8">
                Cuidar da saúde urológica é um ato de inteligência. Homens que se antecipam vivem mais e melhor — com energia, confiança e tranquilidade.
              </p>
              <a
                href="https://wa.me/5547999452698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-navy-deep font-body font-semibold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Dar o primeiro passo agora
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <div className="relative h-[360px] lg:h-auto order-1 lg:order-2">
            <img
              src={lifestyleMan2}
              alt="Homem maduro correndo com energia ao amanhecer"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/30 lg:bg-gradient-to-l lg:from-transparent lg:to-navy/60" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LifestyleSections;
