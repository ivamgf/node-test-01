const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express( );
app.use(express.json( ));
app.use(cors( ));

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
require('./src/models/');

// Chama a primeira rota
app.use('/api', require('./src/routes'));
app.listen(3001);
