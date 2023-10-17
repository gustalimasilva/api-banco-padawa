const knex = require('../conexao')

async function transferencia(req, res) {
  const { valor, destino } = req.body
  const { id } = req.cliente;

  if (destino === id) {
    return res.status(400).json({ mensagem: "Parece que você está tentando transferir para você mesmo" });
  }

  if (valor < 1) {
    return res.status(400).json({ mensagem: "Transferencia apenas possivel com numero maiores que zero." })
  }

  try {
    const destinoExiste = await knex('clientes').where('id', destino).first()
    const clienteExiste = await knex('clientes').where({ id }).first()

    if (!destinoExiste || !clienteExiste) {
      return res.status(400).json({ mensagem: "Impossivel realizar transferencias " })
    }

    if (clienteExiste.saldo < valor) {
      return res.status(400).json({ mensagem: "Valor da transferencia excede o saldo" });
    }
    await knex('clientes').update('saldo', clienteExiste.saldo - valor).where({ id })
    await knex('clientes').update('saldo', destinoExiste.saldo + valor).where('id', destino)
    await knex('transferencias').insert({
      valor,
      destino,
      origem: id,
      data_transferencia: new Date()
    })

    return res.status(200).json({ mensagem: "Transferencia realizada com sucesso" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = transferencia