
import { SiPython, SiJavascript, SiReact, SiDocker, SiGit } from "react-icons/si";
import { FaDatabase, FaBrain, FaCode, FaNetworkWired, FaCloud, FaLayerGroup, FaRobot, FaServer, FaCogs, FaAws, FaMicrosoft, FaTools, FaPython, FaJs, FaDocker } from "react-icons/fa";

export const getAdditionalSkillIcon = (skillName: string) => {
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

export const getSkillIcon = (skillName: string) => {
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
