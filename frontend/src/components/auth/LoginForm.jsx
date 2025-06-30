// src/components/auth/LoginForm.jsx
import React, { useState, useContext } from "react";
import { login } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthPage.css"; // 👈 import the styles

const LoginForm = () => {
  const { login: loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      loginUser(res.user, res.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-title">Login</h2>
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        className="login-input"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="login-input"
      />
      {error && <p className="login-error">{error}</p>}
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
