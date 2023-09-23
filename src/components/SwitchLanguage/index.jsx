import React, { useContext } from "react";
import { LANGUAGE } from "../../constants";
import { LanguageContext } from "../../contexts";

const SwitchLanguage = () => {
  const [language, changeLanguage] = useContext(LanguageContext);
  return (
    <button onClick={changeLanguage}>
      {language === LANGUAGE.UKRAINIAN ? "ENGLISH" : "УКРАЇНСЬКА"}
    </button>
  );
};

export default SwitchLanguage;
