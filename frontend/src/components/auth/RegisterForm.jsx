// src/components/auth/RegisterForm.jsx
import React, { useState, useContext } from "react";
import { register } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../styles/RegisterForm.css"; // ✅ link to the CSS file

const RegisterForm = () => {
  const { login: loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "engineer",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      loginUser(res.user, res.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <h2 className="form-title">Register</h2>

      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        className="form-input"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="form-input"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="form-input"
      />
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        className="form-input"
      >
        <option value="engineer">Engineer</option>
        <option value="supervisor">Supervisor</option>
      </select>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="form-button">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
