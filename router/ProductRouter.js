const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../controller/Product");

const productRouter = express.Router();

productRouter.get("/", fetchAllProducts);

productRouter.post("/", createProduct);

productRouter.delete("/", deleteProduct);

module.exports = productRouter;
