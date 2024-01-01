const mongoose = require("mongoose");

const { Schema } = mongoose;

const brandSchema = new Schema({
  image: { type: String, required: true },
});

exports.brand = mongoose.model("brand", brandSchema);
