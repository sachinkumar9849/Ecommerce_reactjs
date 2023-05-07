const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRDUCT":
      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
      };

    case "SET_GIREDVIEW":
      return {
        ...state,
        set_giredview: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        set_giredview: false,
      };
    case "GET_SHORT_VALUE":
      
      return {
        ...state,
        sorting_value: action.payload,
      };

    // case "SHORTING_PRODUCT":
    //   let newSortData;
    //   let tempShortProduct = [...action.payload];

    //   if (state.sorting_value === "a-z") {
    //     newSortData = tempShortProduct.sort((a, b) => {
    //       return a.name.localeCompare(b.name);
    //     });
    //   }
    //   if (state.sorting_value === "z-a") {
    //     newSortData = tempShortProduct.sort((a, b) => {
    //       return b.name.localeCompare(a.name);
    //     });
    //   }
    //   return {
    //     ...state,
    //     filter_product: newSortData,
    //   };
    case "SHORTING_PRODUCT":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_product, sorting_value } = state;
      let tempSortProduct = [...filter_product];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_product: newSortData,
      };

    default:
      return state;
  }
};
export default filterReducer;
