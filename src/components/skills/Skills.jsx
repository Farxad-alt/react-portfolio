import { skills } from "../../data/skills.js";

const Skills = () => {
  return (
    <div className="education">
      <h4 className="label">Skills</h4>
      <ul className="bars">
        {skills.map((skill, index) => (
          <li key={index} className="bar">
            <div className="info">
              <span>{skill.skill}</span>
              <span>{skill.level}</span>
            </div>
            <div className={`line ${skill.skill.toLowerCase()}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
