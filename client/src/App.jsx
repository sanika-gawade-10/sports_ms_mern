import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import AZSports from "./components/A-Z_Sports/AZSports";
import SportsGuidelines from "./components/A-Z_Sports/SportsGuidelines";
import SafetyMeasures from "./components/A-Z_Sports/SafetyMeasures";
import FAQs from "./components/A-Z_Sports/FAQs";

import StudentLogin from "./pages/StudentPanel/StudentLogin";
import StudentRegister from "./pages/StudentPanel/StudentRegister";
import StudentDashboard from "./pages/StudentPanel/StudentDashboard";
import StudentParticipation from "./pages/StudentPanel/StudentParticipation";
import StudentAchievements from "./pages/StudentPanel/StudentAchievements";

import AdminLogin from "./pages/AdminPanel/AdminLogin";
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import AdminParticipation from "./pages/AdminPanel/AdminParticipation";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/sports" element={<AZSports />} />
      <Route path="/sports/guidelines" element={<SportsGuidelines />} />
      <Route path="/sports/safety" element={<SafetyMeasures />} />
      <Route path="/sports/faqs" element={<FAQs />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/register" element={<StudentRegister />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/participation" element={<StudentParticipation />} />
      <Route path="/student/achievements" element={<StudentAchievements />} />



      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/participation" element={<AdminParticipation />} />

    </Routes>
  );
}

export default App;