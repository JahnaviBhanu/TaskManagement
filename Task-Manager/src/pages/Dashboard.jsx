import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import List from "../components/List";
import Filter from "../components/Filter";

function Dashboard() {
  const { user, logout } = useUser(); // ✅ CORRECT
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      t.id === id
        ? { ...t, status: t.status === "pending" ? "done" : "pending" }
        : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const editTask = (id, newTitle, newDueDate) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, title: newTitle, dueDate: newDueDate } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const visibleTasks = tasks.filter((t) => {
    if (filter === "pending") return t.status === "pending";
    if (filter === "done") return t.status === "done";
    return true;
  });

  const handleLogout = () => {
    logout();              // ✅ correct logout
    navigate("/login");
  };

  return (
    <>
      <h2 className="welcome">Welcome, {user} 👋</h2>

      <div className="task-container">
        <List
          tasks={visibleTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        <div className="logout-wrapper">
      <button className="logout-btn" onClick={handleLogout}>
      Logout
     </button>
     </div>
      </div>

      <div className="footer-actions">
  <Filter setFilter={setFilter} />

  
</div>

<button className="fab" onClick={() => navigate("/add-task")}>
  +
</button>

    </>
  );
}

export default Dashboard;
