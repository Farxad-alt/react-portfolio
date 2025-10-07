import "./Footer.css";

import { infoLinks, socialLinks } from "../../data/footerData";
import FooterLinkGroup from "./FooterLinkGroup";
import ScrollToTop from "../scrollToTop/ScrollToTop";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container footer-wrapper">
          <div className="about-group">
            <h2>Ilay</h2>
            <p>Frontend Developer</p>
            <a href="#about">About me</a>
          </div>
          <div className="hr"></div>
          <FooterLinkGroup title="More" Links={infoLinks} />
          <div className="hr"></div>
          <FooterLinkGroup title="Follow" Links={socialLinks} isSocial={true} />
        </div>
        <p className="footer-copyright">
          © <span className="year">{currentYear}</span> by Ilay. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
