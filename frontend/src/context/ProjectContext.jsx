// src/context/ProjectContext.jsx
import React, { useState, useEffect, useContext, createContext } from "react";
import API from "../services/api";
import { AuthContext } from "./AuthContext";

export const ProjectContext = createContext(); // ✅ THIS LINE IS MISSING IN YOUR VERSION

export const ProjectProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects", err);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (data) => {
    const res = await API.post("/projects", data);
    setProjects((prev) => [...prev, res.data]);
  };

  const updateProject = async (id, data) => {
    const res = await API.put(`/projects/${id}`, data);
    setProjects((prev) =>
      prev.map((proj) => (proj.id === id ? res.data : proj))
    );
  };

  const deleteProject = async (id) => {
    await API.delete(`/projects/${id}`);
    setProjects((prev) => prev.filter((proj) => proj.id !== id));
  };

  useEffect(() => {
    if (token) fetchProjects();
  }, [token]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        fetchProjects,
        createProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
