import React from "react";
import LoaderData from "../../../components/LoaderData";
import { getProductsSON } from "../../../api";
import ViewProducts from "../../../components/ViewProducts";
import { LANGUAGE } from "../../../constants";
import { withLanguage } from "../../../components/HOCs";

const ProductsBlock = (props) => {
  const { language } = props;
  return (
    <>
      <h2>{language === LANGUAGE.UKRAINIAN ? "Товари" : "Products"}: </h2>
      <LoaderData
        loadData={getProductsSON}
        render={(state) => <ViewProducts state={state} />}
      />
    </>
  );
};

export default withLanguage(ProductsBlock);
