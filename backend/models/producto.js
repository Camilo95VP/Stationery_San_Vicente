const mongoose = require("mongoose");

const product = mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  cantity: { type: Number, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true }
});

module.exports = mongoose.model("Product", product);