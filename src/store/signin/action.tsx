import { SET_USERNAME, SET_PASSWORD } from "./type";

export const setUsernameAction = (username: string) => ({
  type: SET_USERNAME,
  data: username
});

export const setPasswordAction = (password: string) => ({
  type: SET_PASSWORD,
  data: password
});
