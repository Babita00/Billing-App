import products from "../config/products.json";

import { actionType } from "../constants/constants";
import { showLoader, hideLoader } from "./loaderAcrion";
import { SAVE_ORDER } from "../constants/constants";

export const posAction = () => {
  return async (dispatch) => {
    dispatch({
      //api call
      type: actionType.GET_PRODUCT_ITEMS,
      payload: products,
    });
  };
};

// export const summaryCalculation = (products) => {
//   return async (dispatch) => {
//     dispatch({

//         //api call
//       type: 'SUMMARY',
//       payload: products,
//     });
//   };
// };

export const saveOrder = (request) => {
  return async (dispatch) => {
    dispatch(showLoader());

    const response = await fetch(SAVE_ORDER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    const result = await response.json();
    // const result = {status: true, message: 'Order Save Success'}
    dispatch(hideLoader());

    dispatch({
      type: actionType.SAVE_ORDER,
      payload: result,
    });
  };
};
