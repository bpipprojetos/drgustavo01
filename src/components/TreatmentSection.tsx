import { motion } from "framer-motion";
import { Zap, Shield, Scissors } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Recuperação Acelerada",
    description: "Volte às suas atividades em tempo recorde. A maioria dos procedimentos permite alta em menos de 24h.",
  },
  {
    icon: Shield,
    title: "Segurança Funcional",
    description: "Proteção máxima da ereção e da continência. Técnicas escolhidas para preservar nervos e função sexual.",
  },
  {
    icon: Scissors,
    title: "Sem Cortes Tradicionais",
    description: "Procedimentos minimamente invasivos com tecnologias laser de última geração (HoLEP).",
  },
];

const TreatmentSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium mb-4">
            O Novo Caminho
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            A ciência urológica a favor da sua{" "}
            <span className="text-gold">performance.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Dr. Gustavo Mota utiliza as técnicas mais modernas do mundo para tratar a HPB e a Incontinência Masculina.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
