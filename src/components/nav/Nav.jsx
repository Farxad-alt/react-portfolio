import { Link } from "react-scroll"
import "./Nav.css"


const Nav = ({isMenuOpen}) => {
	const items = ["Header", "Footer", "Home", "About", "Portfolio", "Contact", "Skills", "Services", "Clients"]
  return (
    <nav className={isMenuOpen ? "nav active" : "nav "}>
      <ul className={isMenuOpen ? "nav-menu active" : "nav-menu "}>
        {items.map((item, index) => (
          <li 
            key={index} 
            className="nav-item"
          >
            <Link 
              to={item} 
              className="nav-link"
              href={`/${item.toLowerCase()}`} // Добавлен атрибут href
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};


{/* <ul className="nav__menu">
	 <li className="nav__menu-list">
			<a href="" className="nav__menu-link">How It Works</a>
	 </li>
	 <li className="nav__menu-list">
			<a href="" className="nav__menu-link">Testimonials</a>
	 </li>
	 <li className="nav__menu-list">
			<a href="" className="nav__menu-link">FAQ</a>
	 </li>
</ul> */}
{/* <button className="btn header__btn">I am Button</button> */}

export default Nav


