import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LanguageContext } from "../../contexts";
import { LANGUAGE } from "../../constants";

const LoaderPage = () => {
  const render = ([language]) => {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/loader/users">{language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}</NavLink>
          </li>
          <li>
            <NavLink to="/loader/events">{language === LANGUAGE.UKRAINIAN ? "Події" : "Events"}</NavLink>
          </li>
          <li>
            <NavLink to="/loader/prosucts">{language === LANGUAGE.UKRAINIAN ? "Товари" : "Prosucts"}</NavLink>
          </li>
        </ul>

        <Outlet />
      </>
    );
  };
  return <LanguageContext.Consumer>{render}</LanguageContext.Consumer>
};

export default LoaderPage;
