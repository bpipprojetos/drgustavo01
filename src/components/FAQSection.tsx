import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O tratamento afeta a ereção?",
    answer: "Absolutamente não. Nossas técnicas são escolhidas especificamente para preservar os nervos e a mecânica da função sexual. A preservação funcional é uma prioridade em todos os procedimentos.",
  },
  {
    question: "É preciso internação longa?",
    answer: "A maioria dos procedimentos modernos permite alta em menos de 24h ou 48h. As técnicas minimamente invasivas que utilizamos são projetadas para uma recuperação rápida e confortável.",
  },
  {
    question: "Quais são os riscos do procedimento?",
    answer: "Os procedimentos minimamente invasivos possuem taxas de complicação significativamente menores do que as cirurgias tradicionais. Na consulta, todos os riscos e benefícios são explicados de forma transparente e individualizada.",
  },
  {
    question: "Quanto tempo leva a recuperação?",
    answer: "Com as técnicas modernas utilizadas, a maioria dos pacientes retorna às atividades normais em poucos dias. O acompanhamento pós-procedimento é estruturado para garantir uma recuperação otimizada.",
  },
  {
    question: "O plano de saúde cobre o tratamento?",
    answer: "Muitos procedimentos urológicos são cobertos por planos de saúde. Orientamos cada paciente sobre as opções de cobertura durante a consulta de avaliação.",
  },
];

const FAQSection = () => {
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
            Dúvidas Frequentes
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Respostas para suas principais dúvidas.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-gold transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
