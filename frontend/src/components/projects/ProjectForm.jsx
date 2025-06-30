// src/components/projects/ProjectForm.jsx
import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";

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
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Project Name"
        className="border px-2 py-1 w-full"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Project Description"
        className="border px-2 py-1 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-1">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
