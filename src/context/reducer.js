const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      console.log("loadinggggggggggggg");
      return {
        ...state,
        loading: action.loading,
      };
    case "GET_ERROR":
      return {
        ...state,
        loading: action.loading,
        err: action.err,
      };
    case "GET_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        showModal: true,
      };
    case "UPDATE_LIMIT":
      return {
        ...state,
        limit: state.limit + 10,
      };
    default:
      throw new Error("there is no matching type");
  }
};

export default reducer;
