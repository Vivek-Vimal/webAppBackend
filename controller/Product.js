const { ProductModel } = require("../model");

exports.createProduct = async (req, res) => {
  const product = new ProductModel(req.body);
  try {
    const response = await product.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllProducts = async (req, res) => {
  try {
    const response = await ProductModel.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

