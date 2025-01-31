const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  productQuality: String,
  productType: String,
  reviews: { type: [String], default: [] }
});

module.exports = mongoose.model("Product", ProductSchema);
