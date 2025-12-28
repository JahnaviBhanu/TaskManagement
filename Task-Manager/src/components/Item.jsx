import { useState } from "react";

function Item({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [dueDate, setDueDate] = useState(task.dueDate || "");

  const getDaysLeft = () => {
    if (!task.dueDate) return "No due date";

    const diff =
      new Date(task.dueDate).setHours(0,0,0,0) -
      new Date().setHours(0,0,0,0);

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days >= 0 ? `${days} days left` : "Overdue";
  };

  const handleSave = () => {
    editTask(task.id, title, dueDate);
    setIsEditing(false);
  };

  return (
    <li className="task-card">
      {isEditing ? (
        <div className="edit-box">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <div className="task-info">
            <h4>{task.title}</h4>
            <small>Due: {task.dueDate || "—"} | {getDaysLeft()}</small>
          </div>

          <div className="task-actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button
              className={task.status === "pending" ? "pending-btn" : "done-btn"}
              onClick={() => toggleTask(task.id)}
            >
              {task.status === "pending" ? "Pending" : "Completed"}
            </button>

            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Item; 