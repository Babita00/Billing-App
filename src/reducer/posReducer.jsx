import { actionType } from "../constants/constants";
export default (state = {}, action) => {
  if (action.type === actionType.GET_PRODUCT_ITEMS) {
    return action.payload;
  } else {
    return state;
  }
};
