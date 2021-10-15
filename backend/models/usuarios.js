const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  estado: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', UserSchema);