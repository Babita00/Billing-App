import { actionType } from "../constants/constants";

export const RegisterAction = (registerData) => {
  return {
    type: actionType.REGISTER,
    payload: registerData,
  };
};
