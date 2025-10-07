import { Link } from "react-scroll";

const FooterLinkGroup = ({ title, Links, isSocial }) => {
  return (
    <div className={isSocial ? "follow-group" : "info-group"}>
      <h3>{title}</h3>
      <ul>
        {Links.map((link) => (
          <li key={link.id}>
            {isSocial ? (
              <a href={link.url} target="_blank" rel="noreferrer">
                {typeof link.icon === "function" ? link.icon() : link.icon}
              </a>
            ) : (
              <Link
                to={link.url}
                smooth={true}
                duration={1000}
                offset={-80} // Коррекция для фиксированной шапки
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinkGroup;
