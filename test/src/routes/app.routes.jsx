import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/Login";

const AuthRoutes = [<Route key="login" path="/login" component={Login} />];

export default AuthRoutes;
