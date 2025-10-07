import { useState, useEffect } from "react";
import Nav from "../nav/Nav";
import "./Header.css";
import { FaSquareXing, FaBarsStaggered } from "react-icons/fa6";

import { logoImg } from "../../assets/images";
import { RemoveScroll } from "react-remove-scroll";

// import {logoImg} from "../../assets/images"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const MenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <div className="container">
        <div className="header__wrapper">
          <a href="" className="header__logo">
            <img src={logoImg} alt="logo" className="header__logo-img" />
          </a>
          <RemoveScroll enabled={isMenuOpen}>
            <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
          </RemoveScroll>
          <div className="nav-menu-btn" onClick={MenuToggle}>
            {isMenuOpen ? <FaSquareXing /> : <FaBarsStaggered />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
