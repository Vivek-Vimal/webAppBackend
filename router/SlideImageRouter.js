const express = require("express");
const {
  fetchSlideImg,
  saveSlideImg,
  deleteSlideImg,
} = require("../controller/SlideImg");

const slideRouter = express.Router();

slideRouter.get("/", fetchSlideImg);

slideRouter.post("/", saveSlideImg);

slideRouter.delete("/", deleteSlideImg);

module.exports = slideRouter;
