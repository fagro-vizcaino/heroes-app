import { PropsWithChildren, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import {
  SetLoginAction,
  SetLogoutAction,
  authReducer,
  payloadUserAuth,
} from "./authReducer";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  console.log("is logged in?", user);

  return {
    logged: !!user,
    user: user?.user,
  };
};

export function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [authState, dispatch] = useReducer(
    authReducer,
    {
      logged: false,
      user: "",
    },
    init
  );

  const login = (user = "") => {
    const action: SetLoginAction = {
      type: "AUTH_LOGIN",
      payload: {
        data: {
          logged: true,
          user,
        },
      },
    };
    dispatch(action);
    localStorage.setItem("user", JSON.stringify({ ...action.payload.data }));
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action: SetLogoutAction = {
      type: "AUTH_LOGOUT",
      payload: {
        data: {
          logged: false,
          user: "",
        },
      },
    };
    dispatch(action);
  };
  return (
    <AuthContext.Provider value={{ login, authState, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export type authContextType = {
  login: (user: string) => void;
  logout: () => void;
  authState: payloadUserAuth;
};
