// src/pages/TasksPage.jsx
import React from "react";
import TaskList from "../components/tasks/TaskList";

// Temporary static projectId = 1. Replace with dynamic routing later.
const TasksPage = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <TaskList projectId={1} />
    </div>
  );
};

export default TasksPage;
