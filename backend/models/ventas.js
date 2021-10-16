const mongoose = require("mongoose");

const venta = mongoose.Schema({
  producto: { type: String},
  cliente: { type: String },
  idCliente: {type: Number},
  vendedor:{type:String},
  precio: { type: Number},
  cantidad: {type: Number}
});

module.exports = mongoose.model("Venta", venta);