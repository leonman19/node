const express = require('express');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

app.use(bodyParse.json());

// importamos ruta
const router = require('./routes');

app.use('/productos', router);

// definimos las rutas
app.get('/', (req, res) => {
    res.send('Conectado');
});


// conexion DB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true }, (err, res) => {
  if (err) {
    return console.log(`error al conectar`)
  };
  console.log ('conexion a la base de datos establecida');
});


// arrancar servidor
const server = http.Server(app);
server.listen(3000, function() {
    console.log('listening on port 3000');
});