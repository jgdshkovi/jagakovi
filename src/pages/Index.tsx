
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Preload important assets if needed
    const preloadContent = async () => {
      // Simulate content loading
      await new Promise(resolve => setTimeout(resolve, 500));
      setContentReady(true);
    };
    
    preloadContent();
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen onAnimationComplete={handleAnimationComplete} />
      )}
      
      <div className={`min-h-screen overflow-x-hidden ${!isLoading ? 'content-loaded' : 'content-pending'}`}>
        <BackgroundPattern />
        <Header />
        <main className="relative px-6 md:px-8 lg:px-12">
          <HeroSection animatedEntry={!isLoading} />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
