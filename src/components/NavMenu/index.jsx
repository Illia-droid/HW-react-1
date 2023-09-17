import React from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../contexts";
import { LANGUAGE } from "../../constants";
const NavMenu = () => {
  const render = ([language]) => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">{language === LANGUAGE.UKRAINIAN ? "Домашня" : "Home"}</NavLink>
          </li>
          <li>
            <NavLink to="/users">{language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}</NavLink>
          </li>
          <li>
            <NavLink to="/loader">{language === LANGUAGE.UKRAINIAN ? "Завантажувач" : "Loader"}</NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  return <LanguageContext.Consumer>{render}</LanguageContext.Consumer>
};

export default NavMenu;
