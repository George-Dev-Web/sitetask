// src/components/ui/AppLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../styles/AppLayout.css";

const AppLayout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
