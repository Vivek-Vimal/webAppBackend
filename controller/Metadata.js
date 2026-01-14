const { Metadata } = require("../model");

exports.getMetadata = async (_, res) => {
  try {
    const response = await Metadata.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.saveMetadata = async (req, res) => {
  try {
    const current = new Metadata(req.body);
    const response = await current.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.patchMetadata = async (req, res) => {
  try {
    
    const { _id } = req.body;

    const updatedMetadata = await Metadata.findByIdAndUpdate(
      _id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedMetadata) {
      return res.status(404).json({ message: "Metadata not found" });
    }

    res.status(200).json(updatedMetadata);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteMetadata = async (req, res) => {
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