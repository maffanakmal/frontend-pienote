// src/components/PublicRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PublicRoute = ({ children }) => {
  const authToken = Cookies.get('authToken'); // Get the token from cookies

  if (authToken) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default PublicRoute;
