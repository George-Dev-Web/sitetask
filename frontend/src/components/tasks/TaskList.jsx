// src/components/tasks/TaskList.jsx
import React, { useEffect, useState } from "react";
import API from "../../services/api";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = React.useCallback(async () => {
    try {
      const res = await API.get(`/projects/${projectId}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  const handleAdd = (task) => setTasks((prev) => [...prev, task]);
  const handleUpdate = (updated) =>
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="space-y-4 mt-4">
      <TaskForm projectId={projectId} onTaskCreated={handleAdd} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
