import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useLogin } from "./LoginProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useLogin();
  return (
    <Route
      {...rest}
      render={(props) =>
        !state.isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
