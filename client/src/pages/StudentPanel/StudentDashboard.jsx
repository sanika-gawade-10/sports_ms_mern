import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Activity,
  Trophy,
  CalendarDays,
  LogOut,
  UserRound,
  Menu,
  X
} from "lucide-react";

import StudentParticipation from "./StudentParticipation";
import StudentAchievements from "./StudentAchievements";
import "../../styles/StudentPanel/StudentDashboard.css";

function StudentDashboard() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student") || "null");

  if (!student) {
    return <Navigate to="/student/login" replace />;
  }

  const links = [
    { name: "Participation", icon: Activity },
    { name: "Achievements", icon: Trophy },
    { name: "Event Registration", icon: CalendarDays }
  ];

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/student/login");
  };

  const renderPage = () => {
    switch (page) {
      case "Participation":
        return <StudentParticipation />;

      case "Achievements":
        return (
          <section className="dashboard-placeholder">
            <h2>Achievements</h2>
            <p>Manage and view your sports achievements here.</p>
          </section>
        );

      case "Event Registration":
        return (
          <section className="dashboard-placeholder">
            <h2>Event Registration</h2>
            <p>View available sports events and register here.</p>
          </section>
        );

      default:
        return (
          <>
            <h2 className="home-title">Welcome, {student.name}!</h2>
            <p className="home-subtitle">
              Welcome to the Student Sports Portal.
            </p>

            <div className="info-container">
              {links.map(({ name, icon: Icon }, index) => (
                <button
                  className={`info-card card-${index}`}
                  key={name}
                  onClick={() => setPage(name)}
                >
                  <Icon size={30} />
                  <h3>{name}</h3>
                  <p>
                    {[
                      "Submit and maintain your sports participation details.",
                      "Add and manage your sports achievements.",
                      "View available sports events and register."
                    ][index]}
                  </p>
                  <span>View Details →</span>
                </button>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="student-dashboard">
      <header className="mobile-header">
        <span>
          <UserRound size={19} />
          {student.name}
        </span>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <aside className={`sidebar ${menuOpen ? "mobile-open" : ""}`}>
        <div className="profile">
          <div className="profile-icon">
            <UserRound size={38} />
          </div>
          <p>{student.name}</p>
          <span>Student Panel</span>
        </div>

        <nav className="menu">
          <button
            type="button"
            className={page === "home" ? "active" : ""}
            onClick={() => {
              setPage("home");
              setMenuOpen(false);
            }}
          >
            <Activity size={19} />
            Dashboard
          </button>

          {links.map(({ name, icon: Icon }) => (
            <button
              type="button"
              key={name}
              className={page === name ? "active" : ""}
              onClick={() => {
                setPage(name);
                setMenuOpen(false);
              }}
            >
              <Icon size={19} />
              {name}
            </button>
          ))}

          <button type="button" className="logout-button" onClick={handleLogout}>
            <LogOut size={19} />
            Logout
          </button>
        </nav>
      </aside>

      <main className="main">
        {renderPage()}
      </main>
    </div>
  );
}

export default StudentDashboard;