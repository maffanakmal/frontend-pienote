import React from "react";
import { Route, Navigate } from "react-router-dom";
import authService from "../service/auth.service";

const PublicRoute = ({ children, redirectTo = "/" }) => {
    const { auth } = authService();
    const { token } = auth();
    return token ? <Navigate to={redirectTo} replace /> : children;
};

export default PublicRoute;