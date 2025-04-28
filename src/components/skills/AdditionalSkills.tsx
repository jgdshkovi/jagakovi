
import { getAdditionalSkillIcon } from "./SkillIcons";
import { additionalSkills } from "./skillsData";

export const AdditionalSkills = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold mb-8 text-trendy-primary">Additional Expertise</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {additionalSkills.map((skill, index) => (
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
  );
};
