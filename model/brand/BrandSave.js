const mongoose = require("mongoose");

const { Schema } = mongoose;

const brandSchema = new Schema({
  url: { type: String, required: true },
});

module.exports = mongoose.models.brand || mongoose.model("brand", brandSchema);
