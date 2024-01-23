const express = require("express");
const { fetchCategory, saveCategory } = require("../controller/Category");

const categoryRouter = express.Router();

categoryRouter.get("/", fetchCategory);
categoryRouter.post("/", saveCategory);

module.exports.categoryRouter
