import React from "react";
import styles from "./Home.module.scss";
import CardUsers from "../../components/CardSection/CardUser";
import { LANGUAGE } from "../../constants";
import { withLanguage } from "../../components/HOCs";

const Home = (props) => {
  const {language} = props;
    return (
      <>
        <div className={styles.spinner}>{language===LANGUAGE.UKRAINIAN?'Домашня':'Home'}</div>
        <CardUsers />
      </>
    );
  };

export default withLanguage(Home);
