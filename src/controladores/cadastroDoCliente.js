const bcrypt = require('bcrypt');
const knex = require('./../conexao');

async function cadastroDoCliente(req, res) {
  const { id_banco, nome, email, senha, data_nascimento, cep } = req.body;

  try {

    const clienteExiste = await knex('clientes').where({ email }).andWhere({ id_banco }).first();

    if (clienteExiste) {
      return res.status(400).json({ mensagem: "Não é possivel criar uma conta com esse email." });
    }

    const senhaCriptgofrada = await bcrypt.hash(senha, 10);

    await knex('clientes').insert({
      id_banco,
      nome,
      email,
      senha: senhaCriptgofrada,
      data_nascimento,
      saldo: 0,
      cep
    })

    return res.status(201).json({ mensagem: "Cliente cadastrado!" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor!" });
  }
}

module.exports = cadastroDoCliente;