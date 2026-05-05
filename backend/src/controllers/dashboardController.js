const Project = require("../models/Project");
const Task = require("../models/Task");
const User = require("../models/User");

const getDashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    // 🔥 PROJECTS
    const totalProjects = await Project.countDocuments({
      members: userId,
    });

    // 🔥 TASKS
    const totalTasks = await Task.countDocuments({
      assignedTo: userId,
    });

    const completedTasks = await Task.countDocuments({
      assignedTo: userId,
      status: "Completed",
    });

    const pendingTasks = await Task.countDocuments({
      assignedTo: userId,
      status: "Pending",
    });

    const overdueTasks = await Task.countDocuments({
      assignedTo: userId,
      status: "Overdue",
    });

    // 🔥 TEAM MEMBERS (same projects)
    const projects = await Project.find({
      members: userId,
    });

    const memberIds = new Set();

    projects.forEach((p) => {
      p.members.forEach((m) => memberIds.add(m.toString()));
    });

    const teamMembers = memberIds.size;

    // 🔥 RECENT ACTIVITY (simple example)
    const recentProjects = await Project.find({
      members: userId,
    })
      .sort({ createdAt: -1 })
      .limit(3);

    const recentActivity = recentProjects.map((p) => ({
      title: "New project",
      desc: p.name,
      time: p.createdAt,
    }));

    res.json({
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks,
      overdueTasks,
      teamMembers,
      recentActivity,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getDashboard };