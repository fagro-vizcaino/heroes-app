import { LOGIN, LOGOUT } from "../types/types";

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload.data,
      };
    case LOGOUT:
      return {
        ...action.payload.data,
        user: "",
        logged: false,
      };
    default:
      return state;
  }
};

const initialState = { logged: false, user: "Tanjiro" };

export interface SetLoginAction {
  type: typeof LOGIN;
  payload: {
    // Define your payload properties here
    data: payloadUserAuth;
    // ... other properties
  };
}

export interface SetLogoutAction {
  type: typeof LOGOUT;
  payload: {
    // Define your payload properties here
    data: payloadUserAuth;
    // ... other properties
  };
}

type Action = SetLoginAction | SetLogoutAction;
export type payloadUserAuth = {
  user: string;
  logged: boolean;
};
