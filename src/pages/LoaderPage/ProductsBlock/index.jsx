import React, { useContext } from "react";
import ViewProducts from "../../../components/ViewProducts";
import { LANGUAGE } from "../../../constants";
import { LanguageContext } from "../../../contexts";

const ProductsBlock = () => {
  const [language] = useContext(LanguageContext);
  return (
    <>
      <h2>{language === LANGUAGE.UKRAINIAN ? "Товари" : "Products"}: </h2>
      <ViewProducts />
    </>
  );
};

export default ProductsBlock;
