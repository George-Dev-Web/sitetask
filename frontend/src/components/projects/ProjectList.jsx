// src/components/projects/ProjectList.jsx
import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import ProjectCard from "./ProjectCard";
import Spinner from "../ui/Spinner";
import "../../styles/ProjectList.css"; // Import your CSS styles

const ProjectList = () => {
  const { projects, loading } = useContext(ProjectContext);

  if (loading) return <Spinner />;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
