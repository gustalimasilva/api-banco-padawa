const knex = require('./../conexao');

async function cadastroDeBanco(req, res) {
  const { nome, cnpj, data_fundacao } = req.body;

  try {
    const bancoExiste = await knex('bancos').where({ cnpj }).first();

    if (bancoExiste) {
      return res.status(400).json({ mensagem: "Não é possivel cadastrar um banco com esse cnpj" });
    }

    await knex('bancos').insert({
      nome,
      cnpj,
      data_fundacao
    });

    return res.status(201).json({ mensagem: "Banco cadastrado com sucesso." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = cadastroDeBanco;