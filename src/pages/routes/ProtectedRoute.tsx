import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean,
  children: React.ReactNode,
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
  if(!props.isLoggedIn) 
    return (<Navigate to="login" replace />);
  
  return <React.Fragment>
    {props.children}
  </React.Fragment>;
};

export default ProtectedRoute;