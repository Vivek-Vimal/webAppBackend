const { slideModel } = require("../model/SlideImage");

module.exports.fetchSlideImg = async (req, res) => {
  try {
    const response = await slideModel.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.saveSlideImg = async (req, res) => {
  const saveSlide = new slideModel(req.body);
  try {
    const response = await saveSlide.save();
    res.status(201).json({ response, message: "Image added successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};
