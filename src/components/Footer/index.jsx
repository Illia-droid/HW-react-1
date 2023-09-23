import React, { useContext } from "react";
import cx from "classnames";
import styles from "./Footer.module.scss";
import { THEMES } from "../../constants";
import SwitchLanguage from "../SwitchLanguage";
import { ThemeContext } from "../../contexts";

const Footer = () => {
  const [theme] = useContext(ThemeContext);
  const classes = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <>
      <div className={classes}>
        &copy;2023
        <SwitchLanguage />
      </div>
    </>
  );
};

export default Footer;
