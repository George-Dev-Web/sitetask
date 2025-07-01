// src/pages/TasksPage.jsx
import React from "react";
import TaskList from "../components/tasks/TaskList";
import "../styles/TaskPage.css"; // Add this line

const TasksPage = () => {
  return (
    <div className="task-page">
      <h2 className="task-page-title">Tasks</h2>
      <TaskList projectId={1} />
    </div>
  );
};

export default TasksPage;
