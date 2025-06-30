// src/components/tasks/TaskCard.jsx
import React, { useState } from "react";
import API from "../../services/api";

const TaskCard = ({ task, onUpdate, onDelete }) => {
  const [form, setForm] = useState({ title: task.title, status: task.status });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    try {
      const res = await API.put(`/tasks/${task.id}`, form);
      onUpdate(res.data);
      setEditing(false);
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/tasks/${task.id}`);
      onDelete(task.id);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="border p-4 space-y-2">
      {editing ? (
        <>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </select>
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-1"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h4 className="font-semibold">{task.title}</h4>
          <p className="text-sm">Status: {task.status}</p>
        </>
      )}
      <div className="space-x-2">
        <button onClick={() => setEditing(!editing)} className="text-blue-500">
          {editing ? "Cancel" : "Edit"}
        </button>
        <button onClick={handleDelete} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
