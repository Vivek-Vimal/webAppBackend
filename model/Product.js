const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    min: [1, "Price can not be less then 1"],
    max: [100000, "Price can not be greater then 1Lakh"],
  },
  rating: { type: Number, default: 3 },
  category: { type: String, required: true },
});

exports.ProductModel = mongoose.model("product", productSchema);
