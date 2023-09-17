import React from "react";
import { NavLink } from "react-router-dom";
import { LANGUAGE } from "../../constants";
import { withLanguage } from "../HOCs";
const NavMenu = (props) => {
  const { language } = props;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            {language === LANGUAGE.UKRAINIAN ? "Домашня" : "Home"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            {language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/loader">
            {language === LANGUAGE.UKRAINIAN ? "Завантажувач" : "Loader"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withLanguage(NavMenu);
