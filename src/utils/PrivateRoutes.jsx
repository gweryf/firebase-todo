import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userData } from "./UserContext";
function PrivateRoutes() {
  const { user, setUser } = useContext(userData);
  return user ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoutes;
