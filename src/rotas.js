const express = require('express');
const cadastroDoCliente = require('./controladores/cadastroDoCliente');
const cadastroDeBanco = require('./controladores/cadastroDeBanco');
const validarSchema = require('./intermediarios/validarSchema');
const cadastroDoClienteSchema = require('./schemas/cadastroDoClienteSchema');
const loginCliente = require('./controladores/loginDoCliente');
const rotas = express();

rotas.post('/clientes', validarSchema(cadastroDoClienteSchema), cadastroDoCliente);
rotas.post('/bancos', cadastroDeBanco);
rotas.post('/login', loginCliente)

module.exports = rotas;