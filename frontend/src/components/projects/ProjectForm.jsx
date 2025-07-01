// src/components/projects/ProjectForm.jsx
import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import "../../styles/ProjectForm.css";

const ProjectForm = () => {
  const { createProject } = useContext(ProjectContext);
  const [form, setForm] = useState({ name: "", description: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProject(form);
    setForm({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Project Name"
        className="project-input"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Project Description"
        className="project-textarea"
      />
      <button type="submit" className="project-button">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
