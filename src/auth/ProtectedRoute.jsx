// auth/ProtectedRoute.js
import React from "react";
import { useRecoilValue } from "recoil";
import { Navigate } from "react-router-dom";
import { sellerAuthState } from "../atoms/sellerAuthState";

const ProtectedRoute = ({ element }) => {
  const isSellerAuthenticated = useRecoilValue(sellerAuthState);

  return isSellerAuthenticated ? element : <Navigate to="/seller-login" />;
};

export default ProtectedRoute;
