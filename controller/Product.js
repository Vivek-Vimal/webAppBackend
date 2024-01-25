const { productSaveModel, productDeleteModel } = require("../model");
const {} = require("../model");

exports.createProduct = async (req, res) => {
  const product = new productSaveModel(req.body);
  try {
    const response = await product.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllProducts = async (req, res) => {
  try {
    const response = await productSaveModel.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = new productDeleteModel(req.body);
    const resposne = await deleteProduct.deleteOne();
    res.status(200).json(resposne);
  } catch (err) {
    res.status(400).json(err);
  }
};
