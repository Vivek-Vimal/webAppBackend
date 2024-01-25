const moongose = require("mongoose");

const { Schema } = moongose;

const brandSchema = new Schema({
  _id: { type: String, required: true },
});

module.exports = moongose.models.brand || moongose.model("brand", brandSchema);
