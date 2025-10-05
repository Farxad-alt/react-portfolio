import { useState } from "react";
import Nav from "../nav/Nav"
import "./Header.css"
import { FaSquareXing } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";


// import {logoImg} from "../../assets/images"
const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const MenuToggle = () => {
     setIsMenuOpen(!isMenuOpen)
   }
	return (
		 <header className="header">
      <div className="container">
         <div className="header__wrapper">
            <a href="" className="header__logo">
               Logo
							 {/* <img src={logoImg} alt="logo"  className="header__logo-img"/> */}
            </a>
           <Nav isMenuOpen={isMenuOpen} />
            <div className="nav-menu-btn" onClick={MenuToggle}>
               {isMenuOpen ? <FaSquareXing /> : <FaBarsStaggered />}

            </div>
         </div>
      </div>
   </header>
	)
}

export default Header
