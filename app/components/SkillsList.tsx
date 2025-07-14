import React from "react";
import SkillsItem from "./SkillsItem";

interface Skill {
  item: string;
  label: string;
}

interface SkillsListProps {
  skills: Skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <div className="skills-item-wrap">
      {skills.map((skill) => (
        <div className="skills-item" key={skill.item}>
          <SkillsItem item={skill.item} />
          <span className="skill-text">{skill.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
