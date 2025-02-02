import { actionType } from "../constants/constants";

const productItemsReducer = (state = {}, action) => {
  if (action.type === actionType.GET_PRODUCT_ITEMS) {
    return action.payload;
  } else {
    return state;
  }
};

export default productItemsReducer;
