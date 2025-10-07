import "./Home.css";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg } from "../../assets/images";
import { motion } from "motion/react";
import {
  iconVariants,
  // motionVariants,
  // imageVariants,
  slideVariants,
} from "../../utils/animate";

const icons = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "https://github.com/",
    icon: <FaGithub />,
  },
];
const Home = () => {
  return (
    <section className="home" id="Home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((icon, index) => (
            <motion.a
              href={icon.href}
              key={icon.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={iconVariants}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
            variants={slideVariants("left", 0.9, 100, false)}
          >
            Hi, I am Ilay
          </motion.h1>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideVariants("left", 0.9, 100, false)}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideVariants("left", 0.9, 100, true)}
          >
            I create stunning websites for your business, Highly experienced in
            web design and development
          </motion.p>
          <motion.a
            href=""
            className="home-info-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={4}
            variants={slideVariants("left", 0.9, 100, false)}
          >
            Contact me
            <FaCircleArrowRight />
          </motion.a>
        </div>
        <motion.div
          className="home-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideVariants("left", 0.9, -150, false)}
        >
          <img src={mainImg} alt="" />
        </motion.div>
      </div>
      <a
        href="#about"
        style={{
          opacity: 1,
          transform: "none",
        }}
        className="scroll-down"
      >
        Scroll down
        <FaArrowDownLong />
      </a>
    </section>
  );
};

export default Home;
