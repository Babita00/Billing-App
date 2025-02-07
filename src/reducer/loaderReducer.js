import { loaderType } from "../constants/constants";

const loaderReducer = (state = {}, action) => {
  switch (action.type) {
    case loaderType.SHOW:
      return { ...state, isLoading: true };

    case loaderType.HIDE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loaderReducer;
