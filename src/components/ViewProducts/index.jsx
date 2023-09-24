import React from "react";
import Error from "../Error";
import Spinner from "../Spinner";
import { useLoaderData } from "../../hooks";
import { getProductsJSON } from "../../api";

const ViewProducts = (props) => {
  const { data, isFetching, error } = useLoaderData(getProductsJSON);
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {isFetching && <Spinner />}
      {isFetching ||
        data.map(({ id, title, price }) => (
          <article key={id}>
            <h3>{title}</h3>
            <h4>{price}</h4>
          </article>
        ))}
    </div>
  );
};

export default ViewProducts;
