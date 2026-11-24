
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminParticipation from "./AdminParticipation";
import NoticeManagement from "./NoticeManagement";

import "../../styles/AdminPanel/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(null);
  const [activePage, setActivePage] = useState("home");

  // VERIFY ADMIN AUTHENTICATION
  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login", { replace: true });
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/admin/verify",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUsername");
          navigate("/admin/login", { replace: true });
          return;
        }

        setAdmin(data.admin);
        setLoading(false);
      } catch (error) {
        console.error("Admin verification failed:", error);

        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUsername");

        navigate("/admin/login", { replace: true });
      }
    };

    verifyAdmin();
  }, [navigate]);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    navigate("/admin/login", { replace: true });
  };

  // CHANGE DASHBOARD SECTION
  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  // LOADING
  if (loading) {
    return (
      <div className="admin-loading">
        <h2>Checking authentication...</h2>
      </div>
    );
  }

  // DASHBOARD CONTENT
  const renderContent = () => {
    if (activePage === "home") {
      return (
        <div className="dashboard-home">
          <h2>Welcome Admin</h2>
          <p>
            Welcome to the Sathaye College Sports Management System.
          </p>
          <p>
            Logged in as: <strong>{admin?.username || "Admin"}</strong>
          </p>
        </div>
      );
    }

    if (activePage === "participation") {
      return <AdminParticipation />;
    }

    if (activePage === "achievements") {
      return <Achievements />;
    }

    if (activePage === "notices") {
      return <NoticeManagement />;
    }

    if (activePage === "event") {
      return (
        <div className="dashboard-section">
          <h2>Events</h2>
          <p>Add and manage sports events.</p>
          <div className="coming-soon">
            Event management will be added here.
          </div>
        </div>
      );
    }

    if (activePage === "all_event") {
      return (
        <div className="dashboard-section">
          <h2>All Events</h2>
          <p>View and manage all sports events.</p>
          <div className="coming-soon">
            All events will be displayed here.
          </div>
        </div>
      );
    }

    if (activePage === "admin-event-registrations") {
      return (
        <div className="dashboard-section">
          <h2>Event Registrations</h2>
          <p>View students registered for sports events.</p>
          <div className="coming-soon">
            Event registrations will be displayed here.
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <div className="admin-profile-icon">
            <FaUserCircle />
          </div>
          <p>Admin</p>
        </div>

        <nav className="admin-menu">
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </button>

          <button
            className={activePage === "participation" ? "active" : ""}
            onClick={() => handleMenuClick("participation")}
          >
            Participation
          </button>

          <button
            className={activePage === "achievements" ? "active" : ""}
            onClick={() => handleMenuClick("achievements")}
          >
            Achievements
          </button>

          <button
            className={activePage === "notices" ? "active" : ""}
            onClick={() => handleMenuClick("notices")}
          >
            Notices
          </button>

          <button
            className={activePage === "event" ? "active" : ""}
            onClick={() => handleMenuClick("event")}
          >
            Events
          </button>

          <button
            className={activePage === "all_event" ? "active" : ""}
            onClick={() => handleMenuClick("all_event")}
          >
            All Events
          </button>

          <button
            className={
              activePage === "admin-event-registrations" ? "active" : ""
            }
            onClick={() => handleMenuClick("admin-event-registrations")}
          >
            Event Registrations
          </button>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </aside>

      <main className="admin-main">
        {renderContent()}
      </main>
    </div>
  );
}

export default AdminDashboard;
