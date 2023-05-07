import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_product: [],
  set_giredview: true,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // start gired view
  const setGiredView = () => {
    return dispatch({ type: "SET_GIREDVIEW" });
  };
  // start LIST view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  // shortin price function
  const shorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SHORT_VALUE",payload: userValue  });
  };
  // to short the product
  useEffect(() => {
    dispatch({ type: "SHORTING_PRODUCT"});
  }, [products, state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRDUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGiredView, setListView, shorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
