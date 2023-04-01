import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-7 mx-auto text-center">
              <div className="error_block">
                <h1>404</h1>
                <h3>UH OH! You're lost.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  pariatur quo molestias ducimus. Odit consequuntur quis
                  quisquam laborum officiis neque molestias.
                </p>
                <NavLink to="/">
                  <button  className="btn btn-success rounded-0">Home</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
