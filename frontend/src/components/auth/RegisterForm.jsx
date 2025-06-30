// src/components/auth/RegisterForm.jsx
import React, { useState, useContext } from "react";
import { register } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Register</h2>
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        className="border px-2 py-1 w-full"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="border px-2 py-1 w-full"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="border px-2 py-1 w-full"
      />
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        className="border px-2 py-1 w-full"
      >
        <option value="engineer">Engineer</option>
        <option value="supervisor">Supervisor</option>
      </select>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-green-600 text-white px-4 py-1">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
