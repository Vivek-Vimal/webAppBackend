const moongose = require("mongoose");

const { Schema } = moongose;

const categorySchema = new Schema({
  title: { required: true, type: String },
});

module.exports.categoryModel = moongose.model("category", categorySchema);
