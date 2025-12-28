import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const addTask = () => {
    if (!title || !dueDate) return;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push({
      id: Date.now(),
      title,
      dueDate,
      status: "pending",
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/dashboard");
  };

  return (
    <div className="add-task-page">
      <h2>Add New Task</h2>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default AddTask;