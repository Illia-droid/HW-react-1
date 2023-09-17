import React from "react";
import LoaderData from "../../../components/LoaderData";
import { getEventsSON } from "../../../api";
import ViewEvents from "../../../components/ViewEvents";
import { LANGUAGE } from "../../../constants";
import { withLanguage } from "../../../components/HOCs";

const EventsBlock = (props) => {
  const { language } = props;
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

export default withLanguage(EventsBlock);
