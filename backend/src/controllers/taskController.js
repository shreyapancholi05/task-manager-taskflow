const Task = require("../models/Task");


const createTask = async (req, res) => {
  try {

    const {
      title,
      description,
      status,
      priority,
      dueDate,
      assignedTo,
      project,
    } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate,
      assignedTo,
      project,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



const getTasks = async (req, res) => {
  try {

    let tasks;

    if (req.user.role === "admin") {

      tasks = await Task.find()
        .populate("assignedTo", "name email")
        .populate("project", "name");

    } else {

      tasks = await Task.find({
        assignedTo: req.user.id,
      })
        .populate("assignedTo", "name email")
        .populate("project", "name");

    }

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


const getTaskById = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id)
      .populate("assignedTo", "name email")
      .populate("project", "name");

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
};