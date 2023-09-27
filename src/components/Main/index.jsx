import React, { useContext } from "react";
import cx from "classnames";
import { Route, Routes } from "react-router-dom";
import UsersPage from "../../pages/UsersPage";
import LoaderPage from "../../pages/LoaderPage";
import UsersBlock from "../../pages/LoaderPage/UsersBlock";
import EventsBlock from "../../pages/LoaderPage/EventsBlock";
import ProductsBlock from "../../pages/LoaderPage/ProductsBlock";
import SignInForm from "../forms/SignInForm";
import Page404 from "../../pages/Page404";
import styles from "./Main.module.scss";
import { ThemeContext } from "../../contexts";
import { THEMES } from "../../constants";
import Home from "../../pages/Home";
import StopWatch from "../StopWatch";
import FormsPage from "../../pages/FormsPage";
import CallbackForm from "../forms/CallbackForm";
import Chat from "../Chat";

const Main = () => {
  const [theme] = useContext(ThemeContext);
  const classes = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <main className={classes}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/sign-up" element={<FormsPage />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/callback" element={<CallbackForm />} />
        <Route path="/stopwatch" element={<StopWatch />} />
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

export default Main;
