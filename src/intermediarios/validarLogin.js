const jwt = require("jsonwebtoken");
const knex = require("./../conexao");

async function validarLogin(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json("Não autorizado");
  }

  try {
    const token = authorization.replace('Bearer ', '').trim();

    const { id } = jwt.verify(token, process.env.HASH);

    const clienteExiste = await knex('clientes').where({ id }).first();

    if (!clienteExiste) {
      return res.status(404).json('Cliente não encontrado');
    }

    const { password, ...cliente } = clienteExiste;

    req.cliente = cliente;

    next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = validarLogin;