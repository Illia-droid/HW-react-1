import React, { useContext } from "react";
import LoaderData from "../../../components/LoaderData";
import { getEventsSON } from "../../../api";
import ViewEvents from "../../../components/ViewEvents";
import { LANGUAGE } from "../../../constants";
import { LanguageContext } from "../../../contexts";

const EventsBlock = () => {
  const [language] = useContext(LanguageContext);
  return (
    <>
      <h2>{language === LANGUAGE.UKRAINIAN ? "Події" : "Events"}: </h2>
      <LoaderData
        loadData={getEventsSON}
        render={(state) => <ViewEvents state={state} />}
      />
    </>
  );
};

export default EventsBlock;
