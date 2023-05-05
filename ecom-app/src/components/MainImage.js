import React, { useState } from "react";

const MainImage = ({ img = [{ url: "" }] }) => {
  const [productImg, setProductImg] = useState(img[0]);
  return (
    <>
      <div className="row">
        <div className="col-lg-2">
          {img.map((curElem, index) => {
           return(
            <figure>
            <img className="img-fluid" src={curElem.url} alt="" key={index}  onClick={()=>setProductImg(curElem)}/>
          </figure>
           );
          })}
        </div>
        <div className="col-lg-10">
          <div className="main_img-block">
            <img className="img-fluid" src={productImg.url} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainImage;
