import { SET_USERNAME, SET_PASSWORD } from "./type";
import { Action } from "../interface";

export type State = Readonly<{
  username: string | null;
  password: string;
}>;

const defaultState: State = {
  username: localStorage.getItem("username"),
  password: ""
};

export default (state = defaultState, action: Action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.data
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.data
      };
    default:
      return state;
  }
};
