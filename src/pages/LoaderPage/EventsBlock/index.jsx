import React from "react";
import LoaderData from "../../../components/LoaderData";
import { getEventsSON } from "../../../api";

import ViewEvents from "../../../components/ViewEvents";
import { LanguageContext } from "../../../contexts";
import { LANGUAGE } from "../../../constants";

const EventsBlock = () => {
  const render = ([language]) => {
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
  return <LanguageContext.Consumer>{render}</LanguageContext.Consumer>
};

export default EventsBlock;
