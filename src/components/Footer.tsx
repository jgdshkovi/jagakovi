
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/80 py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-heading text-xl font-bold">
              <a href="#hero" className="text-accent">
                <span className="relative pr-1">Jaga</span>
              </a>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Building advanced AI/ML solutions and data pipelines.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex gap-4">
              <a 
                href="https://github.com/jgdshkovi" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jgdshkovi" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://jgdshkovi.github.io/portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Portfolio"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a 
                href="mailto:jagakovi@gmail.com" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <span className="h-6 w-px bg-border hidden sm:block" />
            
            <nav className="flex gap-6 text-sm">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {year} Jagadeesh Kovi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
