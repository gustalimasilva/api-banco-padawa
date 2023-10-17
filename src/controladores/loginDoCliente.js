const knex = require('./../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function loginCliente(req, res) {
  const { email, senha } = req.body;

  try {
    const cliente = await knex('clientes').where({ email }).first()

    if (!cliente) {
      return res.status(404).json({ mensagem: "E-mail inválido." });
    }

    if (!(await bcrypt.compare(senha, cliente.senha))) {
      return res.status(400).json({ mensagem: "Senha invalida." });
    }

    const token = jwt.sign({ id: cliente.id }, process.env.HASH, {
      expiresIn: "24h",
    });

    const { senha: _, ...usuarioLogado } = cliente;

    return res.json({ usuario: usuarioLogado, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = loginCliente