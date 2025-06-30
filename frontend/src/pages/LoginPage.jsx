// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../components/auth/LoginForm";
import "../styles/AuthPage.css";

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
