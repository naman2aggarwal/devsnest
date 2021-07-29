import React from "react";
import { useContext, useReducer } from "react";

const LoginContext = React.createContext();

const initialState = {
  isAuthenticated: false,
};

export const LOGIN_PROVIDER_ACTION_LIST = {
  LOGIN: "login",
  LOGOUT: "logout",
};

export function useLogin() {
  return useContext(LoginContext);
}

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_PROVIDER_ACTION_LIST.LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGIN_PROVIDER_ACTION_LIST.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
