export const registerReducer = (state = {}, action) => {
    switch (action.type) {
      case "REGISTER":
        return {
          ...state,
          registerData: action.payload,
        };
      default:
        return state; 
    }
  };
  