import React, { useContext } from "react";
import ViewEvents from "../../../components/ViewEvents";
import { LANGUAGE } from "../../../constants";
import { LanguageContext } from "../../../contexts";

const EventsBlock = () => {
  const [language] = useContext(LanguageContext);
  return (
    <>
      <h2>{language === LANGUAGE.UKRAINIAN ? "Події" : "Events"}: </h2>
      <ViewEvents  />
    </>
  );
};

export default EventsBlock;
