const joi = require('joi');

const cadastroDoClienteSchema = joi.object({
  id_banco: joi.number().required().messages({
    "number.base": "ID do banco deve ser um número.",
    "any.required": "ID do banco é obrigatório."
  }),
  nome: joi.string().regex(/^(?=.*[a-zA-Z]).+$/).required().messages({
    "string.empty": "O campo nome não pode ser vazio",
    "string.pattern.base": "O campo nome não pode ser apenas números.",
    "any.required": "O Campo nome é obrigatório."

  }),
  email: joi.string().regex(/^(?=.*[a-zA-Z]).+$/).email().required().messages({
    "string.email": "O campo email deve ter o formato de email.",
    "string.empty": "O campo email não pode ser vazio",
    "string.pattern.base": "O campo email não pode ser apenas números.",
    "any.required": "O Campo email é obrigatório."
  }),
  senha: joi.string().min(8).required().messages({
    "string.min": "O campo senha deve ter no minimo 8 caracteres.",
    "string.empty": "O campo senha não pode ser vazio",
    "any.required": "O Campo senha é obrigatório."
  }),
  data_nascimento: joi.date().required().messages({
    "date.base": "O campo data de nascimento deve seguir o fomarto de data.",
    "any.required": "O Campo data de nascimento é obrigatório."
  }),
  cep: joi.string().regex(/^\d+./).length(8).required().messages({
    "string.pattern.base": "o CEP tem que conter apenas números.",
    "any.required": "O Campo CEP é obrigatório.",
    "string.empty": "O campo CEP não pode ser vazio",
  })
})

module.exports = cadastroDoClienteSchema;