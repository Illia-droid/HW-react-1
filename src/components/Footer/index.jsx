import React from "react";
import cx from "classnames";
import { LanguageContext, ThemeContext } from "../../contexts";
import styles from "./Footer.module.scss";
import { LANGUAGE, THEMES } from "../../constants";

const Footer = () => {
  const render = ([language, changeLanguage]) => {
    return (
      <ThemeContext.Consumer>
        {([theme]) => {
          const classes = cx(styles.container, {
            [styles.light]: theme === THEMES.LIGHT,
            [styles.dark]: theme === THEMES.DARK,
          });
          return (
            <>
              <div className={classes}>
                &copy;2023
                <button onClick={changeLanguage}>
                  {language === LANGUAGE.UKRAINIAN ? "ENGLISH" : "УКРАЇНСЬКА"}
                </button>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  };

  return <LanguageContext.Consumer>{render}</LanguageContext.Consumer>;
};

export default Footer;
