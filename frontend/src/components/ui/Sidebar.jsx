// src/components/shared/Sidebar.jsx
import React from "react";
import "../../styles/Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
        {collapsed ? "→" : "←"}
      </button>
      {!collapsed && (
        <ul className="nav-links">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/tasks">Tasks</a>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
