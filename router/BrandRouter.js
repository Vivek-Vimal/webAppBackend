const express = require("express");
const { fetchAllBrand, createBrand } = require("../controller/Brand");

const brandRouter = express.Router();

brandRouter.get("/", fetchAllBrand);

brandRouter.post("/", createBrand);

module.exports = brandRouter;
