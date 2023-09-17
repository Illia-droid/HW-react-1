import React from "react";
import { LANGUAGE } from "../../constants";
import { withLanguage } from "../HOCs";

const SwitchLanguage = (props) => {
  const { language, changeLanguage } = props;
  return (
    <button onClick={changeLanguage}>
      {language === LANGUAGE.UKRAINIAN ? "ENGLISH" : "УКРАЇНСЬКА"}
    </button>
  );
};

export default withLanguage(SwitchLanguage);
