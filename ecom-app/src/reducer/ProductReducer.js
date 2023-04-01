const ProductReducer = (state, action) => {
  switch (action.type) {
    // case "SET_LOADING":
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    case "MY_API_DATA":
      const featuredData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProduct: featuredData,
      };
    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct:action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
