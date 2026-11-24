import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Admin from "../models/Admin.js";

// ======================================================
// ADMIN LOGIN
// ======================================================
const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    // Find admin
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    // Compare password with hashed password
    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    // Update last activity
    admin.lastActivity = new Date();
    await admin.save();

    // Create JWT
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30m",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        role: "admin",
      },
    });

  } catch (error) {
    console.error("Admin login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error during admin login.",
    });
  }
};


// ======================================================
// VERIFY ADMIN
// ======================================================
const verifyAdmin = async (req, res) => {
  try {
    // adminAuth middleware has already:
    // 1. Verified the JWT
    // 2. Checked that role === "admin"
    // 3. Attached decoded token to req.admin

    return res.status(200).json({
      success: true,
      message: "Admin authentication verified.",
      admin: req.admin,
    });

  } catch (error) {
    console.error("Admin verification error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error during admin verification.",
    });
  }
};


// ======================================================
// EXPORT
// ======================================================
export {
  adminLogin,
  verifyAdmin,
};