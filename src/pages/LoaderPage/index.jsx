import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LANGUAGE } from "../../constants";
import { withLanguage } from "../../components/HOCs";

const LoaderPage = (props) => {
  const { language } = props;
  return (
    <>
      <ul>
        <li>
          <NavLink to="/loader/users">
            {language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/loader/events">
            {language === LANGUAGE.UKRAINIAN ? "Події" : "Events"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/loader/prosucts">
            {language === LANGUAGE.UKRAINIAN ? "Товари" : "Prosucts"}
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default withLanguage(LoaderPage);
