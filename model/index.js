const { auth } = require("./UserAuth");
// here we import as any name (whatever we want): we haven't export by name
const categorySaveModel = require("./category/CategorySave");
const categoryDeleteModel = require("./category/CategoryDelete");
const productSaveModel = require("./product/ProductSave");
const productDeleteModel = require("./product/ProductDelete");
const brandSaveModel = require("./brand/BrandSave");
const brandDeleteModel = require("./brand/BrandDelete");
const slideImageSave = require("./slideImage/SlideImageSave");
const slideImageDelete = require("./slideImage/SlideImageDelete");

module.exports = {
  auth,
  categorySaveModel,
  categoryDeleteModel,
  productSaveModel,
  productDeleteModel,
  brandSaveModel,
  brandDeleteModel,
  slideImageSave,
  slideImageDelete,
};
