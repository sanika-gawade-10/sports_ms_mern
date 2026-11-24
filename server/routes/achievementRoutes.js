
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import {
  getAchievements,
  addAchievement
} from "../controllers/achievementController.js";

const router = express.Router();

const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `achievement_${Date.now()}_${Math.random().toString(36).slice(2)}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = [".jpg", ".jpeg", ".png", ".webp"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowed.includes(ext) && file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG and WEBP images are allowed."));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    files: 3,
    fileSize: 5 * 1024 * 1024
  }
});

router.get("/", getAchievements);
router.post("/", upload.array("images", 3), addAchievement);

export default router;
