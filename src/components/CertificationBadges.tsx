
import { Badge } from "@/components/ui/badge";

const CertificationBadges = () => {
  const badges = [
    { name: "AWS Solutions Architect", color: "bg-orange-500", position: "top-4 left-8", rotation: "rotate-12", delay: "0s" },
    { name: "Google Cloud Professional", color: "bg-blue-500", position: "top-20 right-12", rotation: "-rotate-6", delay: "0.5s" },
    { name: "Azure Data Engineer", color: "bg-cyan-500", position: "top-32 left-20", rotation: "rotate-3", delay: "1s" },
    { name: "Kubernetes Certified", color: "bg-purple-500", position: "top-48 right-8", rotation: "-rotate-12", delay: "1.5s" },
    { name: "TensorFlow Developer", color: "bg-green-500", position: "bottom-32 left-12", rotation: "rotate-6", delay: "2s" },
    { name: "Databricks Certified", color: "bg-red-500", position: "bottom-20 right-16", rotation: "-rotate-3", delay: "2.5s" },
    { name: "MongoDB Associate", color: "bg-emerald-500", position: "bottom-8 left-32", rotation: "rotate-9", delay: "3s" },
    { name: "Docker Certified", color: "bg-indigo-500", position: "top-16 left-1/2", rotation: "-rotate-9", delay: "3.5s" }
  ];

  return (
    <div className="relative w-full h-full">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`absolute ${badge.position} ${badge.rotation} animate-fade-in hover:scale-110 transition-all duration-300 cursor-pointer`}
          style={{ 
            animationDelay: badge.delay,
            transform: `${badge.rotation.replace('-rotate-', 'rotate(-').replace('rotate-', 'rotate(').replace('rotate(', 'rotate(').replace(')', 'deg)')}` 
          }}
        >
          <Badge 
            className={`${badge.color} text-white px-3 py-1 text-xs font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 border-0`}
          >
            {badge.name}
          </Badge>
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
