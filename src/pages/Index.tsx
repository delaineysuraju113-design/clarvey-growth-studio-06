import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import BuildingSection from "@/components/BuildingSection";
import CaseStudySection from "@/components/CaseStudySection";
import ThinkingSection from "@/components/ThinkingSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <BuildingSection />
      <CaseStudySection />
      <ThinkingSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
