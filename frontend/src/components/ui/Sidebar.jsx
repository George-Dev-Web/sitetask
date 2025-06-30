// src/components/shared/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
