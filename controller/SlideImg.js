const { slideImageSave, slideImageDelete } = require("../model");

module.exports.fetchSlideImg = async (req, res) => {
  try {
    const response = await slideImageSave.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.saveSlideImg = async (req, res) => {
  const saveSlide = new slideImageSave(req.body);
  try {
    const response = await saveSlide.save();
    res.status(201).json({ response, message: "Image added successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.deleteSlideImg = async (req, res) => {
  try {
    const deleteSlideI = new slideImageDelete(req.body);
    const response = await deleteSlideI.deleteOne();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};
