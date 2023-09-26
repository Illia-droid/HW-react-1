import { useState } from "react";
import { THEMES } from "../constants";

const useTheme = (choosedTheme) => {
  const [theme, setTheme] = useState(choosedTheme);
  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };
  return [theme, changeTheme];
};
export default useTheme;
