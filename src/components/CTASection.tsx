import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.png";

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
              href="https://typebot.co/bpip-gustavo-uro-prostata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-navy-deep font-body font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 hover:shadow-elevated"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com o especialista agora
            </a>
          </div>

          {/* Clinic image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/10 to-navy/10 rounded-2xl blur-xl" />
              <img
                src={clinicImg}
                alt="UROCenter SC – Ambiente moderno e acolhedor"
                className="relative rounded-2xl shadow-elevated w-full object-cover max-h-[350px]"
              />
            </div>
          </motion.div>

          {/* Locations */}
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Itajaí */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl shadow-card border border-border overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div className="text-left">
                    <p className="font-display font-bold text-foreground text-lg">Unidade Itajaí</p>
                    <p className="text-muted-foreground font-body text-sm mt-1">
                      Rua Dr. Nereu Ramos, 197 – Centro
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground font-body">(47) 2033.7737</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MessageCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground font-body">(47) 99945-2698</span>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.5!2d-48.6516!3d-26.9078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb3e9d3b1d1d%3A0x1!2sRua+Dr.+Nereu+Ramos%2C+197+-+Centro%2C+Itaja%C3%AD+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa UROCenter Itajaí"
                className="w-full"
              />
            </motion.div>

            {/* Balneário Camboriú */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-card rounded-2xl shadow-card border border-border overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div className="text-left">
                    <p className="font-display font-bold text-foreground text-lg">Unidade Balneário Camboriú</p>
                    <p className="text-muted-foreground font-body text-sm mt-1">
                      Rua Dr. Nereu Ramos, 197 – Centro
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground font-body">(47) 3264.6800</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MessageCircle className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground font-body">(47) 99945-2698</span>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.5!2d-48.6350!3d-26.9906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b5d8e8e8e8e8%3A0x1!2sRua+Dr.+Nereu+Ramos%2C+197+-+Centro%2C+Balne%C3%A1rio+Cambori%C3%BA+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa UROCenter Balneário Camboriú"
                className="w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
