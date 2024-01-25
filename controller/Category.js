const { categorySaveModel, categoryDeleteModel } = require("../model");

module.exports.fetchCategory = async (req, res) => {
  try {
    const response = await categorySaveModel.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.saveCategory = async (req, res) => {
  const categorySave = new categorySaveModel(req.body);
  try {
    const response = await categorySave.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.deleteCategory = async (req, res) => {
  const categoryDelete = new categoryDeleteModel(req.body);
  try {
    const response = await categoryDelete.deleteOne();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
