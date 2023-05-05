import React from "react";

import Product from "./Product";

const GridView = ({ products }) => {
  console.log(products);
  return (
    <>
      {products.map((curElem) => {
        return <Product key={curElem.id} {...curElem} />;
      })}
    </>
  );
};

export default GridView;
