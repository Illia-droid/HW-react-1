import React from "react";
import LoaderData from "../../components/LoaderData";
import { getUserJSON, getEventsSON, getProductsSON } from "../../api";
import ViewUsers from "../../components/ViewUsers";
import ViewEvents from "../../components/ViewEvents";
import ViewProducts from "../../components/ViewProducts";
// import LoaderUsers from "../../components/LoaderUsers";
// import LoaderEvents from "../../components/LoaderEvents";

const LoaderPage = () => {
  return (
    <div>
      <h2>Users: </h2>
      <LoaderData
        loadData={getUserJSON}
        render={(state) => <ViewUsers state={state} />}
      />

      <h2>Events: </h2>
      <LoaderData
        loadData={getEventsSON}
        render={(state) => <ViewEvents state={state} />}
      />

      <h2>Products: </h2>
      <LoaderData
        loadData={getProductsSON}
        render={(state) => <ViewProducts state={state} />}
      />
    </div>
  );
};

export default LoaderPage;
