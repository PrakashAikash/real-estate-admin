/*import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');

  // Check both token and admin status
  const isAuthenticated = token && isAdmin === 'true';
/////////////////////////////////
  // Verify token expiration
/*  const isTokenExpired = () => {
  if (token === "dummyToken123") return false; // ignore dummy token
  try {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    return tokenData.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};*/

/*const isTokenExpired = () => {
  if (token === "dummyToken123" || token === "dummy-admin-token") return false;
  try {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    return tokenData.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};*/
/*
const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');

  // Sirf token aur admin check karo
  const isAuthenticated = token && isAdmin === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
/////////////////////////////
  if (!isAuthenticated || isTokenExpired()) {
    // Clean up storage on invalid auth
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    return <Navigate to="/login" replace />;
  }

  // Return Outlet for nested routes
  return <Outlet />;
};

export default ProtectedRoute;
*/

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');

  // Sirf token aur admin check karo
  const isAuthenticated = token && isAdmin === 'true';

  // Dummy token / admin ke liye expiration check skip karenge
  const isTokenExpired = () => {
    if (token === "dummyToken123" || token === "dummy-admin-token") return false;
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      return tokenData.exp * 1000 < Date.now();
    } catch {
      return false; // agar parse nahi hua toh expired mat maan
    }
  };

  if (!isAuthenticated || isTokenExpired()) {
    // Clean up storage on invalid auth
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    return <Navigate to="/login" replace />;
  }

  // Agar sab sahi hai to nested route render karo
  return <Outlet />;
};

export default ProtectedRoute;
