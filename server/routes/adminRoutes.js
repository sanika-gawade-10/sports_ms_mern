import express from "express";

import {
  adminLogin,
  verifyAdmin,
} from "../controllers/adminController.js";

import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// ======================================================
// ADMIN LOGIN
// ======================================================
router.post("/login", adminLogin);

// ======================================================
// ADMIN VERIFICATION
// ONLY AUTHENTICATED ADMINS CAN ACCESS THIS
// ======================================================
router.get("/verify", adminAuth, verifyAdmin);

export default router;