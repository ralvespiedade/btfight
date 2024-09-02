const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Meddleware
app.use(bodyParser.json());
app.use(cors());

//Conexão com MongoDb
mongoose.connect('mongodb://localhost:27017/btfight', {
  
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.log('Erro ao conectar ao MongoDB', err);
})
 
//Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})



