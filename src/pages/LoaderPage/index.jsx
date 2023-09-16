import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LoaderPage = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/loader/users">users</NavLink>
        </li>
        <li>
          <NavLink to="/loader/events">events</NavLink>
        </li>
        <li>
          <NavLink to="/loader/prosucts">prosucts</NavLink>
        </li>
      </ul>
      
      <Outlet />
    </>
  );
};

export default LoaderPage;
