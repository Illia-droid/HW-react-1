import React, { useState } from "react";
import { ThemeContext, UserContext, LanguageContext } from "./contexts";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { THEMES } from "./constants";
import { LANGUAGE } from "./constants";
import Main from "./components/Main";
import StopWatchTimeout from "./components/StopWatchTimeout";
// import LearnHooks from "./components/LearnHooks";

const App = (props) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [language, setLanguage] = useState(LANGUAGE.ENGLISH);
  const [user, setUser] = useState({
    id: 1,
    firstName: "Brad",
    lastName: "Pitt",
    isSelect: false,
    avatar: "https://api.ambr.top/assets/UI/UI_AvatarIcon_PlayerBoy.png",
  });

  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };
  const changeLanguage = () => {
    setLanguage(
      language === LANGUAGE.ENGLISH ? LANGUAGE.UKRAINIAN : LANGUAGE.ENGLISH
    );
  };
  const selectUser = (id) => {
    setUser({ ...user, isSelect: !user.isSelect });
  };

  return (
    <LanguageContext.Provider value={[language, changeLanguage]}>
      <ThemeContext.Provider value={[theme, changeTheme]}>
        <UserContext.Provider value={{ user, selectUser: selectUser }}>
          <BrowserRouter>
            <Header />
            <StopWatchTimeout />
            {/* <LearnHooks /> */}
            <Main />
            <Footer />
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
