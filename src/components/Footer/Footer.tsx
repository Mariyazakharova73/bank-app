import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import { RoutePath } from "../../routes";
import { FOOTER__LINKS } from "../../utils/constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__info-wrapper">
          <NavLink
            to={RoutePath.main}
            className="footer__logo-link"
          >
            <img
              className="footer__logo"
              src={logoImg}
              alt="Логотип"
            />
          </NavLink>
          <div className="footer__contacts-wrapper">
            <a
              className="footer__tel"
              href="tel:+74959842513"
            >
              +7 (495) 984 25 13
            </a>
            <a
              className="footer__email"
              href="mailto:info@neoflex.ru"
            >
              info@neoflex.ru
            </a>
          </div>
        </div>
        <nav className="footer__nav ">
          <ul className="footer__links-list">
            {FOOTER__LINKS.map((link) => {
              return (
                <li key={link.label}>
                  <NavLink
                    className="footer__link"
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="footer__divider"></div>
        <p className="footer__text">
          We use cookies to personalize our services and improve the user experience of our website. Cookies
          are small files containing information about previous visits to a website. If you do not want to use
          cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
};

export default Footer;
