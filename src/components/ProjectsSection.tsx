
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "OEIS Graph Database Project",
      description:
        "Developed Neo4j graph database from OEIS .seq files to model relationships between sequences, authors, and citations. Leveraged LLMs and RAG architectures for metadata extraction and sequence categorization.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      tags: ["Neo4j", "LLMs", "Sequence Analysis", "Graph Database", "Python"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "Weather Data GCP Pipeline",
      description:
        "Designed automated ETL pipeline on Google Cloud Platform for weather data management. Used Python, Pandas, and OpenWeather API for data processing and created interactive visualizations with Looker Studio.",
      image: "https://images.unsplash.com/photo-1561485163-7347bdba6be8",
      tags: ["GCP", "ETL", "Cloud Storage", "BigQuery", "Looker Studio"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "Object Recognition on Historic Videos",
      description:
        "Enhanced IU Libraries Moving Image Archive accessibility using DINO+SAM architecture and YOLOv8. Improved historical footage object detection by 20% through unsupervised learning.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      tags: ["Computer Vision", "DINO+SAM", "YOLOv8", "Object Detection", "PyTorch"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "Home Credit Default Risk Analysis",
      description:
        "Architected deep learning model (MLP) achieving 68.26% test accuracy for credit risk prediction. Enhanced performance through feature selection and ensemble methods.",
      image: "https://images.unsplash.com/photo-1616803140344-7a9b0eebd3d2",
      tags: ["Python", "scikit-learn", "TensorFlow", "Feature Engineering", "MLP"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "GPT-4o Speech Transformer",
      description:
        "Built speech transformation system for aphasic input using GPT-4o and SentenceTransformers. Integrated Whisper STT and pyttsx3 TTS with real-time feedback mechanisms.",
      image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be",
      tags: ["GPT-4o", "Whisper", "SentenceTransformers", "NLP", "Speech Processing"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
  ];

  // Split projects into featured and regular
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-trendy-accent/50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-trendy-primary">My Projects</h2>
          <p className="text-trendy-neutral">
            Explore my recent work and side projects that highlight my technical skills
            and creative approach.
          </p>
        </div>

        <div className="space-y-20">
          {/* Featured Projects */}
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              style={{ direction: idx % 2 ? "rtl" : "ltr" }}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-lg border border-border h-[300px] md:h-[400px] group relative"
                style={{ direction: "ltr" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm text-trendy-primary" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-4 w-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm text-trendy-primary" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div style={{ direction: "ltr" }}>
                <span className="text-trendy-secondary text-sm font-medium mb-2 block">Featured Project</span>
                <h3 className="text-2xl font-bold mb-4 text-trendy-primary">{project.title}</h3>
                <p className="text-trendy-neutral mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white text-trendy-secondary text-xs font-medium border border-trendy-secondary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-trendy-primary">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-border group hover:shadow-md transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-trendy-primary">{project.title}</h4>
                    <p className="text-trendy-neutral text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full bg-white text-xs font-medium border border-trendy-secondary/30 text-trendy-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-white text-xs font-medium border border-trendy-secondary/30 text-trendy-secondary">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        className="text-sm font-medium text-trendy-secondary hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <a
                        href={project.codeUrl}
                        className="text-sm font-medium text-trendy-primary hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub <Github className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
