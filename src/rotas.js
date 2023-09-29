const express = require('express');
const cadastroDoCliente = require('./controladores/cadastroDoCliente');
const rotas = express();

rotas.post('/clientes', cadastroDoCliente);

module.exports = rotas;