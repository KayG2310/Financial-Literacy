import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const fakeUsers = [
  { username: "kamakshi", password: "1234" },
  { username: "john", password: "abcd" },
  { username: "alice", password: "pass" },
];

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Apply global styles to ensure full page background
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#0b0d17";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.backgroundColor = "#0b0d17";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = fakeUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setError("");
      setIsLoggedIn(true); // <-- set logged-in state
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Welcome! </h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#0b0d17",
    color: "#f1f1f1",
    fontFamily: "Inter, sans-serif",
    margin: 0,
    padding: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#1e40af",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "#ff4d4f",
    marginTop: "10px",
  },
};

export default Login;
