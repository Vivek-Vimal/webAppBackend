const express = require("express");
const { fetchSlideImg, saveSlideImg } = require("../controller/SlideImg");

const slideRouter = express.Router();

slideRouter.get("/", fetchSlideImg);

slideRouter.post("/", saveSlideImg);

module.exports = slideRouter;
