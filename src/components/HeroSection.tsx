
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  animatedEntry?: boolean;
}

const HeroSection = ({ animatedEntry = false }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-start justify-center gap-4 z-10">
        <p className="text-trendy-secondary font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Hello, I'm
        </p>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${animatedEntry ? 'hero-name-animated' : 'animate-fade-in'}`} style={{ animationDelay: animatedEntry ? "0s" : "0.4s" }}>
          Jagadeesh Kovi
        </h1>
        
        <h2 className="text-2xl md:text-4xl text-trendy-neutral font-medium mb-6 animate-fade-in" style={{ animationDelay: animatedEntry ? "0.4s" : "0.6s" }}>
          AI/ML Research <span className="text-trendy-secondary">&</span> Data Engineer
        </h2>
        
        <p className="max-w-xl text-trendy-neutral leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: animatedEntry ? "0.6s" : "0.8s" }}>
          Building advanced AI/ML solutions and scalable data pipelines. 
          Specialized in LLMs, NLP, and cloud-based machine learning systems.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: animatedEntry ? "0.8s" : "1s" }}>
          <Button size="lg" className="gap-2 bg-trendy-secondary text-white hover:bg-trendy-secondary/90">
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-trendy-primary text-trendy-primary hover:bg-trendy-primary/10" onClick={() => window.open('/Jagadeesh_Kovi.pdf', '_blank')}>
            Download Resume
          </Button>
        </div>
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
