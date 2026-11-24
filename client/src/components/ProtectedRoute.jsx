import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ role }) {
  const token = localStorage.getItem(
    role === "admin" ? "adminToken" : "studentToken"
  );

  // No login token
  if (!token) {
    return (
      <Navigate
        to={
          role === "admin"
            ? "/admin/login"
            : "/student/login"
        }
        replace
      />
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;