import React from "react";

const HeroSection = ({myData}) => {
  const {name} = myData;
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="py-5">
                <h6>Welcome to</h6>
                <div className="py-2">
                  <h1>{name}</h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, corrupti iste debitis dignissimos modi sunt ipsum
                  excepturi nam sed illum veniam? Esse placeat quaerat impedit
                  nam consectetur mollitia modi ratione.
                </p>
                <button className="btn btn-success rounded-0 px-4 py-2">
                  Read more
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_img">
                <img src="./images/hero.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
