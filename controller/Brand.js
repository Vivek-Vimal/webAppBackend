const { brandSaveModel, brandDeleteModel } = require("../model");

exports.fetchAllBrand = async (req, res) => {
  try {
    const respose = await brandSaveModel.find();
    res.status(200).json(respose);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createBrand = async (req, res) => {
  const currentBrand = new brandSaveModel(req.body);
  try {
    const response = await currentBrand.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.deleteBrand = async (req, res) => {
  try {
    const deleteBrandImage = new brandDeleteModel(req.body);
    const response = await deleteBrandImage.deleteOne();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
