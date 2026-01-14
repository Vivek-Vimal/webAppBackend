const { Workflow } = require("../model");

module.exports.getWorkflow = async (_, res) => {
  try {
    const response = await Workflow.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.saveWorkflow = async (req, res) => {
  try {
    const response = await Workflow.insertMany(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.patchWorkflow = async (req, res) => {
  try {
    const { _id } = req.body;

    const updatedWorkflow = await Workflow.findByIdAndUpdate(
      _id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedWorkflow) {
      return res.status(404).json({ message: "Workflow not found" });
    }

    res.status(200).json(updatedWorkflow);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.deleteWorkflow = async (req, res) => {
  try {
    const { _id } = req.body;

    const deleted = await Metadata.findByIdAndDelete(_id);

    if (!deleted) {
      return res.status(404).json({ message: "Metadata not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};