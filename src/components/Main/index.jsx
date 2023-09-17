
import React from "react";
import cx from "classnames";
import { Route, Routes } from "react-router-dom";
import UsersPage from "../../pages/UsersPage";
import LoaderPage from "../../pages/LoaderPage";
import UsersBlock from "../../pages/LoaderPage/UsersBlock";
import EventsBlock from "../../pages/LoaderPage/EventsBlock";
import ProductsBlock from "../../pages/LoaderPage/ProductsBlock";
import Page404 from "../../pages/Page404";
import styles from "./Main.module.scss";
import { ThemeContext } from "../../contexts";
import { THEMES } from "../../constants";
import Home from "../../pages/Home";

const Main = () => {
  const render = ([theme]) => {
    const classes = cx(styles.container, {
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
    return (
      <main className={classes}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/loader/" element={<LoaderPage />}>
            <Route path="users" element={<UsersBlock />} />
            <Route path="events" element={<EventsBlock />} />
            <Route path="prosucts" element={<ProductsBlock />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </main>
    );
  };
  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
};

export default Main;
