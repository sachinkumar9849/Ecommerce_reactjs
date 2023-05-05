const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRDUCT":
      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
      };

    case "SET_GIREDVIEW":
        return{
            ...state,
            set_giredview: true,
        };

    default:
      return state;
  }
};
export default filterReducer;
