
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useInterval } from "@/hooks/useInterval";
import { categories } from "./skills/skillsData";
import { SkillCard } from "./skills/SkillCard";
import { AdditionalSkills } from "./skills/AdditionalSkills";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("ml-ai");

  const rotateCategory = useCallback(() => {
    setActiveCategory((current) => {
      const currentIndex = categories.findIndex((cat) => cat.id === current);
      const nextIndex = (currentIndex + 1) % categories.length;
      return categories[nextIndex].id;
    });
  }, []);

  useInterval(rotateCategory, 5000);

  const activeSkills = categories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding py-24">
      <div className="text-center max-w-3xl mx-auto mb-16 px-6 md:px-8 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-trendy-primary">My Skills</h2>
        <p className="text-trendy-neutral">
          With expertise across multiple domains, I bring a comprehensive skill set to every project.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={activeCategory === category.id ? 
              "bg-trendy-secondary text-white hover:bg-trendy-secondary/90" : 
              "border-trendy-primary text-trendy-primary hover:bg-trendy-primary/10"}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {activeSkills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} index={index} />
        ))}
      </div>

      <AdditionalSkills />
    </section>
  );
};

export default SkillsSection;
