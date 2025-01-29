import { actionType } from "../constants/constants";

export const loginAction = (loginData) => {
  return {
    type: actionType.LOGIN,
    payload: loginData,
  };
};