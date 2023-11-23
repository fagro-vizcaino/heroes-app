import { PropsWithChildren, useContext } from "react";
import { AuthContext } from "../auth/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }: PropsWithChildren<{}>) {
  const { authState } = useContext(AuthContext);

  return !authState.logged ? children : <Navigate to={"/marvel"} />;
}
