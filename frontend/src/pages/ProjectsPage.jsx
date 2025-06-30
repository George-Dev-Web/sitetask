// src/pages/ProjectsPage.jsx
import React from "react";
import ProjectForm from "../components/projects/ProjectForm";
import ProjectList from "../components/projects/ProjectList";

const ProjectsPage = () => {
  return (
    <div>
      <h2>Your Projects</h2>
      <ProjectForm />
      <hr />
      <ProjectList />
    </div>
  );
};

export default ProjectsPage;
