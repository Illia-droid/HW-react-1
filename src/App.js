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
import { useAuthUser, useTheme, useClicker } from "./hooks";
// import LearnHooks from "./components/LearnHooks";

const App = (props) => {
  const [language, setLanguage] = useState(LANGUAGE.ENGLISH);
  const { user, selectUser } = useAuthUser({
    id: 1,
    firstName: "Brad",
    lastName: "Pitt",
    isSelect: false,
    avatar: "https://api.ambr.top/assets/UI/UI_AvatarIcon_PlayerBoy.png",
  });
  // const { theme, changeTheme } = useTheme(THEMES.LIGHT);
  const changeLanguage = () => {
    setLanguage(
      language === LANGUAGE.ENGLISH ? LANGUAGE.UKRAINIAN : LANGUAGE.ENGLISH
    );
  };

  return (
    <LanguageContext.Provider value={[language, changeLanguage]}>
      <ThemeContext.Provider value={useTheme(THEMES.LIGHT)}>
        <UserContext.Provider value={{ user, selectUser: selectUser }}>
          <BrowserRouter>
            <p>{useClicker()}</p>
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
