const express = require("express");
const {
  fetchCategory,
  saveCategory,
  deleteCategory,
} = require("../controller/Category");

const categoryRouter = express.Router();

categoryRouter.get("/", fetchCategory);
categoryRouter.post("/", saveCategory);
categoryRouter.delete("/", deleteCategory);

module.exports = categoryRouter;
