import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    // No Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // IMPORTANT:
    // Only admins are allowed
    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required.",
      });
    }

    // Attach authenticated admin to request
    req.admin = decoded;

    next();

  } catch (error) {
    console.error("Admin authentication error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token.",
    });
  }
};

export default adminAuth;