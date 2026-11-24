import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/AdminPanel/AdminLogin.css";
import background from "../../assets/login_img/loginbg.png";

function AdminLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid username or password.");
        return;
      }

      // Store authentication information
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUsername", data.admin.username);

      // Redirect to Admin Dashboard
      navigate("/admin/dashboard", { replace: true });

    } catch (error) {
      console.error("Admin login error:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="admin-login-page"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="overlay"></div>

      <div className="login-container">

        <h2>🎓 Login as Admin</h2>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div className="input-group">

            <span className="emoji-icon">
              👤
            </span>

            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={loginData.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />

          </div>

          {/* Password */}
          <div className="input-group">

            <span className="emoji-icon">
              🔒
            </span>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />

          </div>

          {/* Error */}
          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button
            className="login-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default AdminLogin;