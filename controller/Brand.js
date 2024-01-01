const { brand } = require("../model");

exports.fetchAllBrand = async (req, res) => {
  try {
    const respose = await brand.find();
    res.status(200).json(respose);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createBrand = async (req, res) => {
  const currentBrand = new brand(req.body);
  try {
    const response = await currentBrand.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
