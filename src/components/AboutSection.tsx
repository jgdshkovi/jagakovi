
import { Calendar, Mail, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full md:w-2/5 lg:sticky lg:top-20">
            <div className="relative">
              <div className="aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-lg border border-border">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>jagakovi@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>3+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>California, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Hello! I'm Jagadeesh, an AI/ML Research Engineer with expertise in developing advanced LLM pipelines, 
                backend systems, and NLP tools. With a strong background in machine learning and data science, 
                I specialize in building scalable AI solutions for both public and private sectors.
              </p>
              <p>
                My work focuses on fine-tuning models on supercomputers, building scalable analytics workflows, 
                and integrating AI in healthcare, finance, and civic domains. I'm proficient in Python, PyTorch, 
                Docker, AWS, and advanced NLP techniques, with a strong emphasis on system performance, 
                inference accuracy, and real-time UX.
              </p>
              <p>
                Currently pursuing a Master's in Data Science at Indiana University Bloomington, I'm deeply passionate 
                about research in NLP, AI Agents, LLMs, and Reinforcement Learning. I'm always exploring new technologies 
                and methodologies to push the boundaries of what's possible with artificial intelligence.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "12M+", label: "Data Records Processed" },
                { number: "5+", label: "Research Projects" },
                { number: "1", label: "Publication" },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white shadow-sm border border-border">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent">{item.number}</h3>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
