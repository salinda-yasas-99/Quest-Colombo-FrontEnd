import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  getToken,
  getUser,
  removeToken,
  removeUser,
} from "../../utils/authUtils";

const UserProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  const tokan = getToken();
  const localUser = getUser();

  if (!user && user?.role !== "user" && !tokan && !localUser) {
    removeToken();
    removeUser();
    return <Navigate to="/" />;
  }

  return children;
};

export default UserProtectedRoute;
