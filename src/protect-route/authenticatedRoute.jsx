import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import authService from "../service/auth.service";

const AuthenticatedRoute = () => {
    const { auth } = authService();
    const { user } = auth();
    const location = useLocation();

    const isAuthenticated = user !== null;

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default AuthenticatedRoute;