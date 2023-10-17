const knex = require('./../conexao');

async function deposito(req, res) {
  const { deposito } = req.body
  const { id } = req.cliente

  if (valor < 1) {
    return res.status(400).json({ mensagem: "Deposito apenas possivel com numero maiores que zero." })
  }

  try {
    const cliente = await knex('clientes').where({ id }).first()
    const novoSaldo = cliente.saldo + deposito

    await knex('clientes').update('saldo', novoSaldo).where({ id })

    return res.status(202).json({ mensagem: "Deposito realizado com sucesso." })
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

module.exports = deposito