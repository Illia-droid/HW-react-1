import React, { useContext } from "react";
import LoaderData from "../../../components/LoaderData";
import { getProductsSON } from "../../../api";
import ViewProducts from "../../../components/ViewProducts";
import { LANGUAGE } from "../../../constants";
import { LanguageContext } from "../../../contexts";

const ProductsBlock = () => {
  const [language] = useContext(LanguageContext);
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

export default ProductsBlock;
