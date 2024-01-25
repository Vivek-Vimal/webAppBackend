const { brand } = require("./Brand");
const { ProductModel } = require("./Product");
const { auth } = require("./UserAuth");
const { slideModel } = require("./SlideImage");
//const { categoryModel, categoryDeleteModel } = require("./CategorySave");
const categoryModel = require("./category/CategorySave");
const categoryDeleteModel = require("./category/CategoryDelete");

module.exports = {
  brand,
  ProductModel,
  auth,
  slideModel,
  categoryModel,
  categoryDeleteModel,
};
