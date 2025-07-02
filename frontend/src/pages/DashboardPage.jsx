// src/pages/DashboardPage.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/DashboardPage.css";

const DashboardPage = () => {
  const { token, user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    completed_tasks: 0,
    recent_projects: [],
  });
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatsAndTasks = async () => {
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

        // Fetch tasks for each recent project
        const taskPromises = res.data.recent_projects.map((project) =>
          axios
            .get(
              `${import.meta.env.VITE_API_URL}/projects/${project.id}/tasks`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((taskRes) =>
              taskRes.data.map((t) => ({ ...t, projectName: project.name }))
            )
        );

        const taskArrays = await Promise.all(taskPromises);
        const flatTaskList = taskArrays.flat();
        setAllTasks(flatTaskList);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatsAndTasks();
  }, [token]);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      {/* 👋 Personalized greeting */}
      <h2 className="welcome-text">
        {user ? `Welcome, ${user.username}!` : "Welcome!"}
      </h2>

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

      {/* 📁 Recent Projects */}
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

      {/* ✅ My Tasks */}
      <div className="tasks-section">
        <h3>My Tasks</h3>
        {allTasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <ul className="task-list">
            {allTasks.map((task) => (
              <li
                key={task.id}
                className={`task-card ${task.status.toLowerCase()}`}
              >
                <strong>{task.title}</strong> - {task.status}
                <br />
                <small>Project: {task.projectName}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
