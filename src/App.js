import React, { useReducer, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  ThemeContext,
  UserContext,
  LanguageContext,
  MenuContext,
} from "./contexts";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { THEMES, LANGUAGE, STATUS_MENU } from "./constants";

import Main from "./components/Main";
import StopWatchTimeout from "./components/StopWatchTimeout";

import { useAuthUser, useTheme, useClicker } from "./hooks";
import appReducer from "./appReducer";

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
  const [state, dispatch] = useReducer(appReducer, {
    isMenuOpen: false,
  });

  const handleOpenMenu = (event) => {
    event.stopPropagation();
    return dispatch({ type: STATUS_MENU.OPEN });
  };

  const handleCLoseMenu = () => dispatch({ type: STATUS_MENU.CLOSE });

  return (
    <MenuContext.Provider value={{ state, handleCLoseMenu }}>
      <LanguageContext.Provider value={[language, changeLanguage]}>
        <ThemeContext.Provider value={useTheme(THEMES.LIGHT)}>
          <UserContext.Provider value={{ user, selectUser: selectUser }}>
            <BrowserRouter>
              <MenuOpenIcon fontSize="large" onClick={handleOpenMenu} />
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
    </MenuContext.Provider>
  );
};

export default App;
