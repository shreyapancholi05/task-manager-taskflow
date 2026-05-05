const Project = require("../models/Project");




const createProject = async (req, res) => {
  try {
    const {
      name,
      description,
      status,
      deadline,
      members,
    } = req.body;

    const project = await Project.create({
      name,
      description,
      status,
      deadline,
      members,
      admin: req.user.id,
    });
    console.log("user", req.user);
    
    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




const getProjects = async (req, res) => {
  try {

    let projects;

    if (req.user.role === "admin") {

      projects = await Project.find()
        .populate("members", "name email");

    } else {

      projects = await Project.find({
        members: req.user.id,
      }).populate("members", "name email");

    }

    res.status(200).json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};




const getProjectById = async (req, res) => {
  try {

    const project = await Project.findById(
      req.params.id
    ).populate("members", "name email");

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
};