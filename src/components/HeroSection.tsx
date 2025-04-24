
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container flex flex-col items-start justify-center gap-4 z-10">
        <p className="text-accent font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Hello, I'm
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Alex Morgan
        </h1>
        
        <h2 className="text-2xl md:text-4xl text-muted-foreground font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Frontend Developer <span className="text-accent">&</span> UI Designer
        </h2>
        
        <p className="max-w-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          Building exceptional digital experiences with modern technologies. 
          Passionate about creating intuitive interfaces and seamless interactions.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
          <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-accent">
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
