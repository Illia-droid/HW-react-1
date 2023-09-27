import React, { useContext, useEffect, useId } from "react";
import { NavLink } from "react-router-dom";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import cx from "classnames";
import { LANGUAGE } from "../../constants";
import { LanguageContext, MenuContext } from "../../contexts";
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  const [language] = useContext(LanguageContext);
  const {
    state: { isMenuOpen },
    handleCLoseMenu,
  } = useContext(MenuContext);
  const navClassesNames = cx(styles.navMenu, { [styles.open]: isMenuOpen });

  const idNav = useId();

  useEffect(() => {
    const handleCLick = ({ target }) => {
      if (
        isMenuOpen &&
        document.getElementById(idNav).contains(target) === false
      ) {
        handleCLoseMenu();
      }
    };
    window.addEventListener("click", handleCLick);
    return () => {
      window.removeEventListener("click", handleCLick);
    }; // eslint-disable-next-line
  }, [isMenuOpen]);
  return (
    <nav className={navClassesNames} id={idNav}>
      <CancelPresentationIcon
        fontSize="large"
        className={styles.close}
        onClick={handleCLoseMenu}
      />
      <ul>
        <li>
          <NavLink to="/">
            {language === LANGUAGE.UKRAINIAN ? "Домашня" : "Home"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat">
            {language === LANGUAGE.UKRAINIAN ? "Чат" : "CHat"}
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
