// Authentication API functions will be added later.
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Student Login
export const studentLogin = async (loginData) => {
  return API.post("/student/login", loginData);
};

// Admin Login
export const adminLogin = async (loginData) => {
  return API.post("/admin/login", loginData);
};