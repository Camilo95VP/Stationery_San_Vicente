const mongoose = require("mongoose");

const producto = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  url: { type: String },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
  },
  disponible: { type: Boolean },
  cantity: { type: Number },  
});

module.exports = mongoose.model("Producto", producto);
