
import { getSkillIcon } from "./SkillIcons";

interface SkillCardProps {
  name: string;
  index: number;
}

export const SkillCard = ({ name, index }: SkillCardProps) => {
  return (
    <div
      className="bg-white rounded-xl p-4 shadow-sm border border-border animate-fade-in flex flex-col items-center justify-center"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-3 text-trendy-secondary">
        {getSkillIcon(name)}
      </div>
      <span className="font-medium text-trendy-primary text-center">{name}</span>
    </div>
  );
};
