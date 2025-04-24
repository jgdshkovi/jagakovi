
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("development");

  const categories = [
    {
      id: "development",
      name: "Development",
      skills: [
        { name: "React", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "TypeScript", proficiency: 85 },
        { name: "Next.js", proficiency: 80 },
        { name: "HTML/CSS", proficiency: 90 },
        { name: "Node.js", proficiency: 75 },
      ],
    },
    {
      id: "design",
      name: "Design",
      skills: [
        { name: "Figma", proficiency: 85 },
        { name: "UI/UX", proficiency: 90 },
        { name: "Adobe XD", proficiency: 75 },
        { name: "Photoshop", proficiency: 70 },
        { name: "Illustrator", proficiency: 65 },
        { name: "Motion Design", proficiency: 60 },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      skills: [
        { name: "Git", proficiency: 90 },
        { name: "VSCode", proficiency: 95 },
        { name: "Docker", proficiency: 70 },
        { name: "AWS", proficiency: 65 },
        { name: "CI/CD", proficiency: 75 },
        { name: "Webpack", proficiency: 80 },
      ],
    },
  ];

  const activeSkills = categories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-muted-foreground">
          With expertise across multiple domains, I bring a comprehensive skill set to every project.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={activeCategory === category.id ? "bg-accent hover:bg-accent/90" : ""}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {activeSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-border animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-accent font-medium">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "TailwindCSS",
            "Redux",
            "GraphQL",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "Jest",
            "Testing Library",
            "Storybook",
            "Responsive Design",
            "SEO",
            "Accessibility",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium hover:bg-accent/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
