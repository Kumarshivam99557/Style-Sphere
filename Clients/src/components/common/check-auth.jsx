import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, isLoading, children }) => {
  const location = useLocation();

  // Loading state - do not redirect until authentication is confirmed
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth/login" />;
  }

  // If the user is authenticated and tries to access login/registration, redirect them based on role
  if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/registration"))) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // If a non-admin user tries to access admin pages, redirect to unauthorized page
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("/admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // If an admin tries to access shopping pages, redirect to admin dashboard
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  // If everything is valid, render the children (requested page)
  return <div>{children}</div>;
};

export default CheckAuth;
