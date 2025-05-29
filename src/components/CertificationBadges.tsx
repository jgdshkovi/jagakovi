
import { Badge } from "@/components/ui/badge";

const CertificationBadges = () => {
  const badges = [
    { 
      name: "AWS Solutions Architect", 
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center",
      position: "top-4 left-8", 
      rotation: "rotate-12", 
      delay: "0s" 
    },
    { 
      name: "Google Cloud Professional", 
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center",
      position: "top-20 right-12", 
      rotation: "-rotate-6", 
      delay: "0.5s" 
    },
    { 
      name: "Azure Data Engineer", 
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=center",
      position: "top-32 left-20", 
      rotation: "rotate-3", 
      delay: "1s" 
    },
    { 
      name: "Kubernetes Certified", 
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center",
      position: "top-48 right-8", 
      rotation: "-rotate-12", 
      delay: "1.5s" 
    },
    { 
      name: "TensorFlow Developer", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
      position: "bottom-32 left-12", 
      rotation: "rotate-6", 
      delay: "2s" 
    },
    { 
      name: "Databricks Certified", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=center",
      position: "bottom-20 right-16", 
      rotation: "-rotate-3", 
      delay: "2.5s" 
    },
    { 
      name: "MongoDB Associate", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop&crop=center",
      position: "bottom-8 left-32", 
      rotation: "rotate-9", 
      delay: "3s" 
    },
    { 
      name: "Docker Certified", 
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=100&h=100&fit=crop&crop=center",
      position: "top-16 left-1/2", 
      rotation: "-rotate-9", 
      delay: "3.5s" 
    }
  ];

  return (
    <div className="relative w-full h-full">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`absolute ${badge.position} ${badge.rotation} animate-fade-in hover:scale-110 transition-all duration-300 cursor-pointer`}
          style={{ 
            animationDelay: badge.delay,
          }}
          title={badge.name}
        >
          <div className="relative group">
            <img 
              src={badge.image}
              alt={badge.name}
              className="w-16 h-16 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-white"
            />
            {/* Tooltip on hover */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-trendy-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              {badge.name}
            </div>
          </div>
        </div>
      ))}
      
      {/* Floating particles for extra visual interest */}
      <div className="absolute top-12 right-4 w-2 h-2 bg-trendy-secondary/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-16 left-6 w-1.5 h-1.5 bg-trendy-accent/50 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-40 left-1/3 w-1 h-1 bg-trendy-neutral/40 rounded-full animate-pulse" style={{ animationDelay: "3s" }} />
    </div>
  );
};

export default CertificationBadges;
