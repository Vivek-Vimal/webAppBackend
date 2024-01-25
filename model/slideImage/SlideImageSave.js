const moongose = require("mongoose");

const { Schema } = moongose;

const slideImageSchema = new Schema({
  url: { required: true, type: String },
});

module.exports =
  moongose.models.slideImg || moongose.model("slideImg", slideImageSchema);
