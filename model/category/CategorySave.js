const moongose = require("mongoose");

const { Schema } = moongose;

const categorySchema = new Schema({
  title: { required: true, type: String },
});

module.exports =
  moongose.models.category || moongose.model("category", categorySchema);
