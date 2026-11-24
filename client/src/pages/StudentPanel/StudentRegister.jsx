
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaGraduationCap, FaIdCard, FaUser, FaEnvelope,
  FaLock, FaEye, FaEyeSlash, FaUserPlus,
  FaCheckCircle, FaTimesCircle
} from "react-icons/fa";
import "../../styles/StudentPanel/StudentRegister.css";

function StudentRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    uid: "",
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const passwordRules = (password) => [
    [password.length >= 8, "At least 8 characters"],
    [/[A-Z]/.test(password), "One uppercase letter"],
    [/[a-z]/.test(password), "One lowercase letter"],
    [/[0-9]/.test(password), "One number"],
    [/[^A-Za-z0-9]/.test(password), "One special character"]
  ];

  const rules = passwordRules(form.password);

  const validate = (data) => {
    const newErrors = {};

    if (!data.uid.trim()) {
      newErrors.uid = "Student UID is required.";
    } else if (data.uid.trim().length > 7) {
      newErrors.uid = "UID cannot exceed 7 characters.";
    }

    const namePattern = /^\p{L}+(?:[ '-]\p{L}+){1,2}$/u;
    if (!data.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (!namePattern.test(data.name.trim())) {
      newErrors.name = "Enter your first and last name (middle name optional).";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(data.email.trim())) {
      newErrors.email = "Please enter a valid Gmail address.";
    }

    if (!passwordRules(data.password).every(([valid]) => valid)) {
      newErrors.password = "Please meet all password requirements.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };

    setForm(nextForm);
    setErrors(validate(nextForm));
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setMessage({
        type: "error",
        text: "Please correct the highlighted fields."
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/students/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: form.uid.trim(),
            name: form.name.trim(),
            email: form.email.trim().toLowerCase(),
            password: form.password
          })
        }
      );

      const responseText = await response.text();
      let data = {};

      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          `Invalid server response (${response.status}). Please check your backend.`
        );
      }

      if (!response.ok) {
        throw new Error(data.message || "Registration failed. Please try again.");
      }

      setMessage({
        type: "success",
        text: "Registration successful! Your account has been created."
      });

      setForm({ uid: "", name: "", email: "", password: "" });
      setErrors({});

      setTimeout(() => navigate("/student/login"), 2000);

    } catch (error) {
      console.error("Registration error:", error);

      setMessage({
        type: "error",
        text: error.message || "Unable to connect to server. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-left">
          <div className="register-logo">
            <FaGraduationCap />
          </div>

          <h1>Student Registration</h1>
          <p>
            Join our sports community and explore opportunities
            to participate, compete and achieve.
          </p>

          <div className="register-left-bottom">
            <span>Already registered?</span>
            <Link to="/student/login">Login here</Link>
          </div>
        </div>

        <div className="register-right">
          <div className="register-form-content">
            <div className="register-heading">
              <h2>Create Account</h2>
              <p>Enter your details to register as a student.</p>
            </div>

            {message.text && (
              <div className={`register-alert ${message.type}`}>
                {message.type === "success"
                  ? <FaCheckCircle />
                  : <FaTimesCircle />}
                <span>{message.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>

              <div className="register-form-group">
                <label>Student UID</label>
                <div className="register-input-wrapper">
                  <FaIdCard className="register-input-icon" />
                  <input
                    type="text"
                    name="uid"
                    placeholder="Enter your student UID"
                    value={form.uid}
                    onChange={handleChange}
                    maxLength={7}
                  />
                </div>
                {errors.uid && <small className="register-error">{errors.uid}</small>}
              </div>

              <div className="register-form-group">
                <label>Full Name</label>
                <div className="register-input-wrapper">
                  <FaUser className="register-input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <small className="register-error">{errors.name}</small>}
              </div>

              <div className="register-form-group">
                <label>Gmail Address</label>
                <div className="register-input-wrapper">
                  <FaEnvelope className="register-input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && <small className="register-error">{errors.email}</small>}
              </div>

              <div className="register-form-group">
                <label>Password</label>
                <div className="register-input-wrapper">
                  <FaLock className="register-input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a strong password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <small className="register-error">{errors.password}</small>
                )}

                <div className="password-requirements">
                  <p>Password must contain:</p>
                  <div className="password-rules">
                    {rules.map(([valid, label]) => (
                      <span className={valid ? "valid" : ""} key={label}>
                        {valid ? <FaCheckCircle /> : <FaTimesCircle />}
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="register-button"
                disabled={loading}
              >
                {loading ? "Registering..." : (
                  <>
                    <FaUserPlus /> Create Account
                  </>
                )}
              </button>

            </form>

            <div className="register-login">
              Already have an account? <Link to="/student/login">Login</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default StudentRegister;
