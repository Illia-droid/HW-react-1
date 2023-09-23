import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LANGUAGE } from "../../constants";
import { LanguageContext } from "../../contexts";

const NavMenu = () => {
  const [language] = useContext(LanguageContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            {language === LANGUAGE.UKRAINIAN ? "Домашня" : "Home"}
          </NavLink>
        </li>

        <li>
          <NavLink to="/sign-up">
            {language === LANGUAGE.UKRAINIAN ? "Зареєструватися" : "Sign Up"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">
            {language === LANGUAGE.UKRAINIAN ? "Увійти" : "Sign In"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/callback">
            {language === LANGUAGE.UKRAINIAN ? "callback" : "callback"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/stopwatch">
            {language === LANGUAGE.UKRAINIAN ? "Секундометр" : "Sstopwatch"}
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

export default NavMenu;
