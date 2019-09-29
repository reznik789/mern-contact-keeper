import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...restProps }) => {
  const { isAuthentificated, loading } = useContext(AuthContext);
  return (
    <Route
      {...restProps}
      render={routeProps =>
        !!isAuthentificated || !!loading ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
