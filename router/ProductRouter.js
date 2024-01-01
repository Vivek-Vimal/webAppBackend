const express = require("express");
const { createProduct, fetchAllProducts } = require("../controller/Product");

const productRouter = express.Router();

productRouter.get("/", fetchAllProducts);

productRouter.post("/", createProduct);

module.exports = productRouter;
