
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechNova Solutions",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead development of responsive web applications using React and TypeScript",
        "Implemented state management solutions with Redux and Context API",
        "Optimized application performance, achieving 40% faster load times",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "UI/UX Developer",
      company: "DesignPro Studios",
      duration: "2020 - 2022",
      location: "Remote",
      description: [
        "Created interactive prototypes and wireframes in Figma",
        "Collaborated with designers to implement pixel-perfect interfaces",
        "Developed component libraries and design systems",
        "Conducted user testing and implemented feedback",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSphere Inc.",
      duration: "2018 - 2020",
      location: "Austin, TX",
      description: [
        "Built responsive websites using HTML, CSS, and JavaScript",
        "Integrated REST APIs and third-party services",
        "Optimized websites for cross-browser compatibility",
        "Implemented SEO best practices",
      ],
    },
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Stanford University",
      duration: "2016 - 2018",
      location: "Stanford, CA",
      description: "Specialized in Human-Computer Interaction and Web Technologies",
    },
    {
      degree: "Bachelor's in Software Engineering",
      institution: "University of Texas",
      duration: "2012 - 2016",
      location: "Austin, TX",
      description: "Focus on web development and interactive design",
    },
  ];

  return (
    <section id="experience" className="section-padding py-24">
      <div className="max-w-4xl mx-auto">
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
