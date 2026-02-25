import { motion } from "framer-motion";
import { AlertTriangle, Moon, Droplets, Clock, ShieldAlert, Gauge } from "lucide-react";

const symptoms = [
  { icon: Gauge, text: "Jato urinário fraco ou interrompido" },
  { icon: Clock, text: "Demora para começar a urinar" },
  { icon: Droplets, text: "Sensação de bexiga que nunca esvazia" },
  { icon: Moon, text: "Acordar várias vezes à noite para urinar" },
  { icon: ShieldAlert, text: "Urgência que gera insegurança social" },
  { icon: AlertTriangle, text: "Pequenos vazamentos ou perda de controle" },
];

const SymptomsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            A interrupção silenciosa da sua{" "}
            <span className="text-gold">qualidade de vida.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Você não precisa aceitar como "normal" acordar 4 vezes por noite ou planejar seu trajeto baseado em onde estão os banheiros.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {symptoms.map((symptom, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border border-border hover:shadow-card transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
                <symptom.icon className="w-6 h-6 text-navy" />
              </div>
              <p className="text-foreground font-body font-medium leading-snug pt-2">
                {symptom.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-muted-foreground font-body max-w-2xl mx-auto"
        >
          Ignorar esses sinais não é apenas desconfortável; é um{" "}
          <strong className="text-foreground">risco para a sua saúde prostática</strong> a longo prazo.
        </motion.p>
      </div>
    </section>
  );
};

export default SymptomsSection;
