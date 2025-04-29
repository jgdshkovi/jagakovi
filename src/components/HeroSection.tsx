
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpaceModel from "@/components/SpaceModel";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 z-10">
        {/* Left column - Text content */}
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-trendy-secondary font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hello, I'm
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Jagadeesh Kovi
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-trendy-neutral font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            AI/ML Research <span className="text-trendy-secondary">&</span> Data Engineer
          </h2>
          
          <p className="max-w-xl text-trendy-neutral leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Building advanced AI/ML solutions and scalable data pipelines. 
            Specialized in LLMs, NLP, and cloud-based machine learning systems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button size="lg" className="gap-2 bg-trendy-secondary text-white hover:bg-trendy-secondary/90">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-trendy-primary text-trendy-primary hover:bg-trendy-primary/10" onClick={() => window.open('/Jagadeesh_Kovi.pdf', '_blank')}>
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Right column - 3D Model */}
        {!isMobile && (
          <div className="h-[500px] w-full relative animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <SpaceModel />
          </div>
        )}
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <a href="#about" className="text-trendy-neutral hover:text-trendy-secondary">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll Down</span>
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
