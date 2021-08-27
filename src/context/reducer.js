const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userData: action.dataLogin,
      };
    case "REGISTER":
      return {
        ...state,
        userData: action.dataRegister,
      };
    case "LOADING":
      console.log("itu", action.payload);
      return {
        ...state,
        loading: true,
      };
    case "LOGOUT":
      return {
        ...state,
        userData: null,
      };
    case "GET_ERROR":
      return {
        ...state,
        err: action.payload,
      };
    case "GET_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
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
