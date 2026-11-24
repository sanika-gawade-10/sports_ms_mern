
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/StudentPanel/StudentLogin.css";
import background from "../../assets/login_img/loginbg.png";

function StudentLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    uid: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
        "http://localhost:5000/api/students/login",
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
        setError(data.message || "Invalid UID or password.");
        return;
      }

      const studentId = data.student?._id || data.student?.id;

      if (!studentId) {
        setError("Student ID not found. Please try again.");
        return;
      }

      localStorage.setItem(
        "student",
        JSON.stringify({ ...data.student, _id: studentId })
      );

      navigate("/student/dashboard", { replace: true });
    } catch (error) {
      console.error("Student login error:", error);
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="student-login-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay"></div>

      <div className="login-container">
        <h2>Login as Student</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="emoji-icon">👤</span>
            <input
              type="text"
              name="uid"
              placeholder="Enter UID"
              value={loginData.uid}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>

          <div className="input-group">
            <span className="emoji-icon">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-links">
          <p>
            Not registered? <Link to="/student/register">Register</Link>
          </p>
          <Link to="/student/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
