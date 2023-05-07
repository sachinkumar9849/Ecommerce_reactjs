import React from "react";
import FormatPrice from "./Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <section>
      <div className="container">
        <div class="row">
          <div className="col-12">
            {products.map((curElem) => {
              const { id, name, image, price, category, description } = curElem;
              return (
                <>
                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <div className="list_view-img">
                        <img
                          src={image}
                          className="card-img-top w-100"
                          class="img-fluid"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                          {" "}
                          {<FormatPrice price={price} />}{" "}
                        </p>
                        <strong>{category}</strong>
                        <p>{description.slice(0, 100)}...</p>
                        <NavLink to={`/singleproduct/${id}`}>
                          <button className="btn btn-info">Read more</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListView;
