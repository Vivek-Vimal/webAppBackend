const mongoose = require("mongoose");

const { Schema } = mongoose;

const details = { type: String, required: true };

const authSchema = new Schema({
  userName: details,
  email: {...details, unique: true},
  password: details,
  role: details,
});

exports.Auth = mongoose.model("Auth", authSchema);
