const express = require("express");
const { fetchSlideImg } = require("../controller/SlideImg");

const slideRouter = express.router();

slideRouter.get("/", fetchSlideImg);

module.exports.slideRouter;
