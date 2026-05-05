const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const app = express();


connectDB();


app.use(cors([
  "http://localhost:5173",
    "https://task-manager-taskflow.vercel.app"
]));
app.use(express.json());
const dashboardRoutes = require("./routes/dashboardRoutes");

// Routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes)
app.use("/api/tasks", taskRoutes)
app.get("/", (req, res) => {  
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});