import products from "../config/products.json"

import { actionType } from "../constants/constants";

export const posAction = () => {
  return async (dispatch) => {
    dispatch({

        //api call
      type: actionType.GET_PRODUCT_ITEMS,
      payload: products,
    });
  };
};
