import React, { useContext } from "react";


import ViewUsers from "../../../components/ViewUsers";
import { LANGUAGE } from "../../../constants";
import { LanguageContext } from "../../../contexts";

const UsersBlock = (props) => {
  const [language] = useContext(LanguageContext);
  return (
    <>
      <h2>{language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}: </h2>
      <ViewUsers  />
    
    </>
  );
};

export default UsersBlock;
