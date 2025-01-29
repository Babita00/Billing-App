import { actionType } from "../constants/constants";

export const loginAction = (loginData) => {
  setTimeout(() => {
    return {
      type: actionType.LOGIN,
      payload: loginData,
    };
  }, 2000);
};
