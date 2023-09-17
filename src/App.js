import React, { Component } from "react";
import { ThemeContext, UserContext, LanguageContext } from "./contexts";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { THEMES } from "./constants";
import { LANGUAGE } from "./constants";
import Main from "./components/Main";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
        isSelect: false,
        avatar: "https://api.ambr.top/assets/UI/UI_AvatarIcon_PlayerBoy.png",
      },
      theme: THEMES.LIGHT,
      language: LANGUAGE.UKRAINIAN,
    };
  }

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
    });
  };
  changeLanguage = () => {
    this.setState({
      language:
        this.state.language === LANGUAGE.ENGLISH
          ? LANGUAGE.UKRAINIAN
          : LANGUAGE.ENGLISH,
    });
  };
  selectUser = (id) => {
    this.setState({
      user: { ...this.state.user, isSelect: !this.state.user.isSelect },
    });
  };
  render() {
    const { user, theme, language } = this.state;
    return (
      <LanguageContext.Provider value={[language, this.changeLanguage]}>
        <ThemeContext.Provider value={[theme, this.changeTheme]}>
          <UserContext.Provider value={{ user, selectUser: this.selectUser }}>
            <BrowserRouter>
              <Header />
              <Main />
              <Footer />
            </BrowserRouter>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    );
  }
}
export default App;
