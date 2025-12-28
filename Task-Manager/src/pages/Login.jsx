import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Please enter username");
      return;
    }

    const storedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!storedUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    if (storedUser.name !== username) {
      alert("Invalid username. Please check or register.");
      return;
    }

    // ✅ Login success
    login(username);          // 🔥 CONTEXT LOGIN
    navigate("/dashboard");  // 🔥 REDIRECT
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
