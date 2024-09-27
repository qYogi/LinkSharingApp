import { createContext, useContext } from "react";
import * as React from "react";

export interface AppContextType {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  userHasAuthenticated: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}
