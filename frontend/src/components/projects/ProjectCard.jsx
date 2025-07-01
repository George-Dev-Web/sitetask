// src/components/projects/ProjectCard.jsx
import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { updateProject, deleteProject } = useContext(ProjectContext);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: project.name,
    description: project.description,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    await updateProject(project.id, form);
    setEditing(false);
  };

  return (
    <div className="project-card">
      {editing ? (
        <>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="project-input"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="project-textarea"
          />
          <button onClick={handleUpdate} className="project-save-btn">
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </>
      )}
      <div className="project-actions">
        <button
          onClick={() => setEditing(!editing)}
          className="project-edit-btn"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() => deleteProject(project.id)}
          className="project-delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
