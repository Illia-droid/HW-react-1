import React from "react";
import LoaderData from "../../components/LoaderData";
import { getUserJSON, getEventsSON, getProductsSON } from "../../api";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
// import LoaderUsers from "../../components/LoaderUsers";
// import LoaderEvents from "../../components/LoaderEvents";

const LoaderPage = () => {
  return (
    <div>
      <h2>Users: </h2>
      <LoaderData
        loadData={getUserJSON}
        render={({ error, isFetching, data }) => {
          if (error) {
            return <Error />;
          }
          return (
            <div>
              {isFetching && <Spinner />}
              {isFetching || data.map(({ id, name }) => <p key={id}>{name}</p>)}
            </div>
          );
        }}
      />
      {/* <LoaderUsers /> */}
      <h2>Events: </h2>
      {/* <LoaderData loadData={getEventsSON} render /> */}
      {/* <LoaderEvents /> */}
      <h2>Products: </h2>
      {/* <LoaderData loadData={getProductsSON} render /> */}
    </div>
  );
};

export default LoaderPage;
