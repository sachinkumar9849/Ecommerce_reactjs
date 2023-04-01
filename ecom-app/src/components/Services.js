import React from "react";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="services_block">
                <div className="services_img">
                  <img src="" className="img-fluid" alt="" />
                </div>
                <div className="services_text">
                  <h5>Super fast and Free Delivery</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="">
                <h5>Non contact shipping</h5>
              </div>
              <div className="">
                <h5>Money back Guranteed</h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="services_block">
                <div className="services_img">
                  <img src="" className="img-fluid" alt="" />
                </div>
                <div className="services_text">
                  <h5>Super secure payment system</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
