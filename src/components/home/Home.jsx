import "./Home.css";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg } from "../../assets/images";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a
            href=""
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            <FaFacebookF />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
        <div
          className="home-info"
          style={{
            opacity: 1,
            transform: "none",
          }}
        >
          <h1>Hi, I am Ilay</h1>
          <h3>Front-end Developer</h3>
          <p>
            I create stunning websites for your business, Highly experienced in
            web design and development
          </p>
          <a href="" className="home-info-link inner-info-link">
            Contact me
            <FaCircleArrowRight />
          </a>
        </div>
        <div className="home-img">
          <img src={mainImg} alt="" />
        </div>
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
