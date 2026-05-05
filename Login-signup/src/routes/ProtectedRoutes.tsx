import { Navigate, Outlet } from "react-router";

function ProtectedRoutes() {
  const token = localStorage.getItem("token");

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
}

export default ProtectedRoutes;