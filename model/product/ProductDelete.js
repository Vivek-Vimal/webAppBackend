const moongoose = require("mongoose");

const { Schema } = moongoose;

const productDeleteSchema = new Schema({
  _id: { type: String, required: true },
});

module.exports =
  moongoose.models.product || moongoose.model("product", productDeleteSchema);
