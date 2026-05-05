import { Navigate, Outlet } from "react-router";

function PublicRoutes() {
  const token = localStorage.getItem("token");

  return token ? (
    <Navigate
      to="/dashboard"
      replace
    />
  ) : (
    <Outlet />
  );
}

export default PublicRoutes;