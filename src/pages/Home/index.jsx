import React from "react";

import styles from "./Home.module.scss";
import CardUsers from "../../components/CardSection/CardUser";
const Home = () => {
  return (
    <>
      <div className={styles.spinner}>Home</div>
      <CardUsers />
    </>
  );
};

export default Home;
