import { createContext } from "react";
import { authContextType } from "./AuthProvider";

export const AuthContext = createContext<authContextType>(
  {} as authContextType
);
