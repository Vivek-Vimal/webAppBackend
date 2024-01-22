const express = require("express");
const { fetchSlideImg, saveSlideImg } = require("../controller/SlideImg");

const slideRouter = express.router();

slideRouter.get("/", fetchSlideImg);

slideRouter.post("/", saveSlideImg);

module.exports.slideRouter;
