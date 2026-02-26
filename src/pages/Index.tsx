import HeroSection from "@/components/HeroSection";
import SymptomsSection from "@/components/SymptomsSection";
import TreatmentSection from "@/components/TreatmentSection";
import LifestyleSections from "@/components/LifestyleSections";
import AboutDoctorSection from "@/components/AboutDoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <SymptomsSection />
      <TreatmentSection />
      <LifestyleSections />
      
      <AboutDoctorSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
