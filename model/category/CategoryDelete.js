const moongose = require("mongoose");

const { Schema } = moongose;

const categoryDeleteSchema = new Schema({
  _id: { required: true, type: String },
});

module.exports =
  moongose.models.category || moongose.model("category", categoryDeleteSchema);
