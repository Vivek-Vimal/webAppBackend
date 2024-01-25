const express = require("express");
const {
  fetchAllBrand,
  createBrand,
  deleteBrand,
} = require("../controller/Brand");

const brandRouter = express.Router();

brandRouter.get("/", fetchAllBrand);

brandRouter.post("/", createBrand);

brandRouter.delete("/", deleteBrand);

module.exports = brandRouter;
