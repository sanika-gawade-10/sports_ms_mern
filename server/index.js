const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const noticeRoutes = require("./routes/noticeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notices", noticeRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/sports_ms")
.then(() => console.log("MongoDB connected 🚀"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Sports MS API running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});