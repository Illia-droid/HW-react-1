import React, { useContext } from "react";
import LoaderData from "../../../components/LoaderData";
import { getUserJSON } from "../../../api";
import ViewUsers from "../../../components/ViewUsers";
import { LANGUAGE } from "../../../constants";
import { LanguageContext } from "../../../contexts";

const UsersBlock = (props) => {
  const [language] = useContext(LanguageContext);
  return (
    <>
      <h2>{language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}: </h2>
      <LoaderData
        loadData={getUserJSON}
        render={(state) => <ViewUsers state={state} />}
      />
    </>
  );
};

export default UsersBlock;
