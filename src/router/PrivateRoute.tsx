import { PropsWithChildren, useContext } from "react";
import { AuthContext } from "../auth/contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoutes({ children }: PropsWithChildren<{}>) {
  const { authState } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  console.log("re-render");

  return authState.logged ? children : <Navigate to="login" />;
}
