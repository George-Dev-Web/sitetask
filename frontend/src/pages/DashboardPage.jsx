// src/pages/DashboardPage.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/DashboardPage.css";

const DashboardPage = () => {
  const { token } = useContext(AuthContext);
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    completed_tasks: 0,
    recent_projects: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/dashboard/stats`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="dashboard-cards">
        <div className="card summary-card">
          <h3>Total Projects</h3>
          <p>{stats.projects}</p>
        </div>

        <div className="card summary-card">
          <h3>Total Tasks</h3>
          <p>{stats.tasks}</p>
        </div>

        <div className="card summary-card">
          <h3>Completed Tasks</h3>
          <p>{stats.completed_tasks}</p>
        </div>
      </div>

      <div className="recent-section">
        <h3>Recent Projects</h3>
        <div className="recent-projects">
          {stats.recent_projects.map((proj) => (
            <div key={proj.id} className="card project-snippet">
              <h4>{proj.name}</h4>
              <p>{proj.description || "No description provided."}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
