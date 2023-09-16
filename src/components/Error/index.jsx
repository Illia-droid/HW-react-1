import React from "react";
import errorPic from "./error.webp";
import styles from "./Error.module.scss";
const Error = () => {
  return <img className={styles.img} src={errorPic} alt="error" />;
};

export default Error;
