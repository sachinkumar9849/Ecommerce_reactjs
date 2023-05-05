import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_product: [],
  set_giredview: true,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // start gired view
  const setGiredView = () => {
    return dispatch({ type: "SET_GIREDVIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRDUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGiredView }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
