import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-toast";

// Use below for generating Img-to-Video and Video-to-GIF.
// https://monica.im/image-tools/animate-a-picture
// https://ezgif.com/maker

const ProjectsSection = () => {
  const projects = [
    {
      title: "LuddyBot: AI-Powered Academic Support Chatbot",
      description:[
        "As part of a team project at Indiana University, I helped develop 𝙇𝙪𝙙𝙙𝙮𝘽𝙤𝙩 𝙇𝙤𝙗𝙩 𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙞𝙤𝙣 (𝙍𝘼𝙂) pipeline that combined hybrid search (semantic + keyword filtering), 𝘾𝙧𝙤𝙨𝙨𝙀𝙣𝙘𝙤𝙙𝙚𝙧-𝙗𝙖𝙨𝙚𝙙 𝙧𝙚-𝙧𝙖𝙣𝙠𝙞𝙣𝙜, and 𝙇𝙇𝙖𝙈𝘼𝟯-𝟳𝟬𝘽 to generate natural, context-aware responses. I worked on structured web scraping (using BeautifulSoup), vector indexing with FAISS, and designed prompts that maintained session memory for better conversational flow.",
        "A major focus was improving 𝙖𝙣𝙨𝙬𝙚𝙧 𝙜𝙧𝙤𝙪𝙣𝙙𝙞𝙣𝙜 𝙖𝙣𝙙 𝙛𝙖𝙞𝙩𝙝𝙛𝙪𝙡𝙣𝙚𝙨𝙨, ensuring that every chatbot response could be accurately traced back to its source material — critical for building trust. We rigorously evaluated our system using metrics like 𝙈𝙍𝙍, 𝙋𝙧𝙚𝙘𝙞𝙨𝙞𝙤𝙣@𝙆, 𝙉𝘿𝘾𝙂, and 𝙨𝙚𝙢𝙖𝙣𝙩𝙞𝙘 𝙨𝙞𝙢𝙞𝙡𝙖𝙧𝙞𝙩𝙮 to fine-tune both search and response generation. This project sharpened my skills in building reliable, scalable AI assistants using modern LLM and retrieval techniques."
      ],
      image: "/LuddyChatbot.jpeg",
      tags: ["RAG", "Hybrid Search", "Re-ranking", "LlaMA", "FAISS", "BeautifulSoup", ],
      demoUrl: "#",
      codeUrl: "https://github.com/jgdshkovi/LuddyChatbot",
      featured: true,
    },
    {
      title: "OEIS Graph Database Project",
      description:[
        // "Developed Neo4j graph database from OEIS .seq files to model relationships between sequences, authors, and citations. Leveraged LLMs and RAG architectures for metadata extraction and sequence categorization.",
        // "I developed a Neo4j graph database using OEIS .𝙨𝙚𝙦 files to model relationships between sequences, authors, and citations. By creating nodes for sequences and authors and using relationships to link them, I structured the data in a way that makes it easy to explore and query interconnected information.",
        // "To enhance the database, I used 𝙇𝙖𝙧𝙜𝙚 𝙇𝙖𝙣𝙜𝙪𝙖𝙜𝙚 𝙈𝙤𝙙𝙚𝙡𝙨 (𝙇𝙇𝙈𝙨) and RAG architectures for 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙚𝙙 𝙢𝙚𝙩𝙖𝙙𝙖𝙩𝙖 𝙚𝙭𝙩𝙧𝙖𝙘𝙩𝙞𝙤𝙣 and sequence categorization. This approach streamlined the process of organizing data and improved accessibility, allowing users to efficiently retrieve related sequences and their metadata through natural language queries.",
        "In this project, I developed a Neo4j graph database using the 𝙊𝙀𝙄𝙎 (Online Encyclopedia of Integer Sequences) .𝙨𝙚𝙦 files to model relationships between sequences, authors, and citations. The goal was to build a structured, queryable database that could easily represent the interconnectedness of mathematical sequences and their metadata. By using 𝙉𝙚𝙤𝟰𝙟's graph capabilities, I created nodes for sequences, authors, and citations, with relationships to represent how these entities are related.",
        "To enhance the database, I leveraged 𝙇𝙖𝙧𝙜𝙚 𝙇𝙖𝙣𝙜𝙪𝙖𝙜𝙚 𝙈𝙤𝙙𝙚𝙡𝙨 (𝙇𝙇𝙈𝙨) and 𝙍𝙚𝙩𝙧𝙞𝙚𝙫𝙖𝙡-𝘼𝙪𝙜𝙢𝙚𝙣𝙩𝙚𝙙 𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙞𝙤𝙣 (𝙍𝘼𝙂) architectures for automated metadata extraction and sequence categorization. This helped streamline the process of organizing and tagging the data, making the sequences more accessible for researchers and mathematicians. The project improved the efficiency of accessing related sequence information, enabling users to quickly find 𝙡𝙞𝙣𝙠𝙚𝙙 𝙨𝙚𝙦𝙪𝙚𝙣𝙘𝙚𝙨, their authors, and citations through natural language queries."
      ],
      image: "/OEIS2.png",
      tags: ["Neo4j", "LLMs", "Sequence Analysis", "Graph Database", "Python"],
      demoUrl: "#",
      codeUrl: "https://github.com/jgdshkovi/OEIS-Analysis",
      featured: true,
    },
    {
      title: "Weather Data GCP Pipeline",
      description: [
        // "Designed and implemented an automated ETL pipeline on Google Cloud Platform for weather data management. Utilized Python, Pandas, and OpenWeather API for data extraction, transformation, and storage in BigQuery.",
        // "Deployed and scheduled daily data processing using GCP services like Cloud Functions and Cloud Scheduler. Created interactive data visualizations and dashboards using Looker Studio for weather data analysis.",
        "This GCP project automates the process of 𝙚𝙭𝙩𝙧𝙖𝙘𝙩𝙞𝙣𝙜, 𝙥𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜, and 𝙫𝙞𝙨𝙪𝙖𝙡𝙞𝙯𝙞𝙣𝙜 weather data using a range of technologies. The project begins by retrieving real-time weather data from the OpenWeather API, which provides essential information like temperature, humidity, and forecasts. This data is then cleaned and transformed using Python and Pandas, ensuring it's structured and ready for analysis.",
        "To ensure scalability and automation, the project leverages Google Cloud Platform (GCP). Using GCP services like 𝘾𝙡𝙤𝙪𝙙 𝙁𝙪𝙣𝙘𝙩𝙞𝙤𝙣𝙨, 𝘾𝙡𝙤𝙪𝙙 𝙎𝙘𝙝𝙚𝙙𝙪𝙡𝙚𝙧, 𝘽𝙞𝙜𝙌𝙪𝙚𝙧𝙮, and 𝘾𝙡𝙤𝙪𝙙 𝙎𝙩𝙤𝙧𝙖𝙜𝙚, the ETL (Extract, Transform, Load) workflows run automatically, extracting and processing data at scheduled intervals.",
        "The final step is the creation of an interactive dashboard using 𝙇𝙤𝙤𝙠𝙚𝙧 𝙎𝙩𝙪𝙙𝙞𝙤, which visualizes the insights derived from the weather data, providing users with an intuitive interface to explore and analyze the information."
      ],
        // "Designed automated ETL pipeline on Google Cloud Platform for weather data management. Used Python, Pandas, and OpenWeather API for data processing and created interactive visualizations with Looker Studio.",
      image: "/GCP-Data-Pipeline.png",
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
      image: "/IULMIA1.png",
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
      // image: "https://raw.githubusercontent.com/jgdshkovi/jagakovi/refs/heads/main/public/HCDR%20Thumbnail.jpeg",
      image: "hcdr-gif.gif",
      tags: ["Python", "scikit-learn", "TensorFlow", "Feature Engineering", "MLP"],
      demoUrl: "#",
      codeUrl: "https://github.com/jgdshkovi/CSCI-P-556-Final-Project-HCDR-Fall-2023",
      featured: false,
    },
    {
      title: "OMR Sheet Processing and Answer Extraction",
      description:[
        "As part of an Advanced Machine Learning coursework, I tackled a real-world Kaggle problem to predict default risk for Home Credit's lending strategy:",
        "‎ ",
        "►​ Built an end-to-end pipeline with Python, OpenCV, and PIL, applying morphological operations, contour detection, and barcode encoding/decoding.",
        "►​ Achieved over 99% accuracy on the validation dataset, processing each form in under 3 seconds.",
        "►​ Incorporated steganography and custom preprocessing to ensure robustness against noise, misalignment, and varying scan quality.",
        // "‎ "
      ],
      image: "/a-48.gif",
      tags: ["PIL", "OpenCV", "Morphological Ops", "Image Processing", "Python"],
      demoUrl: "#",
      codeUrl: "https://github.com/jgdshkovi/cs-b657-sp2024-jagakovi-adadelek-meocakir-a1",
      featured: false,
    },
    {
      title: "Real-Time AI Vector Search Engine",
      description:[
        "Building a hybrid vector search system that supports static data and real-time streaming updates via Kafka/RabbitMQ, and/or BigQuery for low-latency, intelligent retrieval.",
        "‎ ",
        "",
        "",
        "",
        // "‎ "
      ],
      // image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=307&auto=format&fit=crop",
      // image: "https://raw.githubusercontent.com/jgdshkovi/jagakovi/refs/heads/main/public/vector-store.png",
      image: "vec-store.gif",
      tags: ["Coming Soon"],
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
              className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
              style={{ direction: idx % 2 ? "rtl" : "ltr" }}
            >
              <div className="md:col-span-2">
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
              </div>
              
              <div className="md:col-span-3">
              <div style={{ direction: "ltr" }}>
                {/* <span className="text-trendy-secondary text-sm font-medium mb-2 block">Featured Project</span> */}
                <h3 className="text-2xl font-bold mb-4 text-trendy-secondary">
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
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
                      {project.codeUrl && project.codeUrl !== "#" && (
                        <a
                          href={project.codeUrl}
                          className="text-sm font-medium text-trendy-primary hover:underline flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub <Github className="h-3 w-3" />
                        </a>
                      )}
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
