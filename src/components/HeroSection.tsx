import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import doctorPhoto from "@/assets/doctor-hero-real.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-navy-deep overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light opacity-90" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium"
              >
                Dr. Gustavo Mota · Urologista
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                Sua rotina e sua vida sexual{" "}
                <span className="text-gradient-gold">não precisam ser reféns</span>{" "}
                da próstata.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-primary-foreground/70 font-body leading-relaxed max-w-xl">
              Tratamentos modernos para HPB e Disfunções Urinárias com foco em recuperação rápida e total preservação da função sexual. Tecnologia avançada em Itajaí e Balneário Camboriú.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5547999452698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-navy-deep font-body font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar avaliação com o especialista
              </a>
            </div>

            <p className="text-primary-foreground/50 text-sm font-body">
              Atendimento premium e discreto para homens exigentes.
            </p>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={doctorPhoto}
                alt="Dr. Gustavo Mota - Urologista especialista em HPB"
                className="relative rounded-2xl shadow-elevated w-full max-w-lg object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z" fill="hsl(210, 20%, 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
