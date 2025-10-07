import { Link } from "react-scroll";
import "./Nav.css";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
  const items = [
    "Home",
    "About",
    "Portfolio",
    "Skills",
    "Services",
    "Clients",
    "Contact",
  ];
  return (
    <nav className={isMenuOpen ? "nav active" : "nav "}>
      <ul className={isMenuOpen ? "nav-menu active" : "nav-menu "}>
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <Link
              to={item}
              key={index}
              className="nav-link"
              onClick={handleMenuClick}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
