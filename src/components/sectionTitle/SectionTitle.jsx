import { motion } from "motion/react";
import "./SectionTitle.css";
import { titleVariant, subtitleVariant } from "../../utils/animate";

motion;
const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <motion.h2
        className="inner-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={titleVariant}
      >
        {title}
      </motion.h2>
      <motion.h3
        className="inner-second-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={subtitleVariant}
      >
        {subtitle}
      </motion.h3>
    </>
  );
};

export default SectionTitle;
