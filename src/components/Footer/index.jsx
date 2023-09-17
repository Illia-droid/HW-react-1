import React from "react";
import cx from "classnames";
import styles from "./Footer.module.scss";
import { THEMES } from "../../constants";
import { withTheme } from "../HOCs";
import SwitchLanguage from "../SwitchLanguage";

const Footer = ({ theme }) => {
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

export default withTheme(Footer);
