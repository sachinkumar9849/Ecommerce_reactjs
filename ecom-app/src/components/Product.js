import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";
const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <div className="col-lg-4">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <img src={image} className="card-img-top w-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"> {<FormatPrice price={price}/>} </p>
            <strong>{category}</strong>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
