import React from "react";
import styled from "styled-components";
import ProductFilter from "./components/ProductFilter";
import Short from "./components/Short";

import ProductList from "./components/ProductList";
// import { useFilterContext } from "./context/filter_cotext";

const Products = () => {


  return (
    <Wrapper>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <ProductFilter/>
            </div>
            <div className="col-lg-8">
              <div className="row">
               <div className="col-lg-12">
               <Short/>
               </div>
              </div>
              <div className="row">
                
                  <ProductList/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Products;
