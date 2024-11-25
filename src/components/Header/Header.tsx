import { NavLink } from "react-router-dom";
import { RoutePath } from "../../routes";
import Button from "../Button/Button";
import "./Header.scss";

export const NAV_LINKS = [
  { label: "Credit card", path: RoutePath.loan },
  { label: "Product", path: "/test1" },
  { label: "Account", path: "/test2" },
  { label: "Resources", path: "/test3" },
];

const Header = () => {
  return (
    <header className="header container">
      <NavLink
        className="header__logo"
        to={RoutePath.main}
      >
        NeoBank
      </NavLink>
      <nav>
        <ul className="header__list">
          {NAV_LINKS.map(({ label, path }) => (
            <li
              key={label}
              className="header__list"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__list-item header__list-item--active" : "header__list-item"
                }
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="header__button">Online Bank</Button>
    </header>
  );
};

export default Header;
