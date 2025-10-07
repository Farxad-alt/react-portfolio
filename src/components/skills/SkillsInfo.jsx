import "./Skills.css";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import Education from "./Education.jsx";
import Awords from "./Awords.jsx";
import Skills from "./Skills.jsx";
import WorkExperience from "./WorkExperience.jsx";
const SkillsInfo = () => {
  return (
    <section className="skills section" id="Skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />

        <div className="inner-content">
          <div className="skills-description">
            <h3>Education &amp; Skills</h3>
            <p>
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </p>
          </div>
          <div className="skills-info education-all">
            <Education />

            <Skills />

            <Awords />
          </div>
          <WorkExperience />
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
