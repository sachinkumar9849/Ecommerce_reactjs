const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
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

    default:
      return state;
  }
};

export default ProductReducer;