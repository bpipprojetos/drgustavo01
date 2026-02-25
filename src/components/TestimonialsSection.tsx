import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Depois da avaliação, finalmente entendi o que estava acontecendo e consegui melhorar minha rotina. O Dr. Gustavo foi extremamente atencioso.",
    author: "J.R., 58 anos",
    location: "Itajaí, SC",
  },
  {
    text: "Voltei a dormir a noite inteira sem precisar levantar várias vezes. A qualidade de vida mudou completamente após o tratamento.",
    author: "M.S., 64 anos",
    location: "Balneário Camboriú, SC",
  },
  {
    text: "Tinha muito medo da cirurgia, mas o procedimento foi minimamente invasivo e tive alta no mesmo dia. Recomendo a todos.",
    author: "A.C., 52 anos",
    location: "Itajaí, SC",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light opacity-80" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Histórias de quem recuperou a qualidade de vida.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-gold/40 mb-4" />
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-primary-foreground font-body font-semibold text-sm">
                  {testimonial.author}
                </p>
                <p className="text-primary-foreground/50 font-body text-sm">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
