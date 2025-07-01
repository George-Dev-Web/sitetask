// src/components/tasks/TaskForm.jsx
import React, { useState } from "react";
import API from "../../services/api";
import "../../styles/TaskForm.css";

const TaskForm = ({ projectId, onTaskCreated }) => {
  const [form, setForm] = useState({ title: "", status: "Not Started" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post(`/projects/${projectId}/tasks`, form);
      onTaskCreated(res.data);
      setForm({ title: "", status: "Not Started" });
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="task-input"
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="task-select"
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
      <button className="task-submit-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
