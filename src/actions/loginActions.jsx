import { actionType } from "../constants/constants";

export const LoginAction = (loginData) => {
  return {
    type: actionType.LOGIN,
    payload: loginData,
  };
};