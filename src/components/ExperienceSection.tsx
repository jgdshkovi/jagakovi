
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Project 990",
      duration: "Sep 2024 - Present",
      location: "California, CA",
      description: [
        "Architected scalable backend and streamlined SQL queries for processing over 12M tax records",
        "Leveraged Indiana University's Big Red 200 supercomputer to fine-tune NLP models",
        "Engineered AI chatbots using advanced NLP techniques for improved data access",
      ],
    },
    {
      title: "AI Engineer (Linguistic Research)",
      company: "Indiana University - PBS",
      duration: "Sep 2024 - Apr 2025",
      location: "Bloomington, IN",
      description: [
        "Built GPT-4o-based speech transformer for aphasic input reconstruction",
        "Created correction pipeline with SentenceTransformers for improved accuracy",
        "Used Whisper for STT and pyttsx3 for TTS in language processing applications",
        "Designed real-time feedback system for language rehabilitation",
      ],
    },
    {
      title: "Data Analyst (ML & NLP)",
      company: "Indiana University - Kelley School of Business",
      duration: "May 2024 - Aug 2024",
      location: "Bloomington, IN",
      description: [
        "Developed NLP-based risk visualization tool for business analysis",
        "Engineered ETL pipeline using Python, AWS Lambda, and RDS",
        "Launched real-time dashboard with AWS EC2 and CloudWatch monitoring",
      ],
    },
    {
      title: "Software Engineer",
      company: "FIS Global",
      duration: "Oct 2021 - Nov 2022",
      location: "Remote",
      description: [
        "Refined data pipelines for 30+ banking modules via SQL & Apache Kafka",
        "Deployed interactive Tableau dashboards for financial analytics",
        "Applied Python (Pandas, NumPy) and SQL for ETL and data aggregation",
        "Integrated automated data validation in CI/CD pipelines",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science - Data Science",
      institution: "Indiana University Bloomington",
      duration: "Aug 2023 - May 2025",
      location: "Bloomington, IN",
      description: "GPA: 3.74/4.0 | Research Interests: NLP, AI Agents, LLMs, Applied Machine Learning, Reinforcement Learning",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Siddharth Institute of Engineering & Technology",
      duration: "Jul 2017 - Jun 2021",
      location: "India",
      description: "CGPA: 8.8/10.0 | Publication: Detection of Online Toxic Comments Using Deep Learning",
    },
  ];

  return (
    <section id="experience" className="section-padding py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-trendy-primary">Experience & Education</h2>
          <p className="text-trendy-neutral">
            My professional journey and academic background that have shaped my career.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-trendy-primary">
              <span className="w-6 h-6 bg-trendy-secondary rounded-full flex items-center justify-center text-white text-sm">
                W
              </span>
              Work Experience
            </h3>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-trendy-secondary/30">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-trendy-secondary ring-4 ring-trendy-accent" />
                  
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-trendy-primary">{exp.title}</h4>
                    <div className="text-trendy-secondary font-medium">{exp.company}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-trendy-neutral">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-trendy-secondary" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-trendy-secondary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-1 text-trendy-neutral">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-trendy-primary">
              <span className="w-6 h-6 bg-trendy-secondary rounded-full flex items-center justify-center text-white text-sm">
                E
              </span>
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-trendy-secondary/30">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-trendy-secondary ring-4 ring-trendy-accent" />
                  
                  <div className="mb-2">
                    <h4 className="text-xl font-bold text-trendy-primary">{edu.degree}</h4>
                    <div className="text-trendy-secondary font-medium">{edu.institution}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-trendy-neutral">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-trendy-secondary" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-trendy-secondary" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-trendy-neutral">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
