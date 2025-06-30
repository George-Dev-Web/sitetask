// src/components/shared/AppLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../styles/AppLayout.css";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Outlet /> {/* This is where page content shows */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
