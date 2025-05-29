import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpaceModel from "@/components/SpaceModel";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const HeroSection = () => {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

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
            AI/ML Research <span className="text-trendy-secondary">&</span> Data Engineering
          </h2>
          
          <p className="max-w-xl text-trendy-neutral leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Building advanced AI/ML solutions and scalable data pipelines. 
            Specialized in LLMs, NLP, and cloud-based machine learning systems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button size="lg" className="gap-2 bg-trendy-secondary text-white hover:bg-trendy-secondary/90">
              <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>View Projects</a> <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-trendy-primary text-trendy-primary hover:bg-trendy-primary/10" onClick={() => window.open('/Jagadeesh_Kovi_Resume.pdf', '_blank')}>
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Right column - Certification Badges */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 p-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 bg-trendy-secondary/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-32 h-32 bg-trendy-primary/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Badge items */}
          <motion.div 
            variants={badgeVariants}
            whileHover="hover"
            className="transform"
          >
            <img 
              src="/certifications/aws_mla_c01.png" 
              alt="AWS Certified ML Engineer Associate" 
              className="w-32 h-32 object-contain"
            />
          </motion.div>
          <motion.div 
            variants={badgeVariants}
            whileHover="hover"
            className="transform"
          >
            <img 
              src="/certifications/oracledb_23ai_vec.png" 
              alt="Oracle AI Vector Search Certified Professional" 
              className="w-32 h-32 object-contain"
            />
          </motion.div>
          <motion.div 
            variants={badgeVariants}
            whileHover="hover"
            className="transform"
          >
            <img 
              src="/certifications/apex_cloud_dev.png" 
              alt="Oracle APEX Cloud Developer Certified Professional" 
              className="w-32 h-32 object-contain"
            />
          </motion.div>
          <motion.div 
            variants={badgeVariants}
            whileHover="hover"
            className="transform"
          >
            <img 
              src="/certifications/ms_az_900.png" 
              alt="Microsoft Certified: Azure Fundamentals" 
              className="w-32 h-32 object-contain"
            />
          </motion.div>
          <motion.div 
            variants={badgeVariants}
            whileHover="hover"
            className="transform"
          >
            <img 
              src="/certifications/databricks_fundamentals.png" 
              alt="Oracle APEX Cloud Developer Certified Professional" 
              className="w-32 h-32 object-contain"
            />
          </motion.div>
        </motion.div>
        

      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="text-trendy-neutral hover:text-trendy-secondary">
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
