import React from "react";
// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children,isLoading }) => {


  // const {isLoading}=useSelector((state)=>state.auth);
  // console.log("toolkit",isLoading);
  console.log("authexxxx",isAuthenticated)
  const location = useLocation();

  console.log("checkauthpage", location.pathname, "authentication", isAuthenticated, "loading", isLoading);

  // While loading, don't redirect anywhere

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated and trying to access a protected page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/registration")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // If the user is authenticated and trying to access login or registration
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/registration"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // If an authenticated non-admin user tries to access an admin page
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // If an authenticated admin tries to access a non-admin (shop) page
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  // If authenticated and everything is valid, render the requested component
  return <div>{children}</div>;
};

export default CheckAuth;
