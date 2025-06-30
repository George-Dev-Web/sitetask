// src/context/AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = (userData, accessToken) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", accessToken);
    setUser(userData);
    setToken(accessToken);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;