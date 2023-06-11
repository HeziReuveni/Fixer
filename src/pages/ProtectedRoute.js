import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component }, ...rest) => {
  const verifyToken = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
  };

  return (
    <Fragment>
      {verifyToken() ? (
        <Route {...rest} component={Component} />
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
