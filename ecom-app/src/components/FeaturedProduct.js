import React from "react";
import { useProductContext } from "../context/Productcontext";
import Product from "./Product";

const FeaturedProduct = () => {
  const { isLoading, featuredProduct } = useProductContext();
  //   console.log(featuredProduct);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h6>Product</h6>
              <h2>Featured Product</h2>
            </div>
          </div>
          <div className="row">
           
           {featuredProduct.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
         
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
