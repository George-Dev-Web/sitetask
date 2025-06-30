// src/pages/RegisterPage.jsx
import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import "../styles/AuthPage.css";

const RegisterPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
