// import React from "react";
// import { Route } from "react-router-dom";
// import AuthGuard from "../guards/auth.guard";
// import Users from "../components/Users";

import { Outlet } from "react-router-dom";
import Login from "../components/Login";

// const AuthRoutes = [
//   <Route key="users" path="/users" element={<AuthGuard component={<Users />} />} />,
// ];

// export default AuthRoutes;

const ProtectedRoutes = () => {
  const isAuthenticated = false;
  
  return isAuthenticated ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
