import React, { useContext } from "react";
import styles from "./Home.module.scss";
import CardUsers from "../../components/CardSection/CardUser";
import { LANGUAGE } from "../../constants";
import StopWatchHooks from "../../components/StopWatchHooks";
import { LanguageContext } from "../../contexts";

const Home = () => {
  const [language] = useContext(LanguageContext);
  return (
    <>
      <div className={styles.spinner}>
        {language === LANGUAGE.UKRAINIAN ? "Домашня" : "Home"}
      </div>
      <CardUsers />
      <StopWatchHooks />
    </>
  );
};

export default Home;
