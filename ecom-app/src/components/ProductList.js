import React from 'react';
import { useFilterContext } from '../context/filter_cotext';
import GridView from './GridView';
import ListView from './ListView';
// import GridView from '../GridView';

const ProductList = () => {
  const { filter_product, set_giredview } = useFilterContext();
    if (set_giredview === true) {
      return <GridView products={filter_product} />;
    }
    if (set_giredview === false) {
      return <ListView products={filter_product} />;
    }
}

export default ProductList;



// import React from "react";

// import { useFilterContext } from "./context/filter_cotext";
// import GridView from "./GridView";

// const ProductList = () => {
//   const { filter_product, setGiredView } = useFilterContext();
//   if (setGiredView) {
//     return <GridView products={filter_product} />;
//   }
// };

// export default ProductList;
