import React, { useContext } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ThemeContext } from "../../contexts";
import { THEMES } from "../../constants";
// import { withTheme } from "../HOCs";

const SwitchTheme = () => {
  const [theme, changeTheme] = useContext(ThemeContext);
  return (
    <div onClick={changeTheme}>
      {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
    </div>
  );
};

export default SwitchTheme;
