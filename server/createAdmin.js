import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect using the same MongoDB connection used by server.js
    await connectDB();

    // Admin credentials
    const username = "admin";

    // Your password is already here.
    // KEEP YOUR EXISTING PASSWORD.
    const password = "admin@104";

    // Check whether admin already exists
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    const admin = await Admin.create({
      username,
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully");
    console.log("Username:", admin.username);
    console.log("Password was stored as a secure hash.");

    process.exit(0);

  } catch (error) {
    console.error("❌ Failed to create admin");
    console.error(error.message);
    process.exit(1);
  }
};

createAdmin();