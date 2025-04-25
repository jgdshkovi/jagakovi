
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiPython, SiJavascript, SiReact, SiDocker, SiGit } from "react-icons/si";
import { FaDatabase, FaBrain, FaCode, FaNetworkWired, FaCloud, FaLayerGroup, FaRobot, FaServer, FaCogs, FaAws, FaMicrosoft, FaTools, FaPython, FaJs, FaDocker } from "react-icons/fa";

const getAdditionalSkillIcon = (skillName: string) => {
  const iconSize = 24;
  
  switch (skillName) {
    case "Scikit-learn":
      return <FaPython size={iconSize} />;
    case "Keras":
      return <FaBrain size={iconSize} />;
    case "NLTK":
      return <FaCode size={iconSize} />;
    case "CNN":
      return <FaNetworkWired size={iconSize} />;
    case "GAN":
      return <FaRobot size={iconSize} />;
    case "AWS SageMaker":
      return <FaAws size={iconSize} />;
    case "Lambda":
      return <FaCloud size={iconSize} />;
    case "EC2":
      return <FaServer size={iconSize} />;
    case "RDS":
      return <FaDatabase size={iconSize} />;
    case "Neo4j":
      return <FaDatabase size={iconSize} />;
    case "Pinecone":
      return <FaLayerGroup size={iconSize} />;
    case "Tableau":
      return <FaServer size={iconSize} />;
    default:
      return <FaCode size={iconSize} />;
  }
};

const getSkillIcon = (skillName: string) => {
  const iconSize = 32;

  switch (skillName) {
    case "PyTorch":
      return <FaPython size={iconSize} />;
    case "TensorFlow":
      return <FaBrain size={iconSize} />;
    case "LLMs":
      return <FaBrain size={iconSize} />;
    case "Hugging Face":
      return <FaRobot size={iconSize} />;
    case "LangChain":
      return <FaCode size={iconSize} />;
    case "Fine-tuning":
      return <FaCogs size={iconSize} />;
    case "AWS":
      return <FaAws size={iconSize} />;
    case "Azure":
      return <FaMicrosoft size={iconSize} />;
    case "Docker":
      return <FaDocker size={iconSize} />;
    case "Terraform":
      return <FaTools size={iconSize} />;
    case "Git/CI/CD":
      return <SiGit size={iconSize} />;
    case "Kubernetes":
      return <FaServer size={iconSize} />;
    case "Python":
      return <SiPython size={iconSize} />;
    case "SQL":
      return <FaDatabase size={iconSize} />;
    case "MongoDB":
      return <FaDatabase size={iconSize} />;
    case "JavaScript":
      return <SiJavascript size={iconSize} />;
    case "React":
      return <SiReact size={iconSize} />;
    case "ETL Pipelines":
      return <FaLayerGroup size={iconSize} />;
    default:
      return <FaCode size={iconSize} />;
  }
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("ml-ai");

  const categories = [
    {
      id: "ml-ai",
      name: "ML & AI",
      skills: [
        { name: "PyTorch", proficiency: 90 },
        { name: "TensorFlow", proficiency: 85 },
        { name: "LLMs", proficiency: 90 },
        { name: "Hugging Face", proficiency: 95 },
        { name: "LangChain", proficiency: 85 },
        { name: "Fine-tuning", proficiency: 90 },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevTools",
      skills: [
        { name: "AWS", proficiency: 85 },
        { name: "Microsoft Azure", proficiency: 80 },
        { name: "Docker", proficiency: 90 },
        { name: "Terraform", proficiency: 75 },
        { name: "Git/CI/CD", proficiency: 85 },
        { name: "Kubernetes", proficiency: 70 },
      ],
    },
    {
      id: "programming",
      name: "Programming",
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "SQL", proficiency: 90 },
        { name: "MongoDB", proficiency: 80 },
        { name: "JavaScript", proficiency: 75 },
        { name: "React", proficiency: 70 },
        { name: "ETL Pipelines", proficiency: 85 },
      ],
    },
  ];

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
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm border border-border animate-fade-in flex flex-col items-center justify-center"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-3 text-trendy-secondary">
              {getSkillIcon(skill.name)}
            </div>
            <span className="font-medium text-trendy-primary text-center">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-8 text-trendy-primary">Additional Expertise</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[
            "Scikit-learn",
            "Keras",
            "NLTK",
            "CNN",
            "GAN",
            "AWS SageMaker",
            "Lambda",
            "EC2",
            "RDS",
            "Neo4j",
            "Pinecone",
            "Tableau",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 shadow-sm border border-border hover:border-trendy-secondary/50 hover:shadow-md transition-all flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-2 text-trendy-secondary">
                {getAdditionalSkillIcon(skill)}
              </div>
              <span className="font-medium text-trendy-primary text-center text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
