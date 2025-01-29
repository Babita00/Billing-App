import { actionType } from "../constants/constants";

export const loginAction = (loginData) => {

  // for ayanc action dispatch is used 
  //put async keyword before (dispatch) 

  return async (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: actionType.LOGIN,
        payload: loginData,
      });
      dispatch({
        type: actionType.REGISTER,
        payload: loginData,
      });
    }, 5000);
  };

  // setTimeout(() => {
  //   return {
  //     type: actionType.LOGIN,
  //     payload: loginData,
  //   };
  // }, 2000);
};
