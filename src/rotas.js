const express = require('express');
const cadastroDoCliente = require('./controladores/cadastroDoCliente');
const cadastroDeBanco = require('./controladores/cadastroDeBanco');
const validarSchema = require('./intermediarios/validarSchema');
const cadastroDoClienteSchema = require('./schemas/cadastroDoClienteSchema');
const loginCliente = require('./controladores/loginDoCliente');
const validarLogin = require('./intermediarios/validarLogin');
const deposito = require('./controladores/deposito');
const transferencia = require('./controladores/transferencia');
const rotas = express();

rotas.post('/clientes', validarSchema(cadastroDoClienteSchema), cadastroDoCliente);
rotas.post('/bancos', cadastroDeBanco);
rotas.post('/login', loginCliente)

rotas.use(validarLogin)
rotas.post('/deposito', deposito);
rotas.post('/transferencia', transferencia);

module.exports = rotas;