const express = require('express');
const cadastroDoCliente = require('./controladores/cadastroDoCliente');
const cadastroDeBanco = require('./controladores/cadastroDeBanco');
const rotas = express();

rotas.post('/clientes', cadastroDoCliente);
rotas.post('/bancos', cadastroDeBanco);

module.exports = rotas;