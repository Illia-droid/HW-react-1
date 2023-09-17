import React from "react";
import LoaderData from "../../../components/LoaderData";
import { getUserJSON } from "../../../api";
import ViewUsers from "../../../components/ViewUsers";
import { LANGUAGE } from "../../../constants";
import { withLanguage } from "../../../components/HOCs";

const UsersBlock = (props) => {
  const { language } = props;
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

export default withLanguage(UsersBlock);
