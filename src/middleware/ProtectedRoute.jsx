import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const authToken = Cookies.get('accessToken')

  useEffect(() => {
    if (!authToken) {
      Cookies.remove('authToken');
    }
  }, [authToken]);

  if (!authToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
