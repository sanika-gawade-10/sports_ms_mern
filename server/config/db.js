import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
  try {
    // Use reliable public DNS servers for MongoDB Atlas SRV records
    dns.setServers(["8.8.8.8", "1.1.1.1"]);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Atlas Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;