import {skills} from "../../data/skills.js";

const Skills = () => {
  return (
    <div className="education">
      <h4 className="label">Skills</h4>
      <ul className="bars">
        {skills.map((item,index) => (
        <li className="bar" key={index}>
          <div className="info"><span>{item.sill}</span><span>{item.level}</span>
          </div>
          <div className="line html"></div>
        </li>
       ))}
      </ul>
    </div>
  )
}
export default Skills
