import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};
export const LoginRoute = () => {
  const user = false;
  return user ? <Navigate to={"/"} /> : <Outlet />;
};
