import React from "react";

import styles from "./Home.module.scss";
import CardUsers from "../../components/CardSection/CardUser";
import { LanguageContext } from "../../contexts";
import { LANGUAGE } from "../../constants";
const Home = () => {
  const render = ([language]) => {
    return (
      <>
        <div className={styles.spinner}>{language===LANGUAGE.UKRAINIAN?'Домашня':'Home'}</div>
        <CardUsers />
      </>
    );
  };

  return <LanguageContext.Consumer>{render}</LanguageContext.Consumer>;
};

export default Home;
