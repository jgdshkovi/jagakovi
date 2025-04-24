
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TechHub Analytics",
      description:
        "A comprehensive analytics dashboard for monitoring and visualizing data metrics in real-time.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "TypeScript", "Recharts", "Firebase"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "EcoTrack Mobile App",
      description:
        "An environmental impact tracking application that helps users monitor their carbon footprint.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "Portfolio 2025",
      description:
        "A modern, responsive portfolio website built with the latest web technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "SmartHome Controller",
      description:
        "An IoT dashboard for controlling and monitoring smart home devices.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React", "Node.js", "Socket.io", "MQTT", "AWS IoT"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "CodeCollab",
      description:
        "A real-time collaborative code editor with integrated chat and version control.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Next.js", "WebSockets", "Monaco Editor", "Express"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
  ];

  // Split projects into featured and regular
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-trendy-accent/30">
      <div className="container">
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
