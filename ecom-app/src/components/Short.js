import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useFilterContext } from "../context/filter_cotext";
import "./style.css";

const Short = () => {
  const { filter_product, set_giredview, setGiredView, setListView ,shorting} =
    useFilterContext();
  return (
    <div className="row">
      <div className="col-lg-4">
        <button
          className={set_giredview ? "active shortBtn " : "shortBtn"}
          onClick={setGiredView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={!set_giredview ? "active shortBtn " : "shortBtn"}
          onClick={setListView}
        >
          <AiOutlineUnorderedList />
        </button>
      </div>
      <div className="col-lg-4">
        <h3>{`${filter_product.length}`} Product Available</h3>
      </div>
      <div className="col-lg-4">
      <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={shorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Short;
