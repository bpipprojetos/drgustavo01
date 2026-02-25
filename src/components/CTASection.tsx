import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Não deixe para amanhã a saúde que você{" "}
            <span className="text-gold">precisa hoje.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-10">
            Quanto antes o diagnóstico é feito, maiores são as opções de tratamento e menores as complicações. Agende sua avaliação personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5547999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-navy-deep font-body font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 hover:shadow-elevated"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com a equipe no WhatsApp
            </a>
          </div>

          {/* Locations */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">Itajaí</p>
                <p className="text-muted-foreground font-body text-sm">
                  Rua Exemplo, 123 – Centro
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-sm text-muted-foreground font-body">(47) 9 9999-9999</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">Balneário Camboriú</p>
                <p className="text-muted-foreground font-body text-sm">
                  Av. Exemplo, 456 – Centro
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-sm text-muted-foreground font-body">(47) 9 9999-9999</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
