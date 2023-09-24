import React, { useContext, useState, useCallback } from "react";
// import styles from "./Home.module.scss";
import CardUsers from "../../components/CardSection/CardUser";
import { LANGUAGE, THEMES } from "../../constants";
import StopWatchHooks from "../../components/StopWatchHooks";
import { LanguageContext, ThemeContext } from "../../contexts";
const styleMap = {
  [THEMES.LIGHT]: { backgroundColor: "#eee", color: "#222" },
  [THEMES.DARK]: { backgroundColor: "#222", color: "#eee" },
};
const Home = () => {
  console.dir(useCallback);
  const [valueInput, setValue] = useState(10);
  const [language] = useContext(LanguageContext);
  const [theme] = useContext(ThemeContext);
  const handleValue = ({ target: { value } }) => {
    setValue(value);
  };
  const handleLogValue = () => {
    console.log(valueInput);
  };
  return (
    <>
      <div style={styleMap[theme]}>
        {language === LANGUAGE.UKRAINIAN ? "Домашня" : "Home"}
        <h2>
          value= {valueInput}{" "}
          <input type="range" value={valueInput} onChange={handleValue} />
        </h2>
        <button onClick={handleLogValue}>log value</button>
      </div>
      <CardUsers />
      <StopWatchHooks />
    </>
  );
};

export default Home;
