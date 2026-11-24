
import Student from "../models/Student.js";

export const registerStudent = async (req, res) => {
  try {
    const { uid, name, email, password } = req.body;

    if (!uid || !name || !email || !password)
      return res.status(400).json({ success: false, message: "All fields are required." });

    const cleanUID = uid.trim();
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (cleanUID.length > 7)
      return res.status(400).json({ success: false, message: "UID cannot exceed 7 characters." });

    if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(cleanEmail))
      return res.status(400).json({ success: false, message: "Please enter a valid Gmail address." });

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password))
      return res.status(400).json({ success: false, message: "Password must contain 8 characters, uppercase, lowercase, number and special character." });

    const existing = await Student.findOne({ $or: [{ uid: cleanUID }, { email: cleanEmail }] });

    if (existing)
      return res.status(409).json({ success: false, message: existing.uid === cleanUID ? "This UID is already registered." : "This email is already registered." });

    const student = await Student.create({ uid: cleanUID, name: cleanName, email: cleanEmail, password });

    return res.status(201).json({
      success: true,
      message: "Student registered successfully!",
      student: { id: student._id, uid: student.uid, name: student.name, email: student.email }
    });
  } catch (error) {
    console.error("Registration error:", error);
    if (error.code === 11000)
      return res.status(409).json({ success: false, message: "UID or email already registered." });
    return res.status(500).json({ success: false, message: "Registration failed. Please try again." });
  }
};

export const loginStudent = async (req, res) => {
  try {
    const { uid, password } = req.body;

    if (!uid || !password)
      return res.status(400).json({ success: false, message: "UID and password are required." });

    const student = await Student.findOne({ uid: uid.trim() }).select("+password");

    if (!student || !(await student.comparePassword(password)))
      return res.status(401).json({ success: false, message: "Invalid UID or password." });

    return res.status(200).json({
      success: true,
      message: "Login successful!",
      student: { id: student._id, uid: student.uid, name: student.name }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Login failed. Please try again." });
  }
};
