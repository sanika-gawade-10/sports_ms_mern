
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import noticeRoutes from "./routes/noticeRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import participationRoutes from "./routes/participationRoutes.js";
import achievementRoutes from "./routes/achievementRoutes.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

connectDB();

const app = express();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Student Routes
app.use("/api/students", studentRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// Notice Routes
app.use("/api/notices", noticeRoutes);

// Participation Routes
app.use("/api/participation", participationRoutes);

// Achievement Routes
app.use("/api/achievements", achievementRoutes);

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Sathaye College Sports Management Backend Running...");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
