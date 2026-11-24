import express from "express";

import {
  getNotices,
  createNotice,
  deleteNotice,
} from "../controllers/noticeController.js";

import uploadNotice from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Get all notices
router.get("/", getNotices);

// Create a notice with file upload
router.post("/", uploadNotice.single("file"), createNotice);

// Delete a notice
router.delete("/:id", deleteNotice);

export default router;