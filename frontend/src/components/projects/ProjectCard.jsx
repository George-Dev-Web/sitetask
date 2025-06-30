// src/components/projects/ProjectCard.jsx
import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";

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
    <div className="border p-4 space-y-2">
      {editing ? (
        <>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-1"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="font-bold text-lg">{project.name}</h3>
          <p>{project.description}</p>
        </>
      )}
      <div className="space-x-2">
        <button onClick={() => setEditing(!editing)} className="text-blue-500">
          {editing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() => deleteProject(project.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
