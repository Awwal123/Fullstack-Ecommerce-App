// import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const userUID = localStorage.getItem("userUID");

  if (!userUID) {
    console.log("No userUID found in localStorage. Redirecting to /signup.");
  } else {
    console.log("Authenticated userUID:", userUID);
  }

  return userUID ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
