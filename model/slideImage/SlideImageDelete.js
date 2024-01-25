const moongoose = require("mongoose");

const { Schema } = moongoose;

const slideSchema = new Schema({
  _id: { type: String, required: true },
});

module.exports =
  moongoose.models.slideImg || moongoose.model("slideImg", slideSchema);
