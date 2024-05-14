import { createContext, useLayoutEffect } from "react";
import {  useContext, useReducer } from "react";
const AppContext = createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
export function AppProvider({ children }) {
  const [user, dispatch] = useReducer(AuthReducer, {
    user: null,
  });
  const baseUrl = "http://localhost:8080";
  return (
    <AppContext.Provider value={{...user, dispatch, baseUrl }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const Context = useContext(AppContext);
  if (Context == undefined) {
    throw new Error("useAuth must be used inside an ContextProvider");
  }
  return Context;
}
