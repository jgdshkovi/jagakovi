
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-toast";

const ProjectsSection = () => {
  const projects = [
    {
      title: "OEIS Graph Database Project",
      description:[
        // "Developed Neo4j graph database from OEIS .seq files to model relationships between sequences, authors, and citations. Leveraged LLMs and RAG architectures for metadata extraction and sequence categorization.",
        "I developed a Neo4j graph database using OEIS .seq files to model relationships between sequences, authors, and citations. By creating nodes for sequences and authors and using relationships to link them, I structured the data in a way that makes it easy to explore and query interconnected information.",
        "To enhance the database, I used Large Language Models (LLMs) and RAG architectures for automated metadata extraction and sequence categorization. This approach streamlined the process of organizing data and improved accessibility, allowing users to efficiently retrieve related sequences and their metadata through natural language queries.",
      ],
      image: "https://raw.githubusercontent.com/jgdshkovi/jagakovi/refs/heads/main/public/OEIS2.png",
      tags: ["Neo4j", "LLMs", "Sequence Analysis", "Graph Database", "Python"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "Weather Data GCP Pipeline",
      description: [
        "Designed and implemented an automated ETL pipeline on Google Cloud Platform for weather data management. Utilized Python, Pandas, and OpenWeather API for data extraction, transformation, and storage in BigQuery.",
        "Deployed and scheduled daily data processing using GCP services like Cloud Functions and Cloud Scheduler. Created interactive data visualizations and dashboards using Looker Studio for weather data analysis.",
      ],
        // "Designed automated ETL pipeline on Google Cloud Platform for weather data management. Used Python, Pandas, and OpenWeather API for data processing and created interactive visualizations with Looker Studio.",
      image: "https://raw.githubusercontent.com/jgdshkovi/MNGMT-ACCESS-FINAL/refs/heads/main/images/GCP-Data-Pipeline.png",
      tags: ["GCP", "ETL", "Cloud Storage", "BigQuery", "Looker Studio"],
      demoUrl: "",
      codeUrl: "https://github.com/jgdshkovi/MNGMT-ACCESS-FINAL",
      featured: true,
    },
    {
      title: "Object Recognition on Historic Videos",
      description:[
        // "Enhanced IU Libraries Moving Image Archive accessibility using DINO+SAM architecture and YOLOv8. Improved historical footage object detection by 20% through unsupervised learning.",
        "Indiana University Libraries' archive holds 1,700+ historic TV ads from the 1960s–70s. Finding footage with specific objects (like jewelry or TVs) was difficult because commercial models struggled with vintage video quality.",
        // "‎ ",
        "I developed a custom pipeline that:",
        "►​ Combined Grounding DINO and SAM for open-set object detection.",
        "►​ Boosted detection accuracy by 20% using unsupervised learning on video frames.",
        "►​ Integrated YOLOv8 and OCR to improve object and text recognition.",
        // "‎ ",
        "This made it much easier for staff and researchers to locate specific historic footage."
      ],
      image: "https://raw.githubusercontent.com/jgdshkovi/jagakovi/refs/heads/main/public/IULMIA1.png",
      tags: ["Computer Vision", "DINO+SAM", "YOLOv8", "Object Detection", "PyTorch"],
      demoUrl: "#",
      codeUrl: "https://github.com/jgdshkovi/B657_final_project",
      featured: true,
    },
    {
      title: "Home Credit Default Risk Analysis",
      description:[
        "As part of an Advanced Machine Learning coursework, I tackled a real-world Kaggle problem to predict default risk for Home Credit's lending strategy:",
        "‎ ",
        "►​ Employed feature selection and hyperparameter tuning (grid search, cross-validation) to improve model performance.",
        "►​ Achieved 68.26% test accuracy and F1 score of 0.7311 using a deep learning MLP model with backpropagation.",
        "►​ Boosted predictive accuracy by 10% through ensemble methods (RF, CatBoost, XGBoost), optimizing the lending strategy.",
        // "‎ ",
      ],
      image: "https://raw.githubusercontent.com/jgdshkovi/jagakovi/refs/heads/main/public/HCDR%20Thumbnail.jpeg",
      tags: ["Python", "scikit-learn", "TensorFlow", "Feature Engineering", "MLP"],
      demoUrl: "#",
      codeUrl: "https://github.com/jgdshkovi/CSCI-P-556-Final-Project-HCDR-Fall-2023",
      featured: false,
    },
    {
      title: "GPT-4o Speech Transformer",
      description:[
        "Built speech transformation system for aphasic input using GPT-4o and SentenceTransformers. Integrated Whisper STT and pyttsx3 TTS with real-time feedback mechanisms."],
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
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm text-trendy-primary" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ArrowUpRight className="h-4 w-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
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
                <div className="text-trendy-neutral mb-6 space-y-3">
                  {/* {project.description} */}
                  {project.description.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                </div>
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
                    <div className="text-trendy-neutral text-sm mb-4">
                      {/* {project.description} */}
                      {project.description.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                    </div>
                    
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
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          className="text-sm font-medium text-trendy-secondary hover:underline flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
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
