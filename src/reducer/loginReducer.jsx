export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loginData: action.payload,  // Compare this line from BillingApp/src/actions/loginActions.jsx:
      };
    default:
      return state;
  }
};
