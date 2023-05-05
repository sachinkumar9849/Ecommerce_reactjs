import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import PageNevigation from "./components/PageNevigation";
import FormatPrice from "./components/Helpers/FormatPrice";
import MainImage from "./components/MainImage";
import Stars from "./components/Stars";
import AddTocart from "./components/AddTocart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduc, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduc(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }
  return (
    <div>
      <PageNevigation title={name} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <MainImage img={image}/>
            </div>
            <div className="col-lg-6">
              <div className="product_title">
                <h2>{name}</h2>
                <Stars stars={stars}reviews={reviews}/>
                
                <p>
                  MRP:
                  <del>
                    <FormatPrice price={price + 250000} />
                  </del>
                </p>
                <p>
                  Deal of the day <FormatPrice price={price} />
                </p>
                <p>{description}</p>
                <p>Available: {stock > 0 ? "In stock" : "Out stock"}</p>
                <p>
                  Id <strong>{id}</strong>
                </p>
                <p>
                  Brand<strong> {company}</strong>
                </p>
              </div>
              <hr />
              {stock > 0 && <AddTocart product ={singleProduct}/>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
