import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/5547999452698"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-primary-foreground rounded-full flex items-center justify-center shadow-elevated transition-colors duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

export default WhatsAppFloat;
