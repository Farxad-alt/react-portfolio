import "./Skills.css";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import Education from "./Education.jsx";
import Awords from "./Awords.jsx";
import Skills from "./Skills.jsx";
import WorkExperience from "./WorkExperience.jsx";
import { motion } from "motion/react";
import { slideVariants } from "../../utils/animate";
const SkillsInfo = () => {
  return (
    <section className="skills section" id="Skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />

        <div className="inner-content">
          <motion.div
            className="skills-description"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideVariants("top", 0.9, -150, false)}
          >
            <h3>Education &amp; Skills</h3>
            <p>
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </p>
          </motion.div>
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
