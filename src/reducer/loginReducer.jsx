export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loginData: action.payload,
        status: false,
      };
    default:
      return state;
  }
};
