import React from "react";
import LoaderData from "../../../components/LoaderData";
import { getProductsSON } from "../../../api";
import ViewProducts from "../../../components/ViewProducts";

const ProductsBlock = () => {
  return (
    <>
      <h2>Products: </h2>
      <LoaderData
        loadData={getProductsSON}
        render={(state) => <ViewProducts state={state} />}
      />
    </>
  );
};

export default ProductsBlock;
