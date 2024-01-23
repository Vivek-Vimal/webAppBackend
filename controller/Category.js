const { categoryModel } = require("../model");

module.exports.fetchCategory = async (req, res) => {
  try {
    const response = await categoryModel.find();
    res.status(200).json({ response, message: "Category fetched successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.saveCategory = async (req, res) => {
  const { category } = req.body;
  const categorySave = new category({category})
  try {
    const response = await categorySave.save();
    res.status(201).json({response,message:"Category saved successfully"})
  } catch (err) {
    res.status(400).json(err);
  }
};
