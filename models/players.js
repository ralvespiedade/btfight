const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  age: {type: Number, required: true},
  email: {type: String, required: true, unique: true},
  ranking: {type: Number, default: 1000} // Ranking inicial padrão 
});

module.exports = mongoose.model('Player', playerSchema)