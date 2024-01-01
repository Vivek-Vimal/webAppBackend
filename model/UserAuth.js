const mongoose = require("mongoose");

const { Schema } = mongoose;

const details = { type: String, required: true };

const authSchema = new Schema({
  userName: details,
  email: details,
  password: details,
});

exports.auth = mongoose.model("auth", authSchema);
