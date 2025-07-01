// src/pages/AuthPage.jsx
import React, { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <h1>Welcome to SiteTask Tracker</h1>
      <div className="auth-switch">
        <button onClick={() => setIsLogin(true)} disabled={isLogin}>
          Login
        </button>
        <button onClick={() => setIsLogin(false)} disabled={!isLogin}>
          Register
        </button>
      </div>

      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthPage;
