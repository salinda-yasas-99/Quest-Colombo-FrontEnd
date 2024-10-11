import React from "react";
import { useSelector } from "react-redux";
import {
  getToken,
  getUser,
  removeToken,
  removeUser,
} from "../../utils/authUtils";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  const tokan = getToken();
  const localUser = getUser();

  if (!user && user?.role !== "admin" && !tokan && !localUser) {
    removeToken();
    removeUser();
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default AdminProtectedRoute;
