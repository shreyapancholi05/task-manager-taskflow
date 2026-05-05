const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");


const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();


app.use(express.json());


app.use(
  cors({
    origin: "https://task-manager-taskflow-1.onrender.com",
    credentials: true,
  })
);


app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);


app.get("/", (req, res) => {
  res.send("API Running 🚀");
});


const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    console.log(" MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Database connection failed:", err);
    process.exit(1);
  });